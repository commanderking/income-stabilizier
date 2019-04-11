import React, { useState, useEffect } from "react";
import {
  sumExpenses,
  getDaysRemaining,
  getDoomsDate,
  transformExpenseDataForPieChart
} from "./DashboardUtils";
import _ from "lodash";
import PieChart from "../components/PieChart";
import ExpensesEditForm from "../components/ExpensesEditForm";
import AddExpenseForm from "../components/AddExpenseForm";
import ProgressChart from "../components/ProgressChart";

const initialExpenses = {
  rent: { key: "rent", text: "Rent", value: 1450 },
  insurance: { key: "insurance", text: "Insurance", value: 250 },
  groceries: { key: "groceries", text: "Groceries", value: 100 },
  transportation: { key: "transportation", text: "Transportation", value: 200 }
};

const initialSavings = 4500;

const initialPendingIncome = 0;

const Dashboard = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [income, setIncome] = useState(initialPendingIncome);

  useEffect(() => {
    const storedExpenses = sessionStorage.getItem("expenses");
    const income = sessionStorage.getItem("income");
    console.log("storedExpenses", storedExpenses);

    if (!storedExpenses) {
      sessionStorage.setItem("expenses", JSON.stringify(initialExpenses));
    } else {
      setExpenses(JSON.parse(sessionStorage.getItem("expenses")));
    }

    if (!income) {
      sessionStorage.setItem("income", initialPendingIncome);
    } else {
      setIncome(Number(sessionStorage.getItem("income")));
    }
  }, []);

  const [savings, setSavings] = useState(initialSavings);

  const monthlyExpense = sumExpenses(expenses);
  const daysRemaining = getDaysRemaining(monthlyExpense, savings, income);

  const { month, ordinalDate } = getDoomsDate(daysRemaining);

  const doomsDate = `${month} ${ordinalDate}`;
  const expensesChartData = transformExpenseDataForPieChart(expenses);
  console.log("expensesChartData", expensesChartData);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr 2fr 2fr"
        }}
      >
        <div>
          <PieChart
            expensesChartData={expensesChartData}
            doomsDate={doomsDate}
          />
        </div>
        <div id="expenses" style={{ margin: "auto", padding: "30px" }}>
          <h3>Monthly Expenses: </h3> <h3>{`$${monthlyExpense}`}</h3>
        </div>
        <div id="savings" style={{ padding: "30px", margin: "auto" }}>
          <h3>Total Savings:</h3>
          <h3>{`$${savings}`}</h3>
        </div>
        <div id="income" style={{ padding: "30px", margin: "auto" }}>
          <h3>Pending Income</h3>
          <h3>{`$${income}`}</h3>
        </div>
      </div>
      <div style={{ padding: "30px" }}>
        <h4>Your Runway:</h4>
        <ProgressChart daysRemaining={daysRemaining} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr"
        }}
      >
        <AddExpenseForm expenses={expenses} setExpenses={setExpenses} />
        <ExpensesEditForm expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
};

export default Dashboard;

/*
      <div id="summary" style={{ padding: "30px" }}>
        <span>You have until</span>
        <h1>{doomsDate}</h1>
        <div>Days remaining: {daysRemaining}</div>
      </div>
      */
