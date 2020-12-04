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
  return (dispatch: any) => {};
};
/*************************************************************************/
