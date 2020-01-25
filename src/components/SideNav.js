import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  AppBar,
  Grid,
  Tabs,
  Tab,
  Typography,
  Box,
  ListItem,
  ListItemIcon,
  List
} from "@material-ui/core";
import {
  ContactMail,
  Home,
  AccountBoxRounded,
  Work,
  LinkedIn,
  GitHub,
  Instagram,
  Facebook,
  Twitter
} from "@material-ui/icons";
import HomePage from "../pages/HomePage";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const useStyles = makeStyles(theme => ({
  topIcon: {
    color: "#505050",
    textAlign: "center",
    marginTop: "0.5em",
    marginBottom: "30vh",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "9vh"
    }
  },
  socialIcons: {
    color: "#505050",
    marginLeft: "15%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "90%"
    }
  },
  socialList: {
    marginTop: "75%",
    [theme.breakpoints.down("lg")]: {
      marginTop: "10%"
    }
  },
  root: {
    backgroundColor: "#000"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function SideNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2} sm={3} md={2} xl={1}>
          <AppBar position="sticky">
            <StyledTabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="side nav"
            >
              {/* Logo */}
              <Typography component="div" className={classes.topIcon} variant="h5">
                <Box fontWeight="fontWeightBold">V</Box>
              </Typography>

              {/* Tabs */}
              <StyledTab icon={<Home />} label="Home" {...a11yProps(0)} />
              <StyledTab icon={<AccountBoxRounded />} label="About me" {...a11yProps(1)} />
              <StyledTab icon={<Work />} {...a11yProps(2)} label="Projects" />
              <StyledTab icon={<ContactMail />} {...a11yProps(3)} label="Contact" />

              {/* Social Icons */}
              <List className={classes.socialList}>
                <ListItem
                  button
                  component="a"
                  href="https://github.com/userinfamous"
                  target="_blank"
                >
                  <ListItemIcon>
                    <GitHub className={classes.socialIcons} />
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="https://www.linkedin.com/in/vuottek-un/"
                  target="_blank"
                >
                  <ListItemIcon>
                    <LinkedIn className={classes.socialIcons} />
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="https://www.facebook.com/profile.php?id=100015006365789"
                  target="_blank"
                >
                  <ListItemIcon>
                    <Facebook className={classes.socialIcons} />
                  </ListItemIcon>
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="https://www.instagram.com/autisticcatt/"
                  target="_blank"
                >
                  <ListItemIcon>
                    <Instagram className={classes.socialIcons} />
                  </ListItemIcon>
                </ListItem>
                <ListItem button component="a" href="https://twitter.com/VVoshe" target="_blank">
                  <ListItemIcon>
                    <Twitter className={classes.socialIcons} />
                  </ListItemIcon>
                </ListItem>
              </List>
            </StyledTabs>
          </AppBar>
        </Grid>
        <Grid item xs={10} sm={9} md={10} xl={11}>
          <TabPanel value={value} index={1}>
            <HomePage />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AboutMe />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Projects />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Contact />
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

const StyledTabs = withStyles(theme => ({
  root: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#1c1c1c",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
      width: "10rem"
    }
  },
  indicator: {
    backgroundColor: "#5E2BED"
  }
}))(Tabs);

const StyledTab = withStyles(theme => ({
  root: {
    color: "#505050",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.6rem"
    },
    "&:hover": {
      color: "#fff",
      backgroundColor: "#424242"
    },
    "&$selected": {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  selected: {}
}))(Tab);
