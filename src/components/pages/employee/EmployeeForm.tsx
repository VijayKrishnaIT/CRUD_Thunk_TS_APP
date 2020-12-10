import { Grid } from "@material-ui/core";
import React from "react";
import Controls from "../../controls/Controls";
function EmployeeForm() {
  const handleInputChange = (event: any) => {
    event.preventDefault();
    //data
  };

  return (
    <Grid container>
      <Grid item xs={6}>
        <Controls.Input
          label="fullName"
          name="Full Name"
          value=""
          onChange={handleInputChange}
        />

        <Controls.Input
          label="Email"
          name="Email"
          value=""
          onChange={handleInputChange}
        />

        <Controls.Input
          label="Mobile"
          name="Mobile"
          value=""
          onChange={handleInputChange}
        />

        <Controls.Input
          label="City"
          name="City"
          value=""
          onChange={handleInputChange}
        ></Controls.Input>
      </Grid>

      <Grid item xs={6}></Grid>
    </Grid>
  );
}
export default EmployeeForm;
