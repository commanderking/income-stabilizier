import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const ContractSummary = ({ updateIncome, setHasContractBeenScanned }) => {
  return (
    <div>
      <div>
        <h1>Summary:</h1>
        <p>Client: ABC Company</p>
        <p>Services: Create Corporate Identity</p>
        <p>Start Date: 5/1/2019</p>
        <p>Duration: 3 months</p>
        <p>Completion Date: 8/1/2019</p>
        <p>Payment Terms: $25/hour, 40 hours/week, payable monthly</p>
        <p>Project Monthly Income: $4000</p>
      </div>
      <Button
        color="success"
        onClick={() => {
          updateIncome();
        }}
      >
        Cool!
      </Button>
      <Button
        color="danger"
        onClick={() => {
          setHasContractBeenScanned(false);
        }}
      >
        Nevermind! Remove Contract
      </Button>
    </div>
  );
};

export default ContractSummary;
