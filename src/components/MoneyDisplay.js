import React from "react";

const MoneyDisplay = ({ title, prefix, amount }) => {
  return (
    <div
      id={title}
      style={{
        margin: "auto",
        padding: "20px",
        width: "100%",
        textAlign: "left"
      }}
    >
      <div
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }}
      >
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "5px"
          }}
        >
          <span>{prefix}</span>
          <h3 style={{ marginBottom: 0 }}>{title}</h3>
        </div>
        <div
          style={{
            backgroundColor: "gray",
            height: "100px",
            textAlign: "center"
          }}
        >
          <h3 style={{ padding: "30px" }}>{`$${amount}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default MoneyDisplay;
