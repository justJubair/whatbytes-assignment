import ComparisonGraph from "@/components/dashboard/ComparisonGraph";
import HtmlScoreUpdate from "@/components/dashboard/HtmlScoreUpdate";
import { QuestionAnalysis } from "@/components/dashboard/QuestionAnalysis";
import QuickStatistics from "@/components/dashboard/QuickStatistics";
import Syllabus from "@/components/dashboard/Syllabus";

const SkillTest = () => {
  return (
    <div className="mt-28 px-10 pb-10">
      <p className="font-medium text-gray-600 mb-5">Skill Test</p>
      <div className="flex items-start gap-10 ">
        <div className="w-full space-y-6">
          <HtmlScoreUpdate />
          <QuickStatistics />
          <ComparisonGraph />
        </div>
        <div className="w-full space-y-6">
          <Syllabus />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
};
export default SkillTest;
