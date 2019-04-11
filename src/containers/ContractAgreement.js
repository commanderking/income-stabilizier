import React, { useState } from "react";
import { Button } from "reactstrap";
import ContractScanner from "../components/ContractScanner";
import ContractSummary from "../components/ContractSummary";
import { Redirect } from "react-router";

const ContractAgreement = () => {
  const [hasContractBeenScanned, setHasContractBeenScanned] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const updateIncome = () => {
    const currentPendingIncome = Number(sessionStorage.getItem("income")) || 0;

    sessionStorage.setItem("income", 12000 + currentPendingIncome);
    setShouldRedirect(true);
  };

  if (shouldRedirect) {
    return <Redirect push to="/" />;
  }

  return (
    <div>
      {!hasContractBeenScanned && (
        <ContractScanner
          setHasContractBeenScanned={setHasContractBeenScanned}
        />
      )}
      {hasContractBeenScanned && (
        <ContractSummary
          updateIncome={updateIncome}
          setHasContractBeenScanned={setHasContractBeenScanned}
        />
      )}
    </div>
  );
};

export default ContractAgreement;
