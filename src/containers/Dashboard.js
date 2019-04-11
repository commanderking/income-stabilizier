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
import MoneyDisplay from "../components/MoneyDisplay";

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
        <MoneyDisplay
          title="EXPENSES"
          prefix="MONTHLY"
          amount={monthlyExpense}
        />
        <MoneyDisplay title="SAVINGS" prefix="TOTAL" amount={savings} />
        <MoneyDisplay title="INCOME" prefix="PENDING" amount={income} />
      </div>
      <div style={{ padding: "30px" }}>
        <h4 style={{ textAlign: "left", marginLeft: "65px" }}>Your Runway:</h4>
        <ProgressChart daysRemaining={daysRemaining} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr"
        }}
      >
        <AddExpenseForm expenses={expenses} setExpenses={setExpenses} />
        <ExpensesEditForm expenses={expenses} setExpenses={setExpenses} />
      </div>
    </div>
  );
};

export default Dashboard;
