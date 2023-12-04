"use client";
import React from "react";
import OtpInput from "react-otp-input";

const PinInput = ({ value, onChange }) => {
  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={4}
      renderSeparator={<span> </span>}
      renderInput={(props) => <input {...props} />}
      isInputNum={true}
      shouldAutoFocus={true}
      inputStyle={{
        border: "1px solid gray",
        borderRadius: "8px",
        width: "44px",
        height: "44px",
        fontSize: "12px",
        color: "#000",
        fontWeight: "400",
        caretColor: "blue",
        margin : "10px"
      }}
      focusStyle={{
        border: "1px solid #CFD3DB",
        outline: "none",
      }}
    />
  );
};

export default PinInput;
