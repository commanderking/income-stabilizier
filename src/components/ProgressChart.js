import React from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

// hardcode for speed - ideally would calculate how many days left in month, then use ticks to predict the remaining months
const ticksToMonths = {
  20: "May",
  50: "Jun",
  80: "Jul",
  110: "Aug",
  140: "Sep",
  170: "Oct",
  200: "Nov",
  230: "Dec",
  260: "Jan",
  290: "Feb",
  320: "Mar",
  350: "Apr"
};

const ProgressChart = ({ daysRemaining }) => {
  const data = [{ name: "Days Remaining", value: daysRemaining }];
  return (
    <BarChart width={800} height={50} data={data} layout="vertical">
      <XAxis
        type="number"
        ticks={[20, 50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350]}
        tickFormatter={tick => {
          return ticksToMonths[tick];
        }}
      />
      <YAxis type="category" ticks={["name"]} />
      <Bar background label dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default ProgressChart;
