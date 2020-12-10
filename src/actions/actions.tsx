//import axios module
//axios module used to make the asynchronous calls
import axios from "axios";

/*******************************************GETEMPLOYEES *****************************/
export const getEmployees = (): any => {
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
  //connecting to reducer
  return { type: "ALL_EMPLOYEES", value: records };
};
/*********************************************END ************************************/

/*******************************************ADDEMPLOYEE *****************************/
export const addEmployee = (employee: any) => {
  //employee will come from UI (Component)
  return (dispatch: any) => {
    return axios.post("http://localhost:8080/newemployee", employee).then(
      (posRes) => {
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
/*********************************************END ************************************/

/*******************************************UPDATEEMPLOYEE *****************************/
export const updateEmployee = (employee: any) => {
  //employee will come from UI (Component)
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
/*********************************************END ************************************/

/*******************************************DELETEEMPLOYEE *****************************/
export const deleteEmployee = (employee: any) => {
  //employee will come from UI (Component)
  return (dispatch: any) => {
    return axios
      .delete("http://localhost:8080/deleteemployee", { data: employee })
      .then(
        (posRes: any) => {
          posRes.data.newemployee = employee;
          dispatch(fun_four(posRes));
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
/*********************************************END ************************************/
