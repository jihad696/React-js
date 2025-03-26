import React from "react";

export default function InputField({
  type,
  name,
  value,
  onChange,
  placeholder,
  error
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </div>
  );
}    
 




