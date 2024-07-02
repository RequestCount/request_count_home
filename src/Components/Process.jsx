import React from 'react';
import { FaWallet, FaListAlt, FaFileInvoiceDollar, FaChartLine, FaCalculator } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FaWallet />,
    title: "Connect your wallet",
    description: "Simply connect your wallet to access your financial data."
  },
  {
    icon: <FaListAlt />,
    title: "Track your transactions",
    description: "View all your transactions in one place, categorized for easy understanding."
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Manage invoices",
    description: "Create and manage invoices using Request Network, ensuring smooth payments."
  },
  {
    icon: <FaChartLine />,
    title: "Analytics",
    description: "Look into comprehensive financial reports to analyze your spending and investments."
  },
  {
    icon: <FaCalculator />,
    title: "Simplify taxes",
    description: "Utilize tax estimation tools to save time and effort during tax season."
  }
];

const StepComponent = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl montserrat text-center font-bold mb-8 text-white">How does it work?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center p-4 border rounded-lg shadow-lg text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl text-orange-500 mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-center">{step.description}</p>
          </motion.div>
        ))}
      </div>
      
    </div>
  );
};

export default StepComponent;
