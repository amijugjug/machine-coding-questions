import React, { useState } from "react";

import "./Stepper.css";

/**
 * Create a stepper component that takes children and render the number of steps.
 * Button to go next or previous
 */

const Stepper = ({ children, onNextClick, onPreviousClick }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    setCurrentStep(currentStep + 1);
    onNextClick();
  };

  const goPrevious = () => {
    setCurrentStep(currentStep - 1);
    onPreviousClick();
  };

  const progressBarWidth = () => (100 / (children.length - 1)) * currentStep;

  const _steps = [];
  for (let i = 0; i < children.length; i++)
    _steps.push(
      <div className={`step ${currentStep >= i ? "active" : "not-active"}`}>
        {i + 1}
      </div>
    );

  return (
    <div className="stepper-wrapper">
      <div className="stepper">
        {_steps}
        <div
          className="progress-line"
          style={{ width: `${progressBarWidth()}%` }}
        />
      </div>
      <div className="content">{children[currentStep]}</div>
      <div className="button-container">
        <button
          className="next"
          onClick={goPrevious}
          disabled={currentStep === 0}
        >
          Previous
        </button>
        <button
          className="next"
          onClick={goNext}
          disabled={currentStep === children.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
