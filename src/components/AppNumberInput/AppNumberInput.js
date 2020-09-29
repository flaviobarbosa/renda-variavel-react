import React from "react";

import NumberFormat from "react-number-format";

const AppNumberInput = (props) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      isNumericString
      thousandSeparator="."
      decimalSeparator=","
      allowNegative={false}
      prefix={"R$ "}
      decimalScale={2}
    />
  );
};

export default AppNumberInput;
