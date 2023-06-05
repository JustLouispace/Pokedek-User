import React from 'react';

const CustominputRe = ({ type, label, i_id, i_class, name, formik }) => {
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        placeholder={label}
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor={i_id}>{label}</label>
    </div>
  );
};

export default CustominputRe;