// src/components/Hero.jsx
import { motion } from 'framer-motion';

import AnimatedText from './AnimatedText';
import "../styles.css"
import "../index.css"
import Benefits from './Benefits';


const Hero = () => {

  const handleLaunchApp = () => {
    window.open('https://request-count-ajays-projects-0ad30712.vercel.app/', '_blank');
  };

  return (
    <div className=''>
    <motion.div
    className="flex flex-col gap-10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    style={{textAlign:"center"}}
  >
    <h1 className="text-6xl  font-bold mb-4 montserrat ">
    {/* <span className='text-animation'>Welcome to</span> 

    <br/> <span>Request </span>

    <br/><span>Count</span> */}

    <AnimatedText   text="Welcome to " animationConfig={{ delay: 100 }} />
    
    <span className='text'>
    <AnimatedText   text="Request Count" animationConfig={{ delay: 100 }} />

    </span>

    </h1>
    <div className='text-center '>
    <p className="text-2xl mb-8 open-sans block" style={{fontWeight:"700", color:'#fff0b1'}}>
      Empower Your Request Network Decision: get In-Depth insights with Request count
    </p>
   
    <motion.button
      className="bg-green-500 px-6 py-3 rounded-full text-lg w-[25%] "
      whileHover={{ scale: 1.05, fontWeight:"700" }}
      whileTap={{ scale: 0.95 }}
      onClick={handleLaunchApp} 
      >
      Launch App 🚀→
    </motion.button>
      </div>
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
