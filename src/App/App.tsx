import React from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import {
  CssBaseline,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

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
    //wrap more than 1 component React.Fragment
    <ThemeProvider theme={customTheme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}
export default App;
