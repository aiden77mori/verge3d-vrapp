import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "10%",
        top: "5%",
        width: "80%",
        height: "90%",
        border_radius: "10%",
        backgroundColor: "#2726269d",
        border_color: "#555",
        border: "2px solid #3f413f",
      }}
    >
      {/* <InlineWidget url="https://calendly.com/melvinsalcedo169" /> */}
      <iframe
        src="https://calendly.com/agromin-cerro-verde/agromin/?month=2021-09"
        width="100%"
        height="950"
        scrolling="no"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default App;
