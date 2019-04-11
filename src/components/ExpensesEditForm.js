import React, { useEffect, useState } from "react";
import _ from "lodash";
import { Col, Button, Form, FormGroup, Label } from "reactstrap";
import Tooltip from "rc-tooltip";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const ExpenseEditForm = ({ expenses, setExpenses }) => {
  return (
    <div style={{ padding: "30px" }}>
      <h5 style={{ textAlign: "left" }}>Your Expenses</h5>
      <Form style={{ marginTop: "25px" }}>
        {_.map(expenses, expense => {
          return (
            <FormGroup row>
              <Col sm={1}>
                <Button
                  style={{
                    backgroundColor: "#95d4e9",
                    border: "none"
                  }}
                  sm={2}
                  onClick={() => {
                    const expensesAfterDeletion = _.omit(expenses, expense.key);
                    setExpenses(expensesAfterDeletion);
                  }}
                >
                  <span style={{ color: "#00416b" }}> — </span>
                </Button>
              </Col>
              <Label for="exampleEmail" sm={2}>
                {expense.text}
              </Label>
              <Col sm={9}>
                <Slider
                  style={{ padding: "18px" }}
                  min={0}
                  max={2000}
                  value={expense.value}
                  handle={handle}
                  trackStyle={{ backgroundColor: "#00416b" }}
                  handleStyle={{ borderColor: "#00416b" }}
                  onChange={value => {
                    setExpenses({
                      ...expenses,
                      [expense.key]: {
                        ...expense,
                        value: Number(value)
                      }
                    });
                  }}
                />
              </Col>
            </FormGroup>
          );
        })}
      </Form>
    </div>
  );
};

export default ExpenseEditForm;

/*
                <Input
                  type="range"
                  min="0"
                  max="2500"
                  value={expense.value}

                />
                */
