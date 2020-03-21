import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    ...theme.typography.tab,
    color: "white",
    minWidth: 120,
    marginLeft: "5px",
    opacity: ".8",
    top: "-8px"
  },
  buttonSelected: {
    ...theme.typography.tab,
    color: theme.palette.secondary.light,
    minWidth: 120,
    marginLeft: "5px",
    opacity: ".8",
    top: "-8px",
    borderBottom: "1px solid white"
  }
}));

export default function DropdownMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMenuItemClick = (event, index) => {
    console.log(props);
    handleToggle();
    setSelectedIndex(index);
    props.setSelectedValue();
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const menuItems = props.menuOptions.map((item, index) => (
    <MenuItem
      key={item.to}
      onClick={event => handleMenuItemClick(event, index)}
      selected={index === selectedIndex}
      component={Link}
      to={item.to}
      classes={{ root: classes.menuItem, selected: classes.selectedItem }}
    >
      {item.label}
    </MenuItem>
  ));

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={
            props.selectedValue !== false
              ? classes.button
              : classes.buttonSelected
          }
        >
          Services
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <Menu
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {menuItems}
                </Menu>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
