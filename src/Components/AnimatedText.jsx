import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const AnimatedText = ({ text, animationConfig }) => {
    const [currentChar, setCurrentChar] = useState(''); // Stores the currently displayed text
    const [currentIndex, setCurrentIndex] = useState(0); // Tracks the character index
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (currentIndex < text.length) {
          // Update displayed text and index
          setCurrentChar(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Optionally handle animation completion (e.g., blinking cursor)
        }
      }, animationConfig.delay || 100); // Delay between characters (default 100ms)
  
      return () => clearTimeout(timeoutId); // Clear timeout on unmount
    }, [currentIndex, text, animationConfig]); // Dependencies for useEffect
  
    return <motion.span animate={animationConfig}>{currentChar}</motion.span>;
  };
  
  export default AnimatedText;
  