import HtmlScoreUpdate from "@/components/dashboard/HtmlScoreUpdate";
import QuickStatistics from "@/components/dashboard/QuickStatistics";
import Syllabus from "@/components/dashboard/Syllabus";

const SkillTest = () => {
  return (
    <div className="mt-28 ml-10">
      <p className="font-medium text-gray-600 mb-5">Skill Test</p>
      <div className="flex items-start gap-10 ">
        <div>
          <HtmlScoreUpdate />
          <QuickStatistics />
        </div>
        <div>
          <Syllabus />
        </div>
      </div>
    </div>
  );
};
export default SkillTest;
