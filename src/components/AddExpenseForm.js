import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddExpenseForm = ({ expenses, setExpenses }) => {
  const [newExpense, setNewExpense] = useState({ name: "", value: 0 });

  return (
    <div style={{ padding: "30px" }}>
      <h5 style={{ textAlign: "left" }}>Add an Expense</h5>
      <Form
        style={{
          padding: "30px",
          backgroundColor: "lightgray",
          textAlign: "left",
          marginTop: "25px"
        }}
      >
        <FormGroup>
          <Label for="name">Item</Label>

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
        </FormGroup>
        <FormGroup>
          <Label for="name">Amount</Label>
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
        </FormGroup>
        <Button
          style={{
            width: "100%",
            backgroundColor: "#95d4e9",
            border: "none"
          }}
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
          <span style={{ color: "#00416b" }}>ADD EXPENSE</span>
        </Button>
      </Form>
    </div>
  );
};

export default AddExpenseForm;
