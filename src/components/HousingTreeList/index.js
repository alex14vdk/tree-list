import React from 'react';
import clsx from "clsx";
import './style.js';
import {useStyles} from "./style";
import {drawerHeader} from "../CompanyPanel/style";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import ClientList from "../ClientsList";
import containerHousingTreeList from "./container";

const HousingTreeList = ({menuOpen, data, loading, chooseFlat}) => {
    const classes = useStyles();

    const renderTree = tree => {
        return tree.map(elem => {
            if (!elem.child) {
                return (
                    <TreeItem
                        nodeId={elem.name + elem.id + '_' + elem.parent}
                        label={elem.name}
                        key={elem.name + elem.id + '_' + elem.parent}
                        onClick={() => chooseFlat(elem.addressId)}
                    />
                );
            } else {
                return (
                    <TreeItem
                        nodeId={elem.name + elem.id + '_' + elem.parent}
                        label={elem.name}
                        key={elem.name + elem.id + '_' + elem.parent}
                    >
                        {renderTree(elem.child)}
                    </TreeItem>
                );
            }
        });
    };

    return (
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: menuOpen,
            })}
        >
            <div className={drawerHeader().root}/>

            <Backdrop
                className={classes.backdrop}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <div className={classes.contentWrapper}>
                <TreeView
                    className={classes.tree}
                    defaultExpanded={['0']}
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                >
                    {
                        data && data.length > 0
                        &&
                        renderTree(data)
                    }
                </TreeView>
                <ClientList/>
            </div>
        </main>
    )
}

export default containerHousingTreeList(HousingTreeList);