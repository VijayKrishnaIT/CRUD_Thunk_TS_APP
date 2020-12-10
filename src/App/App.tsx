import React from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Employees from "../components/pages/employee/Employees";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={customTheme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}
export default App;
