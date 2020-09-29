import React from "react";

import MaskedInput from "react-text-mask";

const AppTickerMask = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/[A-Z]/, /[A-Z]/, /[A-Z]/, /\d/, /\d/]}
    />
  );
};

export default AppTickerMask;
