import React from "react";
import ReactDOM from "react-dom";
import Button from "react-slds/components/Button";
import "./styles.css";

function App() {
  return (
    <Button
      label="Hello World!"
      variant="brand"
      onClick={() => alert("Hello World!")}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
