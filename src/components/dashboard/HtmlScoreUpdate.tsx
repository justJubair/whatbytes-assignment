import Image from "next/image";
import { Button } from "../ui/button";
import htmlLogo from "@assets/html-logo.png";

const HtmlScoreUpdate = () => {
  return (
    <div className="mt-25 ml-10">
      <p className="font-medium text-gray-600">Skill Test</p>
      <div className="flex items-center gap-4 mt-10">
        <Image
          className="-mx-8 w-30"
          src={htmlLogo}
          width={400}
          height={400}
          alt="html-logo"
        />
        <div className=" text-nowrap">
          <h6 className="text-lg font-bold">Hyper Text Markup Language</h6>
          <p className="text-gray-600 font-medium">
            Questions: 08 | Duration: 15 mins | Submitted on 04 April 2025
          </p>
        </div>
        <Button className="bg-blue-900">Update</Button>
      </div>
    </div>
  );
};
export default HtmlScoreUpdate;
