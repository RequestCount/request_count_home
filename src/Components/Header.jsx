// src/components/Header.jsx
import { motion } from 'framer-motion';
import "react-awesome-button/dist/styles.css";
import "../index.css";
import "../styles.css"


const Header = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-2">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4"
      >
        <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/c2.jpg`} alt="IPOR Logo" className="h-16 md:h-16 lg:h-32" />
        {/* <h1 className="text-sm md:text-lg lg:text-2xl font-bold text-white">Request Count</h1> */}
      </motion.div>

     
    </nav>
  );
};

export default Header;
