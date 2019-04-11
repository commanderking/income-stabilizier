import React, { useState } from "react";
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

const AddExpenseForm = ({ expenses, setExpenses }) => {
  const [newExpense, setNewExpense] = useState({ name: "", value: 0 });

  return (
    <div style={{ padding: "30px" }}>
      <h5 style={{ textAlign: "left" }}>Add an Expense</h5>
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Item
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              value={newExpense.name}
              onChange={event => {
                setNewExpense({
                  ...newExpense,
                  name: event.target.value
                });
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="name" sm={2}>
            Amount
          </Label>
          <Col sm={10}>
            <Input
              id="name"
              value={newExpense.value}
              onChange={event => {
                setNewExpense({
                  ...newExpense,
                  value: Number(event.target.value)
                });
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Button
              onClick={() => {
                const newExpenseKey = newExpense.name
                  .toLowerCase()
                  .replace(" ", "_");
                setExpenses({
                  ...expenses,
                  [newExpenseKey]: {
                    key: newExpenseKey,
                    text: newExpense.name,
                    value: newExpense.value
                  }
                });
              }}
            >
              Add Expense
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddExpenseForm;
