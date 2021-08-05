import React from 'react';
import {useStyles} from "./style";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import containerClientsList from "./container";

const ClientList = ({addressInfo, name, setName, phone, setPhone, email, setEmail, refLink, addClient, itemDelete}) => {
    const classes = useStyles();

    if (!addressInfo) {
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
                    <TextField required id="name" label="name" value={name} onChange={e => setName(e.target.value)}/>
                    <TextField required id="phone" label="phone" value={phone}
                               onChange={e => setPhone(e.target.value)}/>
                    <TextField required id="email" label="email" value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    <Button variant="outlined" className={classes.btn} onClick={() => addClient(addressInfo.addressId)}>
                        Добавить жильца
                    </Button>
                </form>
                <Grid ref={refLink} className={classes.clientsList} container spacing={3}>
                    {
                        addressInfo.clients.map(client => (
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={client.id}>
                                <Paper className={classes.paper}>
                                    <span className={classes.itemDelete} onClick={() => itemDelete(client.bindId)}>
                                        <DeleteOutlinedIcon/>
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

export default containerClientsList(ClientList);