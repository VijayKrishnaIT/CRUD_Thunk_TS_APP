import React from "react";
import "../App/App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import { CssBaseline, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    //wrap more than 1 component React.Fragment
    <React.Fragment>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </React.Fragment>
  );
}
export default App;
