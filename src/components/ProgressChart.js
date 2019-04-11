import React, { useState, useEffect } from "react";
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
  350: "Apr",
  380: "May",
  410: "Jun",
  440: "Jul",
  470: "Aug",
  500: "Sep",
  530: "Oct",
  560: "Nov",
  590: "Dec",
  620: "Jan",
  650: "Feb",
  680: "Mar"
};

const ProgressChart = ({ daysRemaining }) => {
  const [chartWidth, setChartWidth] = useState(1200);
  useEffect(() => {
    // Should also resize on window change, but ignoring for now since demo will be in set width
    setChartWidth(window.innerWidth);
  });
  const data = [{ name: "Days Remaining", value: daysRemaining }];
  return (
    <BarChart
      width={chartWidth - 100}
      height={50}
      data={data}
      layout="vertical"
    >
      <XAxis
        type="number"
        ticks={[20, 50, 80, 110, 140, 170, 200, 230, 260, 290, 320, 350]}
        tickFormatter={tick => {
          return ticksToMonths[tick];
        }}
      />
      <YAxis type="category" ticks={["name"]} />
      <Bar background dataKey="value" fill="#95d4e9" />
    </BarChart>
  );
};

export default ProgressChart;
