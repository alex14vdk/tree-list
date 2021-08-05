import {makeStyles} from "@material-ui/core/styles";
import {drawerWidth} from "../App/style";

export const drawerHeader = makeStyles((theme) => ({
    root:{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "space-between",
        textAlign:"center"
    }
}))

export const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "1.5rem",
        margin: 0,
        padding: theme.spacing(0, 1),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    list:{
        textAlign:"center"
    },
    loader:{
        margin:theme.spacing(3)
    }
}))