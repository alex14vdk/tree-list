import {combineReducers} from "redux";
import housing from "./reducers/housing";
import companies from "./reducers/companies";
import clients from "./reducers/clients";
import options from "./reducers/options";

export default combineReducers({
    housing,
    companies,
    clients,
    options
});