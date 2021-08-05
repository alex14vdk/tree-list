import {CLIENT_ADD, CLIENT_DELETE, CLIENT_REQUEST, CLIENT_FAILURE} from "../types";
import Service from "../../utils/service";

export const clientAdd = () => {
    return {
        type: CLIENT_ADD
    }
};
export const clientDelete = () => {
    return {
        type: CLIENT_DELETE
    }
};
export const clientRequest = () => {
    return {
        type: CLIENT_REQUEST
    }
};
export const clientError = (error) => {
    return {
        type: CLIENT_FAILURE,
        payload: error
    }
};

export const addClientToHousing = (clientData, addressId, successCallback) => (dispatch) => {
    dispatch(clientRequest());
    Service.post(
        'HousingStock/client', clientData,
        response => {
            Service.put(
                "HousingStock/bind_client",
                {
                    "AddressId": addressId,
                    "ClientId": response.data.id
                },
                response => {
                    dispatch(clientAdd());
                    successCallback();
                },
                error => {
                    dispatch(clientError(error))
                }
            )
        },
        error => {
            dispatch(clientError(error))
        }
    )
}

export const deleteClientFromHousing = (bindId, successCallback) => (dispatch) => {
    dispatch(clientRequest());
    Service.del(
        `HousingStock/bind_client/${bindId}`,
        response => {
            dispatch(clientDelete())
            successCallback()
        },
        error => {
            dispatch(clientError(error))
        }
    )
}