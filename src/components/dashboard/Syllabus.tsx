import { Progress } from "../ui/progress";

const Syllabus = () => {
  return (
    <div className="py-6 px-8 rounded-xl border-1 border-gray-200">
      <h6 className="text-lg font-bold mb-6">Syllabus Wise Analysis</h6>
      <div className="flex flex-col items-start gap-6">
        <div className="w-full">
          <h6 className="text-gray-600">HTML Tools, Forms, History</h6>
          <div className="flex items-center gap-6">
            <Progress value={80} className="bg-blue-500" />
            <p className="text-lg text-blue-500 font-bold">80%</p>
          </div>
        </div>
        <div className="w-full">
          <h6 className="text-gray-600">Tags & References in HTML</h6>
          <div className="flex items-center gap-6 w-full">
            <Progress value={60} className="bg-orange-500 w-[20rem]" />
            <p className="text-lg text-orange-500 font-bold">60%</p>
          </div>
        </div>
        <div>
          <h6 className="text-gray-600">Tables & References in HTML</h6>
          <div className="flex items-center gap-6 w-full">
            <Progress value={24} className="bg-red-500 w-[20rem]" />
            <p className="text-lg text-blue-500 font-bold">24%</p>
          </div>
        </div>
        <div>
          <h6 className="text-gray-600">Tables & CSS Basics</h6>
          <div className="flex items-center gap-6 w-full">
            <Progress value={96} className="bg-green-500 w-[20rem]" />
            <p className="text-lg text-green-500 font-bold">96%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Syllabus;
