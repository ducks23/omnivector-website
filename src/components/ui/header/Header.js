import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from "../../../assets/OVLogoHoriz2color.svg";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    height: "5em"
  },
  logo: {
    height: "4em",
    margin: "8px",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 60,
    marginLeft: "15px"
  },
  tabContainer: {
    marginLeft: "auto",
    height: "4em",

  },
  deploy: {
    ...theme.typography.deploy,
    borderRadius: "50px",
    backgroundColor: theme.palette.secondary.dark,
    marginRight: "16px",
  }
}));


export default function Header(props) {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(false);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && selectedTab !== false ) {
      setSelectedTab(false)
    } else if (window.location.pathname === '/compute' && selectedTab !== 0 ) {
      setSelectedTab(0)
    } else if (window.location.pathname === '/storage' && selectedTab !== 1 ) {
      setSelectedTab(1)
    } else if (window.location.pathname === '/data-services' && selectedTab !== 2 ) {
      setSelectedTab(2)
    } else if (window.location.pathname === '/devops' && selectedTab !== 3 ) {
      setSelectedTab(3)
    } else if (window.location.pathname === '/about' && selectedTab !== 4 ) {
      setSelectedTab(4)
    }
  }, [selectedTab])

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
              <Button onClick={() => setSelectedTab(false)} component={Link} to="/">
                <img src={logo} alt="OSL" className={classes.logo} />
              </Button>
              <Tabs
                value={selectedTab}
                onChange={handleChange}
                indicatorColor="secondary"
                variant="fullWidth"
                className={classes.tabContainer}
                >
               <Tab label="Compute" className={classes.tab} component={Link} to="/compute"/>
               <Tab label="Storage" className={classes.tab} component={Link} to="/storage"/>
               <Tab label="Data Services" className={classes.tab} component={Link} to="/data-services"/>
               <Tab label="DevOps" className={classes.tab} component={Link} to="/devops"/>
               <Tab label="About" className={classes.tab} component={Link} to="/about"/>
             </Tabs>
             <Button
               className={classes.deploy}
               variant="contained"
               component={Link} to="/deploy"
              >
               Deploy Now!
             </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
