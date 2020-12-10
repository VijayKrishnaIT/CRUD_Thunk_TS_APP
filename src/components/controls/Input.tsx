import React from "react";
import { TextField } from "@material-ui/core";

function Input(props: any) {
  const { name, label, value } = props;
  return (
    //pass data dynamically
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
    ></TextField>
  );
}

export default Input;
