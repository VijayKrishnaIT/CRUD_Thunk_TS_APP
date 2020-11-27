import React from "react";
import { makeStyles } from "@material-ui/core";
//makeStyles function is used to apply styles to component.

const useStyles = makeStyles({
  SideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    background: "linear-gradient(to right bottom, #430089, #82ffa1)",
    //backgroundColor: "#253053",
  },
});

function SideMenu() {
  const classes = useStyles();
  return (
    <div className={classes.SideMenu}>
      <h1>SideMenu</h1>
    </div>
  );
}

export default SideMenu;
