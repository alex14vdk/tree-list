import {OPTION_CLIENT_PANEL, OPTION_MENU_OPEN, OPTION_SET_COMPANY, OPTION_SET_FLAT} from "../types";

const initialState = {
    menuOpen: true,
    curCompany: null,
    curFlat: null,
    clientPanel: false
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case OPTION_MENU_OPEN:
            return {
                ...state,
                menuOpen:payload,
            };
        case OPTION_SET_COMPANY:
            return {
                ...state,
                curCompany:payload,
            };
        case OPTION_CLIENT_PANEL:
            return {
                ...state,
                clientPanel:payload,
            };
        case OPTION_SET_FLAT:
            return {
                ...state,
                curFlat:payload,
            };
        default:
            return state;
    }
};