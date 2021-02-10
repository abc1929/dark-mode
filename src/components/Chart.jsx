import React from "react";
import moment from "moment";
import {
   LineChart,
   Line,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Dot,
} from "recharts";

const Chart = ({ sparklineData }) => {
   const formattedData = sparklineData
      .map((price, idx) => {
         if (idx % 6 === 0) {
            const timeToSubtract = 168 - idx;
            const date = moment()
               .subtract(timeToSubtract, "hours")
               .format("ddd h:mma");
            return { value: price, date };
         } else if (idx === sparklineData.length - 1) {
            const date = moment().format("ddd h:mma");
            return { value: price, date };
         }
         return null;
      })
      .filter((data) => data);

   const temp = formattedData.map((i) => i.value);
   const maxi = temp.indexOf(Math.max(...formattedData.map((i) => i.value)));
   formattedData[maxi].extrememax = Math.max(
      ...formattedData.map((i) => i.value)
   );
   const mini = temp.indexOf(Math.min(...formattedData.map((i) => i.value)));
   formattedData[mini].extrememin = Math.min(
      ...formattedData.map((i) => i.value)
   );

   console.log(formattedData);

   console.log();

   return (
      <LineChart width={1100} height={300} data={formattedData}>
         <Line type="monotone" dataKey="value" stroke="#8884d8" />
         <Line
            type="step"
            dataKey="extrememax"
            stroke="#2884d8"
            dot={<Dot r={8} fill="#29df29"></Dot>}
         />
         <Line
            type="step"
            dataKey="extrememin"
            stroke="#2884d8"
            dot={<Dot r={8} fill="#da2424"></Dot>}
         />

         <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
         <XAxis dataKey="date" interval={3} />
         <YAxis />
         <Tooltip />
      </LineChart>
   );
};

export default Chart;
