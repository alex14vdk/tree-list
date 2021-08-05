import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useRef, useState} from "react";
import {addClientToHousing, deleteClientFromHousing} from "../../redux/actions/clients";
import {getHousingList} from "../../redux/actions/housing";
import Handlers from "../../utils/handlers";

const containerClientsList = (Wrapped) => (props) => {
    const {housing: {dataOriginal}, options: {curFlat, curCompany}} = useSelector(state => state);
    const refLink = useRef(null);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const addClient = (addressId) => {
        if (name && phone && email) {
            const data = {
                name,
                phone,
                email
            }
            dispatch(addClientToHousing(
                data,
                addressId,
                () => dispatch(getHousingList(curCompany))
                )
            )
            setName("")
            setPhone("")
            setEmail("")
        }
    }

    const addressInfo = useMemo(() => {
        if (curFlat && dataOriginal.length) {
            return dataOriginal.filter(e => curFlat === e.addressId)[0]
        } else {
            return null;
        }
    }, [curCompany, curFlat, dataOriginal])

    const itemDelete = (bindId) => {
        dispatch(deleteClientFromHousing(bindId,
            () => dispatch(getHousingList(curCompany)))
        )
    }

    useEffect(() => {
        if (refLink.current) {
            Handlers.setSameBlockHeight(refLink.current.children);
        }
    }, [addressInfo]);

    const allProp = {
        ...props,
        addressInfo,
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        refLink,
        addClient,
        itemDelete
    }

    return <Wrapped {...allProp} />;
}

export default containerClientsList;