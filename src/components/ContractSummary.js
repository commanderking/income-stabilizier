import React, { useEffect, useState } from "react";
import { Button, Spinner } from "reactstrap";
import ContractSummaryCard from "./ContractSummaryCard";

const ContractSummary = ({ updateIncome, setHasContractBeenScanned }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  });

  if (isLoading) {
    return (
      <div style={{ marginTop: "200px" }}>
        <Spinner style={{ width: "10rem", height: "10rem" }} type="grow" />
        <h4>Analyzing your document...</h4>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <h1>Contract Summary:</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "650px",
            margin: "auto"
          }}
        >
          <ContractSummaryCard title="Overview">
            <p>
              <b>Client:</b> ABC Company
            </p>
            <p>
              <b>Services:</b> Create Corporate Identity
            </p>
          </ContractSummaryCard>
          <ContractSummaryCard title="Duration">
            <p>
              <b>Start Date:</b> 5/1/2019
            </p>
            <p>
              <b>Duration:</b> 3 months
            </p>
            <p>
              <b>Completion Date:</b> 8/1/2019
            </p>
          </ContractSummaryCard>
          <ContractSummaryCard title="Payment">
            <p>
              <b>Terms:</b> $25/hour, 40 hours/week, payable monthly
            </p>
            <p>
              <b>Projected Monthly Income:</b> $4000
            </p>
          </ContractSummaryCard>
        </div>
      </div>
      <div style={{ marginTop: "25px" }}>
        <Button
          color="success"
          style={{
            border: "none",
            marginRight: "40px"
          }}
          onClick={() => {
            updateIncome();
          }}
        >
          Add Contract
        </Button>
        <Button
          color="danger"
          style={{
            border: "none"
          }}
          onClick={() => {
            setHasContractBeenScanned(false);
          }}
        >
          Remove Contract
        </Button>
      </div>
    </div>
  );
};

export default ContractSummary;
