import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props: any): any {
  const { name, value, label, error = null, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      value={value}
      name={name}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
}
