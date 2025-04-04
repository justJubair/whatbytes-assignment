"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [{ score: 15, fill: "#6e9dfa" }];

const chartConfig = {
  score: {
    label: "Score",
  },
} satisfies ChartConfig;

export function QuestionAnalysis() {
  const normalizedEndAngle = (chartData[0].score / 15) * 360;
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="flex items-center justify-between mb-1">
          <h6 className="text-lg font-bold">Question Analysis</h6>
          <p className="font-black text-[#447ff4]">{chartData[0].score}/15</p>
        </CardTitle>
        <CardDescription className="text-base">
          <b> You scored {chartData[0].score} questions correct out of 15.</b>{" "}
          However it still needs some improvements{" "}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={normalizedEndAngle}
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[92, 68]}
            />
            <RadialBar dataKey="score" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <svg
                        x={(viewBox.cx as number) - 19}
                        y={(viewBox.cy as number) - 19}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={40}
                        height={40}
                        color={"#ea3c3c"}
                        fill={"none"}
                      >
                        <path
                          d="M15.1312 2.5C14.1462 2.17555 13.0936 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.5 4.5L12 12M19.5 4.5V2M19.5 4.5H22"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
