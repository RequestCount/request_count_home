// src/components/Hero.jsx
import { motion } from 'framer-motion';

import AnimatedText from './AnimatedText';
import "../styles.css"
import "../index.css"
import Benefits from './Benefits';


const Hero = () => {

  return (
    <div className=''>
    <motion.div
    className="flex flex-col gap-10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h1 className="text-6xl  font-bold mb-4 ml-24 montserrat ">
    {/* <span className='text-animation'>Welcome to</span> 

    <br/> <span>Request </span>

    <br/><span>Count</span> */}

    <AnimatedText   text="Welcome to " animationConfig={{ delay: 100 }} />
    
    <span className='text'>
    <AnimatedText   text="Request Count" animationConfig={{ delay: 100 }} />

    </span>

  {/* <br />
  <AnimatedText text="Request" animationConfig={{ delay: 100 }} />
  <br /> */}
  {/* <AnimatedText text="Count" animationConfig={{ delay: 100 }} /> */}

    </h1>
    <div className='w-1/2 text-center ml-64 h-34'>
    <p className="text-2xl mb-8 open-sans block">
      Empower Your Request Network Decision: get In-Depth insights with Request count
      {/* <AnimatedText   text="Empower Your Request Network Decisions: Get In-Depth Insights with Request Count" animationConfig={{ delay: 70 }} /> */}

    </p>
    </div>
   
    <motion.button
      className="bg-green-500 px-6 py-3 rounded-full text-lg w-[20%] ml-96"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Launch App →
    </motion.button>
  </motion.div>
  <motion.div
    className="w-1/2"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
  >
  </motion.div>

  </div>
  );
};

export default Hero;
