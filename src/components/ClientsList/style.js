import {makeStyles} from "@material-ui/core/styles";
import {treeWidth} from "../HousingTreeList/style";

const baskSize = 40;

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: `calc(100% - ${treeWidth}px)`,
        minWidth: "280px",
        minHeight: "calc(100vh - 88px*2)",
        borderLeft: "1px solid lightgrey",
        paddingLeft: "16px",
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            maxWidth: "100%",
            borderLeft: 0,
            borderTop: "1px solid lightgrey",
            paddingLeft: 0
        },
    },
    info: {
        width: "100%",
        padding: theme.spacing(2, 0),
        borderBottom: "1px solid lightgrey"
    },
    title: {
        margin: 0
    },
    clientsList: {
        padding: theme.spacing(2, 0),
    },
    paper: {
        position: "relative",
        padding: theme.spacing(1),
        paddingRight: baskSize
    },
    listItem: {
        position: "relative",
        padding: theme.spacing(0, 1),
    },
    key: {
        flexGrow: 0,
        flexShrink: 0,
        marginRight: 10,
        '& span': {
            fontSize: "0.9rem",
            color: "grey"
        }
    },
    itemDelete: {
        position: "absolute",
        right: 0,
        top: 0,
        width: baskSize,
        height: baskSize,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& *': {
            color: "grey",
            cursor: "pointer",
            fontSize: "2rem"
        }
    },
    form: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: 0,
        flexWrap: "wrap",
        '& *': {
            margin: 5,
            flexGrow: 1,
            maxWidth: 320,
            [theme.breakpoints.down('sm')]: {
                margin: 0,
                marginRight: 5
            },
        }
    },
    btn: {
        maxWidth: "initial",
        [theme.breakpoints.down('sm')]: {
            marginTop: 15
        },
    }
}));