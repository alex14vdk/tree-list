import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useStyles} from "./style";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Handlers from "../../utils/handlers";
import {addClientToHousing, deleteClientFromHousing} from "../../redux/actions/clients";
import {getHousingList} from "../../redux/actions/housing";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ClientList = (props) => {
    const {housing: {dataOriginal}, options:{curFlat,curCompany}} = useSelector(state => state);
    const ref = useRef(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const addClient = (addressId) => {
        if(name && phone && email){
            const data = {
                name,
                phone,
                email
            }
            dispatch(addClientToHousing(
                data,
                addressId,
                ()=>dispatch(getHousingList(curCompany))
                )
            )
            setName("")
            setPhone("")
            setEmail("")
        }
    }

    const addressInfo = useMemo(()=>{
        if(curFlat && dataOriginal.length){
            return dataOriginal.filter(e=>curFlat===e.addressId)[0]
        }
        else{
            return null;
        }
    },[curCompany,curFlat,dataOriginal])

    const itemDelete = (bindId) => {
        dispatch(deleteClientFromHousing(bindId,
            ()=>dispatch(getHousingList(curCompany)))
        )
    }

    useEffect(() => {
        if(ref.current){
            Handlers.setSameBlockHeight(ref.current.children);
        }
    }, [addressInfo]);


    if(!addressInfo){
        return null
    }

    return (
        <div className={classes.root}>
            <div className={classes.info}>
                <h3 className={classes.title}>
                    {`ул. ${addressInfo.streetName} ${addressInfo.building}, кв. ${addressInfo.flat}`}
                </h3>
            </div>
            <div>
                <form className={`${classes.info} ${classes.form}`} noValidate autoComplete="off">
                    <TextField required id="name" label="name" value={name} onChange={e=>setName(e.target.value)}/>
                    <TextField required id="phone" label="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
                    <TextField required id="email" label="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <Button variant="outlined" className={classes.btn} onClick={()=>addClient(addressInfo.addressId)}>
                        Добавить жильца
                    </Button>
                </form>
                <Grid ref={ref} className={classes.clientsList} container spacing={3}>
                    {
                        addressInfo.clients.map(client=>(
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={client.id}>
                                <Paper className={classes.paper}>
                                    <span className={classes.itemDelete} onClick={()=>itemDelete(client.bindId)}>
                                        <DeleteOutlinedIcon />
                                    </span>
                                    <List>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="name:" className={classes.key}/>
                                            <ListItemText primary={client.name} className={classes.value}/>
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="phone:" className={classes.key}/>
                                            <ListItemText primary={client.phone} className={classes.value}/>
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="e-mail:" className={classes.key}/>
                                            <ListItemText primary={client.email} className={classes.value}/>
                                        </ListItem>
                                    </List>
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}

export default ClientList;