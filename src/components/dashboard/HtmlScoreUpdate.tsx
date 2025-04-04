import Image from "next/image";
// import { Button } from "../ui/button";
import htmlLogo from "@assets/html-logo.png";
import UpdateScoreForm from "./UpdateScoreForm";

interface HtmlScoreUpdateProps {
  rank: number;
  percentile: number;
  score: number;
  setRank: (rank: number) => void;
  setScore: (score: number) => void;
  setPercentile: (percentile: number) => void;
}

const HtmlScoreUpdate = ({
  rank,
  percentile,
  score,
  setRank,
  setScore,
  setPercentile,
}: HtmlScoreUpdateProps) => {
  return (
    <div className="w-full">
      <div className="flex w-full py-5 px-4 justify-between  rounded-xl items-center gap-4 border-1 border-gray-200 flex-col md:flex-row">
        <div className="flex items-center gap-4">
          <Image
            className="-mx-8 w-15 md:w-30"
            src={htmlLogo}
            width={400}
            height={400}
            alt="html-logo"
          />
          <div className="text-nowrap">
            <h6 className="text-base font-bold md:text-lg">
              Hyper Text Markup Language
            </h6>
            <p className="text-gray-600 font-medium text-xs 2xl:text-base">
              Questions: 08 | Duration: 15 mins | Submitted on 04 April 2025
            </p>
          </div>
        </div>

        <UpdateScoreForm
          rank={rank}
          setRank={setRank}
          percentile={percentile}
          setPercentile={setPercentile}
          score={score}
          setScore={setScore}
        />
      </div>
    </div>
  );
};
export default HtmlScoreUpdate;
