import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Collapse
} from "reactstrap";

const ContractScanner = ({
  hasContractBeenScanned,
  setHasContractBeenScanned
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Contract Scanner</h1>
      <Form>
        <Col
          sm={4}
          style={{
            width: "300px",
            margin: "auto",
            border: "1px solid black",
            padding: "10px"
          }}
        >
          <FormGroup>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">Upload your contract</FormText>
          </FormGroup>
        </Col>
        <Button
          onClick={() => {
            setHasContractBeenScanned(true);
          }}
        >
          Done
        </Button>
      </Form>
    </div>
  );
};

export default ContractScanner;
