import React from "react";

export default ({ input, meta, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      {meta.touched && meta.error}
    </div>
  );
};
