import { PercentageGraph } from "../ui/PercentageGraph";

const ComparisonGraph = ({ percentile }: { percentile: number | string }) => {
  return (
    <div>
      <PercentageGraph userPercentile={percentile} />
    </div>
  );
};
export default ComparisonGraph;
