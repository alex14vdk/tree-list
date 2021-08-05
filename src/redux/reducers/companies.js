import {COMPANIES_REQUEST, COMPANIES_SUCCESS, COMPANIES_FAILURE} from "../types";

const initialState = {
    data: [],
    loading: true,
    error: null
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case COMPANIES_REQUEST:
            return {
                ...state,
                data: [],
                loading: true,
                error: null
            };
        case COMPANIES_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
                error: null
            };
        case COMPANIES_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                error: payload,
            };
        default:
            return state;
    }
};