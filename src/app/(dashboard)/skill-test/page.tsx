"use client";
import ComparisonGraph from "@/components/dashboard/ComparisonGraph";
import HtmlScoreUpdate from "@/components/dashboard/HtmlScoreUpdate";
import { QuestionAnalysis } from "@/components/dashboard/QuestionAnalysis";
import QuickStatistics from "@/components/dashboard/QuickStatistics";
import Syllabus from "@/components/dashboard/Syllabus";
import { useState } from "react";

const SkillTest = () => {
  const [rank, setRank] = useState(21);
  const [percentile, setPercentile] = useState(33);
  const [score, setScore] = useState(7);
  return (
    <div className="mt-28 px-10 pb-10">
      <p className="font-medium text-gray-600 mb-5">Skill Test</p>
      <div className="flex items-start gap-10 ">
        <div className="w-full space-y-6">
          <HtmlScoreUpdate
            rank={rank}
            setRank={setRank}
            percentile={percentile}
            setPercentile={setPercentile}
            score={score}
            setScore={setScore}
          />
          <QuickStatistics rank={rank} percentile={percentile} score={score} />
          <ComparisonGraph percentile={percentile} />
        </div>
        <div className="w-full space-y-6">
          <Syllabus />
          <QuestionAnalysis score={score} />
        </div>
      </div>
    </div>
  );
};
export default SkillTest;
