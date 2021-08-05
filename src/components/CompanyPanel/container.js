import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCompaniesList} from "../../redux/actions/companies";
import {getHousingList} from "../../redux/actions/housing";
import {menu, setCurCompany} from "../../redux/actions/options";


const containerCompanyPanel = (Wrapped) => (props) => {
    const {companies: {data}, options: {menuOpen, curCompany}} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompaniesList());
    }, []);

    const loadHousing = (id) => {
        handleDrawerClose();
        if (curCompany !== id) {
            dispatch(getHousingList(id))
            dispatch(setCurCompany(id))
        }
    }

    const handleDrawerClose = () => {
        dispatch(menu(false));
    };

    const allProp = {
        ...props,
        menuOpen,
        data,
        loadHousing,
        handleDrawerClose
    }

    return <Wrapped {...allProp} />;
}

export default containerCompanyPanel;