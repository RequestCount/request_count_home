import { motion } from 'framer-motion';
import "../index.css"
import "../styles.css"

const benefits = [
  {
    title: "Simple and Secure",
    description: "Easily manage your crypto finances in one place. Securely connect your wallet for seamless access.",
    icon: "🔒",
  },
  {
    title: "Powerful Tracking",
    description: "Track income, expenses, and investments across all your crypto holdings.",
    icon: "📊",
  },
  {
    title: "Seamless Invoicing",
    description: "Create and manage invoices using Request Network for effortless payments.",
    icon: "🧾",
  },
  {
    title: "Actionable Insights",
    description: "Gain valuable insights into your spending habits and financial health.",
    icon: "💡",
  },
  {
    title: "Effortless Tax Tools",
    description: "Streamline your tax filing with built-in analytics and estimation tools.",
    icon: "🧾",
  },
];

const Benefits = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl montserrat font-bold mb-8 text-white" >Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="tile bg-white p-6 rounded-3xl shadow-md mx-auto transform transition duration-500 hover:scale-105  w-80  hover:text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              // style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
