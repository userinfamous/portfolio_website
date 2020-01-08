import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
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
    marginLeft: "0.45em"
  },
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    display: "flex",
    height: "100vh"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#1C1C1C"
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        orientation="vertical"
        variant="standard"
        value={value}
        onChange={handleChange}
        aria-label="side nav"
        className={classes.tabs}
      >
        <Tab
          classes={{ root: classes.tab }}
          icon={<Home />}
          label="Home"
          {...a11yProps(0)}
        />
        <Tab icon={<AccountBoxRounded />} label="About me" {...a11yProps(1)} />
        <Tab icon={<Work />} {...a11yProps(2)} label="Projects" />
        <Tab icon={<ContactMail />} {...a11yProps(3)} label="Contact" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <HomePage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
