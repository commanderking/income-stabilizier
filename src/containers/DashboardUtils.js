import _ from "lodash";
import moment from "moment";

export const sumExpenses = expenses => {
  const expensesValues = _.map(expenses, expense => expense.value);
  return _.sum(expensesValues);
};

export const getDaysRemaining = (monthlyExpense, savings, income) => {
  const daysLeft = ((savings + income) / monthlyExpense) * 30;
  return Math.round(daysLeft);
};

export const getDoomsDate = daysRemaining => {
  const doomsDate = moment().add(daysRemaining, "days");

  const month = doomsDate.format("MMMM");

  const ordinalDate = doomsDate.format("Do");

  return {
    month,
    ordinalDate
  };
};

export const transformExpenseDataForPieChart = expenses => {
  return _.map(expenses, expense => {
    return {
      name: expense.text,
      value: expense.value
    };
  });
};
