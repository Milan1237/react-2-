import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorElement from "./ErrorElement";

const Test = ({ prop }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorElement}>
        <div>{prop.xyz} just checking</div>
        </ErrorBoundary>
    </>
  );
};

export default Test;
