import { Badge, Grid, IconButton, InputBase, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import React from "react";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase />
          </Grid>
          <Grid item sm={true}></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <MailOutlineIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge color="primary">
                <PowerSettingsNewIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
