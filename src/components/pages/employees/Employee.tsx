import React from "react";
import PageHeader from "../../PageHeader";
import { makeStyles, Paper } from "@material-ui/core";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EmployeeForm from "./EmployeeForm";

const useStyles = makeStyles(theme=>({
    pageContent:{
        margin : theme.spacing(5),
        padding:theme.spacing(3)
    }
}));

export default function Employee(){
    const classes = useStyles();
    return(
       <React.Fragment>
           <PageHeader 
                    title="EMPLOYEE MANAGEMENT SYSTEM"
                    subtitle="Add Employee"
                    icon={<GroupAddIcon fontSize={"large"}/>}/>  
            <Paper elevation={3} square className={classes.pageContent}>
                <EmployeeForm />
            </Paper>
       </React.Fragment>
    )
};