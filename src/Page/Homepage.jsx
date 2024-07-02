import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import"../index.css"
import Benefits from '../Components/Benefits';
import Process from '../Components/Process';

const IPORLandingPage = () => {
  return (

    <>

    <div className="bg-gray-900 min-h-screen  bg-main">
      

      {/* Navigation */}
      <Header/>

      {/* Main Content */}
      <div className="flex p-12 justify-center  text-white bg2 ">
     <Hero/>
     
      </div>
      <div className='bg-gradient-to-b from-custom-purple to-black'>
      <Benefits/>
      <Process/>
      <div className="text-center pb-7"style={{color:"white", fontWeight:"700"}}>Copyright ©️ 2024, Created by <span style={{color:"#ff8a3e"}}>Request Count</span></div>
      </div>
    </div>
   
   

    </>
  );
};

export default IPORLandingPage;