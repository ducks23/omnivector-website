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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import CodeIcon from "@material-ui/icons/Code";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

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
    backgroundColor: "transparent",
    height: "120px",
    [theme.breakpoints.down("md")]: {
      height: "80px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "60px"
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
    color: theme.palette.secondary.dark,
    opacity: 1
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    backgroundColor: "transparent"
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    opacity: 0.7
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (event, newValue) => {
    props.setSelectedValue(newValue);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
    props.setSelectedValue(1);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = event => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const mainRoutes = [
    { name: "Home", link: "/", activeIndex: 0, icon: <HomeIcon /> },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event),
      icon: <CodeIcon />
    },
    { name: "About Us", link: "/about", activeIndex: 2, icon: <InfoIcon /> },
    {
      name: "Contact Us",
      link: "/contact",
      activeIndex: 3,
      icon: <ContactMailIcon />
    }
  ];

  const menuOptions = [
    { to: "/services", label: "Services", activeIndex: 1, selectedIndex: 0 },
    { to: "/big-data", label: "Big Data", activeIndex: 1, selectedIndex: 1 },
    { to: "/hpc", label: "HPC", activeIndex: 1, selectedIndex: 2 },
    {
      to: "/elasticsearch",
      label: "Elasticsearch",
      activeIndex: 1,
      selectedIndex: 3
    },
    { to: "/redis", label: "Redis", activeIndex: 1, selectedIndex: 4 },
    { to: "/ceph", label: "Ceph", activeIndex: 1, selectedIndex: 5 },
    {
      to: "/batch-enrichment",
      label: "Batch Enrichment",
      activeIndex: 1,
      selectedIndex: 6
    },
    { to: "/devops", label: "DevOps", activeIndex: 1, selectedIndex: 7 },
    { to: "/logging", label: "Logging", activeIndex: 1, selectedIndex: 8 }
  ];

  useEffect(() => {
    [...menuOptions, ...mainRoutes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.string}`:
          if (props.selectedValue !== route.index) {
            props.setSelectedValue(route.index);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [
    props.selectedValue,
    menuOptions,
    props.selectedIndex,
    mainRoutes,
    props
  ]);

  const menuItems = menuOptions.map((item, index) => (
    <MenuItem
      key={item.to}
      onClick={event => handleMenuItemClick(event, index)}
      selected={index === props.selectedIndex}
      component={Link}
      to={item.to}
      classes={{ root: classes.menuItem, selected: classes.selectedItem }}
    >
      {item.label}
    </MenuItem>
  ));

  const tabs = (
    <Fragment>
      <Tabs
        value={props.selectedValue}
        onChange={handleChange}
        indicatorColor="secondary"
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
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1302 }}
      >
        {menuItems}
      </Menu>
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
                  props.setSelectedValue(route.activeIndex)
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
