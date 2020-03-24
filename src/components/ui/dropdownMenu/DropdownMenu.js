import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    ...theme.typography.tab,
    color: "white",
    minWidth: 120,
    width: "100%",
    margin: "auto",
    opacity: ".7",
    height: "4em",
    top: "-8px"
  },
  buttonSelected: {
    ...theme.typography.tab,
    color: "white",
    minWidth: 120,
    width: "80%",
    opacity: "1",
    height: "5em",
    top: "-7px",
    borderRadius: 0,
    borderBottom: "1.5px solid " + theme.palette.primary.main
  }
}));

export default function DropdownMenu(props) {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleMenuItemClick = (event, index) => {
    handleToggle();
    props.setSelectedIndex(index);
    props.setSelectedValue(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const StyledMenu = withStyles({
    root: {
      border: "1px solid #d3d4d5"
    }
  })(props => (
    <Paper>
      <MenuList elevation={0} {...props} />
    </Paper>
  ));

  const StyledMenuItem = withStyles(theme => ({
    root: {
      "&:focus": {
        backgroundColor: theme.palette.primary.light,
        "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
          color: "theme.palette.common.white"
        }
      }
    }
  }))(MenuItem);

  const menuItems = props.menuOptions.map((item, index) => (
    <StyledMenuItem
      key={item.to}
      onClick={event => handleMenuItemClick(event, index)}
      selected={index === props.selectedIndex}
      component={Link}
      to={item.to}
      classes={{ root: classes.menuItem, selected: classes.selectedItem }}
    >
      {item.label}
    </StyledMenuItem>
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
    <div
      className={classes.root}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? "MenuList-list-grow" : undefined}
          aria-haspopup="true"
          disableRipple
          onClick={handleToggle}
          to={props.to ? props.to : null}
          className={
            props.selectedValue !== false
              ? classes.button
              : classes.buttonSelected
          }
        >
          {props.title}
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
              <StyledMenu
                autoFocusItem={open}
                id="MenuList-list-grow"
                onKeyDown={handleListKeyDown}
              >
                {menuItems}
              </StyledMenu>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
