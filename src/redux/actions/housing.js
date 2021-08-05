import {HOUSING_REQUEST, HOUSING_SUCCESS, HOUSING_FAILURE} from "../types";
import Service from "../../utils/service";
import LTT from "list-to-tree";


export const housingRequest = () => {
    return {
        type: HOUSING_REQUEST
    }
};
export const housingLoaded = (data, dataOriginal) => {
    return {
        type: HOUSING_SUCCESS,
        payload: {data, dataOriginal}
    }
};
export const housingError = (error) => {
    return {
        type: HOUSING_FAILURE,
        payload: error
    }
}


const getTreeFormat = (dataArr) => {
    let result = [];
    for (let {streetName, building, flat, clients, addressId, houseId, streetId} of dataArr) {
        result = [...result,
            {
                id: streetId,
                name: `Улица ${streetName}`,
                parent: 0
            },
            {
                id: houseId,
                name: `Дом ${building}`,
                parent: streetId
            },
            {
                name: `Квартира ${flat}`,
                parent: houseId,
                addressId,
                clients,
            }
        ]
    }
    result = Array.from(new Set(result.map(JSON.stringify))).map(JSON.parse);
    result = new LTT(result, {
        key_id: 'id',
        key_parent: 'parent'
    });
    result = result.GetTree();
    return result;
}

export const getHousingList = (companyId) => (dispatch) => {
    dispatch(housingRequest());
    Service.get(`HousingStock?companyId=${companyId}`,
        ({data}) => {
            dispatch(housingLoaded(getTreeFormat(data), data))
        },
        error => {
            dispatch(housingError(error))
        }
    )
}