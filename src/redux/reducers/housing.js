import {HOUSING_REQUEST, HOUSING_SUCCESS, HOUSING_FAILURE} from "../types";

const initialState = {
    data: [],
    dataOriginal: [],
    loading: false,
    error: null,
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case HOUSING_REQUEST:
            return {
                ...state,
                data: [],
                dataOriginal: [],
                loading: true,
                error: null
            };
        case HOUSING_SUCCESS:
            return {
                ...state,
                data: payload.data,
                dataOriginal: payload.dataOriginal,
                loading: false,
                error: null
            };
        case HOUSING_FAILURE:
            return {
                ...state,
                data: [],
                dataOriginal: [],
                loading: false,
                error: payload
            };
        default:
            return state;
    }
};