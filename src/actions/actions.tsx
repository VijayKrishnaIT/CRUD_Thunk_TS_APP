import axios from "axios";
//axios module used to make the asynchronous calls
//connect to server

/*******************GETEMPLOYEES******************************************/
export const getEmployees = (): any => {
  //dispatching the response
  return (dispatch: any) => {
    return axios.get("http://localhost:8080/employees").then(
      (posRes: any) => {
        dispatch(fun_one(posRes.data));
      },
      (errRes: any) => {
        console.log(errRes);
      }
    );
  };
};
export const fun_one = (records: any) => {
  // connecting to reducer
  return { type: "ALL_EMPLOYEES", value: records };
};

/***********************END**********************************************/

/***************************ADDEMPLOYEE***********************************/
//record coming from component
export const addEmployee = (employee: any) => {
  //employee will come from UI
  return (dispatch: any) => {
    return axios.post("http://localhost:8080/newemployee", employee).then(
      (posRes: any) => {
        posRes.data.newemployee = employee;
        dispatch(fun_two(posRes));
      },
      (errRes: any) => {
        console.log(errRes);
      }
    );
  };
};

export const fun_two = (res: any) => {
  return { type: "ADD_EMPLOYEE", value: res };
};
/*************************************************************************/

/***************************************UPDATE*******************************/
export const updateEmployee = (record: any) => {
  //employee will come from UI
  return (dispatch: any) => {
    return axios.put("http://localhost:8080/updateemployee", employee).then(
      (posRes: any) => {
        posRes.data.newemployee = employee;
        dispatch(fun_three(posRes));
      },
      (errRes: any) => {
        console.log(errRes);
      }
    );
  };
};
export const fun_three = (res: any) => {
  return { type: "UPDATE_EMPLOYEE", value: res };
};
/****************************************************************************/
/************************************DELETE**********************************/
export const deleteEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios
      .delete("http://localhost:8080/deleteemployee", { data: employee })
      .then(
        (posRes: any) => {
          dispatch(fun_four(posRes.data));
        },
        (errRes: any) => {
          console.log(errRes);
        }
      );
  };
};
export const fun_four = (res: any) => {
  return { type: "DELETE_EMPLOYEE", value: res };
};
/****************************************************************************/
