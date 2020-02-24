import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    height: "7.5em"
  },
  toolbar: {
    backgroundColor: "black",
    height: "120px"
  },
  logo: {
    height: "6em",
    margin: "8px"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 110,
    marginLeft: "5px"
  },
  tabContainer: {
    marginLeft: "auto",
    height: "4em"
  },
  deploy: {
    ...theme.typography.deploy,
    borderRadius: "50px",
    backgroundColor: theme.palette.primary.main,
    margin: "0 30px 20px 20px ",
  },
  menu: {
    backgroundColor: "black",
    color: "white",
    width: "210px",
    borderRadius: "16px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity:0.7,
    "&:hover": {
      opacity: 1
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = event => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && selectedTab === false) {
      setSelectedTab(0);
    } else if (window.location.pathname === "/home" && selectedTab !== 0) {
      setSelectedTab(0);
    } else if (window.location.pathname === "/services" && selectedTab !== 1) {
      setSelectedTab(1);
    } else if (window.location.pathname === "/about-us" && selectedTab !== 2) {
      setSelectedTab(2);
    } else if (
      window.location.pathname === "/contact-us" &&
      selectedTab !== 3
    ) {
      setSelectedTab(3);
    }
  }, [selectedTab]);

  const menuOptions = [
    {to: "/big-data", label: "Big Data"},
    {to: "/hpc", label: "HPC"},
    {to: "/elasticsearch", label: "Elasticsearch"},
    {to: "/redis", label: "Redis"},
    {to: "/ceph", label: "Ceph"},
    {to: "/batch-enrichment", label: "Batch Enrichment"},
    {to: "/devops", label: "DevOps"},
    {to: "/logging", label: "Logging"},
  ]

  const menuItems = menuOptions.map(item => (
    <MenuItem
      key={item.to}
      onClick={() => {handleClose(); setSelectedTab(1)}}
      component={Link}
      to={item.to}
      classes={{root: classes.menuItem}}
    >
      {item.label}
    </MenuItem>
  ))

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters className={classes.toolbar}>
            <Button
              onClick={() => setSelectedTab(false)}
              component={Link}
              to="/"
            >
              <img src={logo} alt="OSL" className={classes.logo} />
            </Button>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              indicatorColor="secondary"
              variant="fullWidth"
              className={classes.tabContainer}
            >
              <Tab
                label="Home"
                className={classes.tab}
                component={Link}
                to="/home"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                label="Services"
                onMouseOver={event => handleClick(event)}
                className={classes.tab}
                component={Link}
                to="/services"
              />
              <Tab
                label="About Us"
                className={classes.tab}
                component={Link}
                to="/about-us"
              />
              <Tab
                label="Contact Us"
                className={classes.tab}
                component={Link}
                to="/contact-us"
              />
            </Tabs>
            <Button
              className={classes.deploy}
              variant="contained"
              component={Link}
              to="/deploy"
            >
              Deploy!
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{paper: classes.menu}}
            >
              {menuItems}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}
