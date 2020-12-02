import { Badge, Grid, IconButton, InputBase, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchItem: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    width: "300px",
    border: "1px solid grey",
    borderRadius: "10px",
    "&.hover": {
      backgroundColor: "#f2f2f2",
    },
    "&.MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search Here"
              startAdornment={<SearchIcon />}
              className={classes.searchItem}
            />
          </Grid>
          <Grid item sm={true}></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={10} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={5} color="primary">
                <MailOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize={"small"} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
