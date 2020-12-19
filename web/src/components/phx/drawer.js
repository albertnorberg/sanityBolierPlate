import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CarIcon from "@material-ui/icons/DirectionsCar";
import PageIcon from "@material-ui/icons/InsertDriveFile";
import { Link } from "gatsby";

const useStyles = makeStyles(theme => {
  return {
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    backdrop: {
      backdropFilter: "blur(3px)",
      zIndex: 5
    },
    link: {
      transition: "all .4s",
      padding: "0px 10px",
      textDecoration: "none"
    },
    menu: {
      backgroundColor: "rgba(0,0,0, 0.7)"
    }
  };
});

export default function SwipeableTemporaryDrawer(props) {
  const { navMenuItems } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor, navMenuItems) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link className={classes.link} to="/">
            Home
          </Link>
        </ListItem>

        <Divider />

        {navMenuItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>{item.route === "/buy" ? <CarIcon /> : <PageIcon />}</ListItemIcon>

            <a className={classes.link} href={item.route ? item.route : item.link}>
              {item.title}
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const anchor = "right";

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton onClick={toggleDrawer(anchor, true)} style={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
          PaperProps={{ classes: { root: classes.menu } }}
          ModalProps={{
            BackdropProps: {
              // Without this the close on overlay doesn't work
              classes: { root: classes.backdrop }
            }
          }}
        >
          {list(anchor, navMenuItems)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
