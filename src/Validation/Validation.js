import React from "react";

const Validation = (props) => {
  let validationMessage = <p>Text is too short</p>;

  if (props.inputLength > 5) {
    validationMessage = <p>Text is too long enough</p>;
  }

  return <div>{validationMessage}</div>;
};

export default Validation;
