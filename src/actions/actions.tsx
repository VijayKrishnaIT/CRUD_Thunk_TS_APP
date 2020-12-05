import axios from "axios";
// to make the asynchronous calls

/*******************ALLEMPLOYEES******************************************/

export const getEmployees = () => {
  return (dispatch: any) => {
    return axios.get("http://localhost:8080/employees").then(
      (posRes: any) => {
        dispatch(employees(posRes.data));
      },
      (errRes: any) => {
        console.log(errRes);
      }
    );
  };
};

export const employees = (records: any) => {
  //connecting to reducer
  return { type: "ALLEMPLOYEES", value: records };
};
/**************************************************************************/

/***************************Add Employee***********************************/
//record coming from component
export const addEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios.post("http://localhost:8080/insert", record).then(
      (posRes) => {
        dispatch(fun_two(posRes.data));
      },
      (errRes: any) => {
        console.log(errRes);
      }
    );
  };
};
export const fun_two = (status: any) => {
  return { type: "INSERT", value: status };
};

/*************************************************************************/

/***************************************UPDATE*******************************/
export const updateEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios.put("http://localhost:8080/update", record).then(
      (posRes) => {
        dispatch(fun_three(posRes.data));
      },
      (errRes: any) => {
        console.log(errRes);
      }
    );
  };
};
export const fun_three = (status: any) => {
  return { type: "UPDATE", value: status };
};
/****************************************************************************/
/************************************DELETE**********************************/
export const deleteEmployee = (record: any) => {
  return (dispatch: any) => {
    return axios.delete("http://localhost:8080/delete", { data: record }).then(
      (posRes) => {
        dispatch(fun_four(posRes.data));
      },
      (errRes: any) => {
        console.log(errRes);
      }
    );
  };
};
export const fun_four = (status: any) => {
  return { type: "DELETE", value: status };
};
/****************************************************************************/
