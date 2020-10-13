import React from "react";

const UserInput = (props) => {
  const inputStyle = {
    border: "2px solid blueviolet",
    borderRadius: "3px",
    height: "20px",
  };

  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default UserInput;
