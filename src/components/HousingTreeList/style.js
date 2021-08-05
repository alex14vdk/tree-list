import {makeStyles} from "@material-ui/core";
import {drawerWidth} from "../App/style";

export const treeWidth = 400;

export const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    contentWrapper: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        [theme.breakpoints.down('sm')]: {
            height: "100vh"
        },
    },
    tree: {
        flexGrow: 1,
        flexShrink: 0,
        paddingRight: "16px !important",
        maxWidth: treeWidth,
        [theme.breakpoints.down('sm')]: {
            height: "30%",
            overflow: "auto",
            maxWidth: "100%",
            marginBottom: "20px"
        },
    }
}));