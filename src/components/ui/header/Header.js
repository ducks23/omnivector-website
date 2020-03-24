import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import DropdownMenu from "../dropdownMenu/DropdownMenu";
import Contact from "../contact/Contact";
import logo from "../../../assets/images/OVLogoHoriz2color.svg";
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
    height: "7.5em",
    [theme.breakpoints.down("md")]: {
      height: "4.5em"
    },
    [theme.breakpoints.down("xs")]: {
      height: 0
    }
  },
  toolbar: {
    backgroundColor: "black",
    height: "120px",
    [theme.breakpoints.down("md")]: {
      height: "80px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "60px"
    }
  },
  toolbarTransparent: {
    backgroundColor: "black",
    opacity: 0.85,
    height: "120px",
    [theme.breakpoints.down("md")]: {
      height: "70px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "50px"
    }
  },
  logo: {
    height: "6em",
    margin: "8px",
    [theme.breakpoints.down("md")]: {
      height: "4em",
      margin: "4px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
      margin: "2px"
    }
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
    borderRadius: "8px",
    width: "100px",
    backgroundColor: theme.palette.primary.main,
    margin: "0 30px 20px 20px "
  },
  menu: {
    backgroundColor: "black",
    color: "white",
    width: "210px",
    borderRadius: "16px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.5,
    "&:hover": {
      opacity: 1
    }
  },
  hamburger: {
    color: "white",
    height: "30px",
    width: "30px",
    marginRight: "8px"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    backgroundColor: "black",
    width: "20vw",
    [theme.breakpoints.down("xs")]: {
      width: "40vw"
    }
  },
  listItem: {
    ...theme.typography.tab,
    display: "flex",
    justifyContent: "left",
    textAlign: "left",
    margin: "auto",
    color: "white",
    opacity: 0.5,
    marginLeft: "auto"
  },
  selectedItem: {
    color: theme.palette.primary.dark,
    opacity: 1
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "transparent"
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    opacity: 0.7
  },
  servicesLabel: {
    ...theme.typography.tab,
    color: "white",
    width: "20vw",
    marginLeft: "1.5vw",
    textAlign: "center",
    opacity: 0.5
  },
  servicesIcon: {
    color: "white",
    textAlign: "center",
    opacity: 0.5,
    marginLeft: "15px"
  },
  servicesContainer: {
    width: "20vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  serviceslistItem: {
    fontFamily: "Ubuntu",
    textTransform: "none",
    fontWeight: 500,
    display: "flex",
    justifyContent: "left",
    textAlign: "left",
    margin: "auto",
    color: "white",
    opacity: 0.5,
    marginLeft: "2vw"
  },
  selectedServiceslistItem: {
    fontFamily: "Ubuntu",
    textTransform: "none",
    fontWeight: 700,
    display: "flex",
    justifyContent: "left",
    textAlign: "left",
    margin: "auto",
    color: theme.palette.primary.light,
    opacity: 1,
    marginLeft: "2vw"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event, newValue) => {
    props.setSelectedValue(newValue);
    props.setSelectedIndex(null);
  };

  const handleDrawerServiceClick = event => {
    props.setSelectedIndex(event);
    props.setSelectedValue(false);
  };

  const mainRoutes = [
    { name: "Home", link: "/", activeIndex: 0, icon: <HomeIcon /> },
    { name: "About Us", link: "/about", activeIndex: 1, icon: <InfoIcon /> }
  ];

  const menuOptions = [
    { to: "/big-data", label: "Big Data", activeIndex: 1, selectedIndex: 0 },
    { to: "/hpc", label: "HPC", activeIndex: 1, selectedIndex: 1 },
    {
      to: "/elasticsearch",
      label: "Elasticsearch",
      activeIndex: 1,
      selectedIndex: 2
    },
    { to: "/redis", label: "Redis", activeIndex: 1, selectedIndex: 3 },
    { to: "/ceph", label: "Ceph", activeIndex: 1, selectedIndex: 4 },
    { to: "/devops", label: "DevOps", activeIndex: 1, selectedIndex: 5 },
    { to: "/logging", label: "Logging", activeIndex: 1, selectedIndex: 6 }
  ];

  useEffect(() => {
    [...mainRoutes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.string}`:
          if (props.selectedValue !== route.index) {
            props.setSelectedValue(route.index);
          }
          break;
        default:
          break;
      }
    });
  }, [mainRoutes, props]);

  const tabs = (
    <Fragment>
      <Tabs
        value={props.selectedValue}
        onChange={handleChange}
        indicatorColor="primary"
        variant="fullWidth"
        className={classes.tabContainer}
      >
        {mainRoutes.map(route => (
          <Tab
            key={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            label={route.name}
            onMouseOver={route.mouseOver}
            className={classes.tab}
            component={Link}
            to={route.link}
          />
        ))}
      </Tabs>
      <DropdownMenu
        id="simple-menu"
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1302 }}
        setSelectedValue={() => props.setSelectedValue(false)}
        selectedValue={props.selectedValue}
        setSelectedIndex={props.setSelectedIndex}
        selectedIndex={props.selectedIndex}
        menuOptions={menuOptions}
        title="Services"
      />
      <Contact
        buttonPrefix=""
        buttonContext="Contact Us"
        buttonSuffix=""
        subjectPrefix=""
        subjectContext=""
        subjectSuffix=""
        buttonType="text"
      />
      <Button
        className={classes.deploy}
        variant="contained"
        component={Link}
        to="/deploy"
        onClick={() => props.setSelectedValue(null)}
      >
        Deploy!
      </Button>
    </Fragment>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          <div className={classes.toolbarMargin} />
          {mainRoutes.map(route => (
            <Fragment key={route.name}>
              <ListItem
                onClick={() => [
                  setDrawerOpen(false),
                  props.setSelectedValue(route.activeIndex),
                  props.setSelectedIndex(null)
                ]}
                button
                component={Link}
                to={route.link}
                className={classes.listItem}
                selected={props.selectedValue === route.activeIndex}
                classes={{ selected: classes.selectedItem }}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText disableTypography>{route.name}</ListItemText>
              </ListItem>
              <Divider variant="middle" classes={{ root: classes.divider }} />
            </Fragment>
          ))}
        </List>
        <List dense>
          <div className={classes.servicesContainer}>
            <StoreIcon className={classes.servicesIcon} />
            <span className={classes.servicesLabel}>Services</span>
            <Divider variant="middle" classes={{ root: classes.divider }} />
          </div>
          {menuOptions.map((route, index) => (
            <Fragment key={index}>
              <ListItem
                onClick={() => [
                  setDrawerOpen(false),
                  handleDrawerServiceClick(index)
                ]}
                button
                component={Link}
                to={route.to}
                selected={index === props.selectedIndex}
                className={classes.serviceslistItem}
                classes={{ selected: classes.selectedServiceslistItem }}
              >
                <ListItemText disableTypography>{route.label}</ListItemText>
              </ListItem>
              <Divider variant="middle" classes={{ root: classes.divider }} />
            </Fragment>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setDrawerOpen(!drawerOpen)}
        disableRipple
      >
        <MenuIcon className={classes.hamburger} />
      </IconButton>
    </Fragment>
  );
  const currentRoute = window.location.pathname;

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar
            disableGutters
            className={
              currentRoute !== "/"
                ? classes.toolbar
                : classes.toolbarTransparent
            }
          >
            <Button
              onClick={() => props.setSelectedValue(false)}
              component={Link}
              to="/"
            >
              <img src={logo} alt="OSL" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div
        className={currentRoute !== "/" ? classes.toolbarMargin : undefined}
      />
    </Fragment>
  );
}
