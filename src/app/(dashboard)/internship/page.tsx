"use client";
import Underconstruction from "@/components/shared/Underconstruction";
import { usePathname } from "next/navigation";

const InternshipPage = () => {
  const pathname = usePathname();
  return (
    <>
      <Underconstruction pageName={pathname} />
    </>
  );
};
export default InternshipPage;
