
import React from "react";
import { useFormik } from "formik";

//посмотреть https://react-hook-form.com/

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="passwd"
        name="passwd"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.passwd}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;
