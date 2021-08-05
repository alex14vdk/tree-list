import {OPTION_CLIENT_PANEL, OPTION_MENU_OPEN, OPTION_SET_COMPANY, OPTION_SET_FLAT} from "../types";

export const menu = (payload) => {
    return {
        type: OPTION_MENU_OPEN,
        payload: payload
    }
};
export const setCurCompany = (payload) => {
    return {
        type: OPTION_SET_COMPANY,
        payload: payload
    }
};
export const clientPanelShow = (payload) => {
    return {
        type: OPTION_CLIENT_PANEL,
        payload: payload
    }
}
export const setCurFlat = (payload) => {
    return {
        type: OPTION_SET_FLAT,
        payload: payload
    }
};