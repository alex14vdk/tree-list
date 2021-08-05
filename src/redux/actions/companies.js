import {COMPANIES_REQUEST,COMPANIES_SUCCESS,COMPANIES_FAILURE} from "../types";
import Service from "../../utils/service";


export const companiesRequest = () => {
    return {
        type: COMPANIES_REQUEST
    }
};
export const companiesLoaded = (data) => {
    return {
        type: COMPANIES_SUCCESS,
        payload: data
    }
};
export const companiesError = (error) => {
    return {
        type: COMPANIES_FAILURE,
        payload: error
    }
};


export const getCompaniesList = () => (dispatch) => {
    dispatch(companiesRequest());
    Service.get('Request/companies',
        ({data})=>{
            dispatch(companiesLoaded(data))
        },
        error => {
            dispatch(companiesError(error))
        }
    )
}