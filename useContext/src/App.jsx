import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Display from "./Components/Display";
import Button from "./Components/Button";
import Test from "./Components/Test";
import { ErrorBoundary } from "react-error-boundary";
import ErrorElement from "./Components/ErrorElement";
import Parent from "./Components/Parent";
function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorElement}>
        <Test />
      </ErrorBoundary>
    </>
  );
}

export default App;
