import React, { useEffect, useState } from "react";
import _ from "lodash";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse
} from "reactstrap";

const ExpenseEditForm = ({ expenses, setExpenses }) => {
  return (
    <div style={{ padding: "30px" }}>
      <h5 style={{ textAlign: "left" }}>Your Expenses</h5>
      <Form>
        {_.map(expenses, expense => {
          return (
            <FormGroup row>
              <Col sm={1}>
                <Button
                  sm={2}
                  onClick={() => {
                    const expensesAfterDeletion = _.omit(expenses, expense.key);
                    setExpenses(expensesAfterDeletion);
                  }}
                >
                  -
                </Button>
              </Col>
              <Label for="exampleEmail" sm={2}>
                {expense.text}
              </Label>
              <Col sm={9}>
                <Input
                  type="range"
                  min="0"
                  max="2500"
                  value={expense.value}
                  onChange={event => {
                    console.log("expense", expense);
                    console.log("----->", {
                      ...expenses,
                      [expense.key]: {
                        ...expense,
                        value: Number(event.target.value)
                      }
                    });
                    setExpenses({
                      ...expenses,
                      [expense.key]: {
                        ...expense,
                        value: Number(event.target.value)
                      }
                    });
                  }}
                />
              </Col>
            </FormGroup>
          );
        })}
        <FormGroup check row>
          <Button
            onClick={() => {
              setExpenses(expenses);
            }}
          >
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default ExpenseEditForm;
