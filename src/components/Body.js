import React from "react";
import Section from "./Section";
import Main from "./Main";

const Body = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Section />
      <Main />
    </div>
  );
};

export default Body;
