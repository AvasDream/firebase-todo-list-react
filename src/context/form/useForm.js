/* eslint-disable no-undef */
import { useState } from "react";

const useForm = callback => {
  /* 
        Generic use Form Hook.
    */
  const initialState = {};
  const [values, setValues] = useState(initialState);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    // eslint-disable-next-line no-shadow
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;
