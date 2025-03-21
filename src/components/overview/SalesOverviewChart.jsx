import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import {motion} from "framer-motion";

const salesData = [
  {name: "Jan", sales: 4200},
  {name: "Feb", sales: 3800},
  {name: "Mar", sales: 5100},
  {name: "Apr", sales: 4600},
  {name: "May", sales: 5400},
  {name: "Jun", sales: 7200},
  {name: "Jul", sales: 6100},
  {name: "Aug", sales: 5900},
  {name: "Sep", sales: 6800},
  {name: "Oct", sales: 6300},
  {name: "Nov", sales: 7100},
  {name: "Dec", sales: 7500},
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.2}}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        SalesOverviewChart
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{color: "#E5E7EB"}}
            />
            <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="#6366F1"
            strokeWidth={3}
            dot={{fill: "#6366F1", strokeWidth: 2, r: 6}}
            activeDot={{strokeWidth: 2, r: 8}}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
