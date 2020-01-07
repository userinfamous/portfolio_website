import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Drawer, CssBaseline, List, Divider, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import { ContactMail, Home, AccountBoxRounded, Work, LinkedIn, GitHub, Instagram, Facebook, Twitter } from '@material-ui/icons';


const drawerWidth = 80;

const useStyles = makeStyles(theme => ({
  topIcon: {
    top: "0px",
    color: "#505050",
    textAlign: "center",
    marginTop: "0.5em"
  },
  icons: {
    color: "#505050",
    marginTop: "0.5em",
    marginLeft: "0.45em"
  },
  socialIcons: {
    color: "#505050",
    marginLeft: "0.45em",
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#1C1C1C'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#000",
    padding: theme.spacing(3),
    height: "100vh"
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Typography component="div" className={classes.topIcon} variant="h5">
          <Box fontWeight="fontWeightBold">V</Box></Typography>
        <Divider />

        <List>
          <ListItem button >
            <ListItemIcon><Home className={classes.icons}/></ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon><AccountBoxRounded className={classes.icons}/></ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon><Work className={classes.icons}/></ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon><ContactMail className={classes.icons}/></ListItemIcon>
          </ListItem>
        </List>

        <Divider style={{marginTop:"3em"}}/>
        
        <List>
          <ListItem button >
            <ListItemIcon><GitHub className={classes.socialIcons}/></ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon><LinkedIn className={classes.socialIcons}/></ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon><Facebook className={classes.socialIcons}/></ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon><Instagram className={classes.socialIcons}/></ListItemIcon>
          </ListItem>
          <ListItem button >
            <ListItemIcon><Twitter className={classes.socialIcons}/></ListItemIcon>
          </ListItem>
        </List>

      </Drawer>
      <main className={classes.content}>
        
      </main>
    </div>
  );
}