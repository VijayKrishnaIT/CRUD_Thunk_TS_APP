import React from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import {
  CssBaseline,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import PageHeader from "../components/PageHeader";

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
        <PageHeader
          title="EMPLOYEE MANAGEMENT SYSTEM"
          subtitle="Add Employee"
          icon={<GroupAddIcon fontSize={"large"} />}
        />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}
export default App;
