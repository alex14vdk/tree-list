import {useDispatch, useSelector} from "react-redux";
import {setCurFlat} from "../../redux/actions/options";


const containerHousingTreeList = (Wrapped) => (props) => {
    const {options: {menuOpen}, housing: {data, loading}} = useSelector((state) => state);
    const dispatch = useDispatch();

    const chooseFlat = (addressId) => {
        dispatch(setCurFlat(addressId))
    }
    
    const allProp = {
        ...props,
        menuOpen,
        data,
        loading,
        chooseFlat
    }

    return <Wrapped {...allProp} />;
}

export default containerHousingTreeList;