import {CLIENT_ADD, CLIENT_DELETE, CLIENT_REQUEST, CLIENT_FAILURE} from "../types";

const initialState = {
    loading: true,
    error: null
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case CLIENT_ADD:
            return {
                ...state,
                loading: false,
                error: null
            };
        case CLIENT_DELETE:
            return {
                ...state,
                loading: false,
                error: null
            };
        case CLIENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CLIENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
};