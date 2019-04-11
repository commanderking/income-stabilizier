import React from "react";
import { Button, Form, FormGroup, Input, FormText } from "reactstrap";
import barcode from "../barcode.png";

const ContractScanner = ({
  hasContractBeenScanned,
  setHasContractBeenScanned
}) => {
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h1>Contract Analyzer</h1>
      <span>We'll scan, analyze, and summarize your contract for you.</span>
      <img
        src={barcode}
        style={{ width: "150px", display: "block", margin: "auto" }}
        alt="barcode"
      />
      <Form
        style={{
          width: "300px",
          margin: "auto",
          padding: "10px"
        }}
      >
        <FormGroup>
          <Input
            type="file"
            name="file"
            id="exampleFile"
            style={{ border: "1px solid #00416b" }}
          />
          <FormText color="muted">Upload your contract</FormText>
        </FormGroup>
        <Button
          style={{ backgroundColor: "#00416b" }}
          onClick={() => {
            setHasContractBeenScanned(true);
          }}
        >
          Start
        </Button>
      </Form>
    </div>
  );
};

export default ContractScanner;
