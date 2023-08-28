import React, { useState } from "react";
import { Link } from "react-router-dom";

function OtpVerification() {
  const numInputs = 6;
  const [inputValues, setInputValues] = useState(Array(numInputs).fill(""));

  const handleInputChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);

    const nextIndex = index + 1;
    const prevIndex = index - 1;

    if (event.target.value === "" && prevIndex >= 0) {
      inputRefs[prevIndex].current.focus();
    } else if (nextIndex < numInputs && event.target.value !== "") {
      inputRefs[nextIndex].current.focus();
    }
  };

  const handleInputKeyDown = (index, event) => {
    const prevIndex = index - 1;

    if (event.key === "Backspace" && prevIndex >= 0) {
      setInputValues((prevValues) => {
        const newInputValues = [...prevValues];
        newInputValues[index] = "";
        return newInputValues;
      });

      inputRefs[prevIndex].current.focus();
    }
  };

  const inputRefs = Array(numInputs).fill(null).map(() => React.createRef());

  return (
    <>
      <div className="d-flex justify-content-center align-items-center container" style={{ width: "500px" }}>
        <div className="card py-5 px-3">
          <h5 className="m-0">Mobile phone verification</h5>
          <span className="mobile-text">Enter the code we just sent to your mobile phone <b className="text-danger">+91 **********</b></span>
          <div className="d-flex flex-row mt-5">
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                ref={ref}
                type="text"
                className="form-control otp-input"
                maxLength="1"
                value={inputValues[index]}
                onChange={(event) => handleInputChange(index, event)}
                onKeyDown={(event) => handleInputKeyDown(index, event)}
                autoFocus={index === 0}
              />
            ))}
          </div>
          <Link to="#" style={{ cursor: "pointer" }}>
            <div className="text-center mt-5">
              <span className="font-weight-bold text-danger cursor">Submit</span>
            </div>
          </Link>
          <Link to="#" style={{ cursor: "pointer" }}>
            <div className="text-center mt-5">
              <span className="d-block mobile-text">Didn't receive the code?</span>
              <span className="font-weight-bold text-danger cursor">Resend</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OtpVerification;
