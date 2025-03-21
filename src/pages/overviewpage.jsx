import {div} from "framer-motion/client";
import {motion} from "framer-motion";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import React from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import SalesChannelChart from "../components/overview/SalesChannelChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
        >
          <StatCard name="Total Sales" icon={Zap} color='#6366F1' value="$ 12,345"/>
          <StatCard name="New Users" icon={Users} color='#8B5CF6' value="1,234"/>
          <StatCard name="Total Products" icon={ShoppingBag} color='#EC4899' value="576"/>
          <StatCard name="Conversion Rate" icon={BarChart2} color='#10B981' value="12.5%" />
        </motion.div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>

      </main>
    </div>
  );
};

export default OverviewPage;
