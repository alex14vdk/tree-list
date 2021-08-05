import {useDispatch, useSelector} from "react-redux";
import {menu} from "../../redux/actions/options";
import {useMemo} from "react";


const containerNavTop = (Wrapped) => (props) => {
    const dispatch = useDispatch();
    const {options: {menuOpen, curCompany}, companies: {data}} = useSelector(state => state);

    const handleDrawerOpen = () => {
        dispatch(menu(true));
    };

    const companyName = useMemo(() => {
        let curElement = data.filter(e => e.id === curCompany)
        curElement = curElement[0];

        if (curElement) {
            return curElement.name
        } else return "React App"

    }, [curCompany])

    const allProp = {
        ...props,
        menuOpen,
        companyName,
        handleDrawerOpen
    }

    return <Wrapped {...allProp} />;
}

export default containerNavTop;