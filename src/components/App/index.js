import React from 'react';
import CompanyPanel from "../CompanyPanel";
import HousingTreeList from "../HousingTreeList";
import NavTop from "../NavTop";
import {useStyles} from "./style";

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavTop/>
            <CompanyPanel/>
            <HousingTreeList/>
        </div>
    )
}

export default App;