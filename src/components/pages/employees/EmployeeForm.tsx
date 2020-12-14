import React from "react";
import Form from "../../Form";
import useForm from "../../useForm";
import { Grid } from "@material-ui/core";
import Controls from "../../controls/Controls";
const initialFValues: any = {
  fullName: "",
  id: "",
  email: "",
  mobile: "",
  city: "",
  gender: "",
  departmentId: "",
  hireDate: new Date(),
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const selectedItems = [
  { id: 111, title: "Training" },
  { id: 222, title: "R&D" },
  { id: 333, title: "Development" },
  { id: 444, title: "Testing" },
  { id: 555, title: "Production" },
];

export default function EmployeeForm() {
  const validate = (fieldValues = values) => {
    const temp: any = { ...errors };
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "this field is required";
    if ("id" in fieldValues) temp.id = fieldValues.id ? "" : "id is required";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "enter corret email";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "minimum 10 numbers are required";
    if ("city" in fieldValues)
      temp.mobile = fieldValues.city ? "" : "city is required";
    if ("departmentId" in fieldValues)
      temp.departmentId = fieldValues.departmentId
        ? ""
        : "department id is required";
    setErrors({
      ...temp,
    });
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (event: any): any => {
    console.log("Hello");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="id"
            label="ID"
            value={values.id}
            onChange={handleInputChange}
            error={errors.id}
          />

          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />

          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />

          <Controls.Input
            name="mobile"
            label="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />

          <Controls.Input
            name="city"
            label="city"
            value={values.city}
            onChange={handleInputChange}
            error={errors.city}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />

          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={selectedItems}
            error={errors.departmentId}
          />

          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
