import React from "react";

const InputValidation = (props) => {
  let validationMessage = "Text too short!";

  if (props.inputLength >= 5) {
    validationMessage = "Text long enough!";
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default InputValidation;
