// "use client";

// import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
// const chartData = [
//   { percentile: "0", desktop: 186, mobile: 80 },
//   { percentile: "25", desktop: 305, mobile: 200 },
//   { percentile: "50", desktop: 237, mobile: 120 },
//   { percentile: "75", desktop: 73, mobile: 190 },
//   { percentile: "100", desktop: 209, mobile: 130 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
// } satisfies ChartConfig;

// export function PercentageGraph() {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="text-lg font-bold mb-3">
//           Comparison Graph
//         </CardTitle>
//         <CardDescription className="text-base flex justify-between items-center">
//           <p className="w-[80%]">
//             <b> You scored 30% percentile</b> which is lower than the average
//             percentile 72% of all the engineers who took this assessment
//           </p>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             width={24}
//             height={24}
//             color={"#f36b58"}
//             fill={"none"}
//           >
//             <path
//               d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//             />
//             <path
//               d="M17.7048 9.33333L14.8311 13.9845C14.4123 14.6623 13.9369 15.686 13.0749 15.5344C12.0611 15.356 11.5742 13.8449 10.7026 13.3445C9.99285 12.9371 9.47971 13.4281 9.06475 14M21 4L19.1465 7M5 20L7.52632 16.2667"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <LineChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               top: 20,
//               left: 12,
//               right: 12,
//             }}
//           >
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="percentile"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               tickFormatter={(value) => value.slice(0, 3)}
//             />
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent indicator="line" />}
//             />
//             <Line
//               dataKey="desktop"
//               type="natural"
//               stroke="#9033ff"
//               strokeWidth={1}
//               dot={{
//                 fill: "#ac6bfa",
//               }}
//               activeDot={{
//                 r: 6,
//               }}
//             >
//               <LabelList
//                 position="top"
//                 offset={12}
//                 className="fill-foreground"
//                 fontSize={12}
//               />
//             </Line>
//           </LineChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// }
"use client";

import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const mockData = Array.from({ length: 10 }, (_, i) => ({
  percentile: i * 10,
  students: Math.floor(Math.random() * 100) + 50,
}));

const chartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function PercentageGraph() {
  const [userPercentile, setUserPercentile] = useState(50);

  const closestDataPoint = mockData.reduce((prev, curr) =>
    Math.abs(curr.percentile - userPercentile) <
    Math.abs(prev.percentile - userPercentile)
      ? curr
      : prev
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold mb-3">
          Comparison Graph
        </CardTitle>
        <CardDescription className="text-base flex justify-between items-center">
          <p className="w-[80%]">
            <b> You scored {userPercentile}% percentile</b> which is lower than
            the average percentile 72% of all the engineers who took this
            assessment
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={"#f36b58"}
            fill={"none"}
          >
            <path
              d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M17.7048 9.33333L14.8311 13.9845C14.4123 14.6623 13.9369 15.686 13.0749 15.5344C12.0611 15.356 11.5742 13.8449 10.7026 13.3445C9.99285 12.9371 9.47971 13.4281 9.06475 14M21 4L19.1465 7M5 20L7.52632 16.2667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={mockData}
            margin={{ top: 20, left: 12, right: 12, bottom: 30 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="percentile"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="students"
              type="monotone"
              stroke="#9033ff"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                if (payload.percentile === closestDataPoint.percentile) {
                  return (
                    <circle
                      key={Math.random() * 1000}
                      cx={cx}
                      cy={cy}
                      r={6}
                      fill="#6906f6"
                      stroke="black"
                      strokeWidth={2}
                    />
                  );
                }
                return null;
              }}
            />

            <ReferenceLine
              x={userPercentile}
              stroke="#a975f3"
              strokeDasharray="3 3"
              label={{
                value: `Your Score: ${userPercentile}%`,
                position: "top",
                fill: "black",
                fontSize: 12,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
