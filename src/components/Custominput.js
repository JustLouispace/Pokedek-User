import React from 'react';

const Custominput = (props) => {
  const { type, name, placeholder, className, value, onChange, onBlur, error } = props;

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${className}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{ fontSize: '22px' }} // Adjust the font size here

      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Custominput;
