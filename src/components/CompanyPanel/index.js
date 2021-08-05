import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCompaniesList} from "../../redux/actions/companies";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import {menu, setCurCompany} from "../../redux/actions/options";
import {drawerHeader, useStyles} from "./style";
import {getHousingList} from "../../redux/actions/housing";
import CircularProgress from "@material-ui/core/CircularProgress";


const CompanyList = (props) => {
    const {companies: {data}, options: {menuOpen, curCompany}} = useSelector(state => state);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getCompaniesList());
    }, []);

    const loadHousing = (id) => {
        handleDrawerClose();
        if(curCompany !== id){
            dispatch(getHousingList(id))
            dispatch(setCurCompany(id))
        }
    }

    const handleDrawerClose = () => {
        dispatch(menu(false));
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={menuOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={drawerHeader().root}>
                <h1 className={classes.title}>Список УК</h1>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List component="nav" className={`${classes.list}`}  aria-label="mailbox folders">
                {
                    data && data.length
                        ?
                        data.map(item => (
                            <ListItem button key={item.id} onClick={()=>loadHousing(item.id)}>
                                <ListItemText primary={item.name}/>
                            </ListItem>
                        ))
                        :
                    <CircularProgress className={`${classes.loader}`} color="inherit"/>
                }
            </List>
        </Drawer>
    )
}

export default CompanyList;