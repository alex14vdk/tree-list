import React, {useMemo} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {menu} from "../../redux/actions/options";
import {useStyles} from "./style";


const NavTop = (props) => {
    const dispatch = useDispatch();
    const {options: {menuOpen, curCompany}, companies: {data}} = useSelector(state => state);
    const classes = useStyles();

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

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: menuOpen,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, menuOpen && classes.hide)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    {companyName}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavTop;