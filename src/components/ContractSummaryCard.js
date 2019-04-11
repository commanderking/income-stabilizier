import React from "react";

const ContractSummaryCard = ({ title, children }) => {
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
          <h3 style={{ marginBottom: 0 }}>{title}</h3>
        </div>
        <div
          style={{
            backgroundColor: "#bcbec0",
            textAlign: "left",
            padding: "15px",
            minHeight: "150px"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContractSummaryCard;
