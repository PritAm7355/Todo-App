import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Todo from './Todo'
import { motion } from "framer-motion";


const Middle = () => {
  return (
    <motion.div
    initial={{ y: "-100vw", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "100vw", opacity: 0 }}
    transition={{ type: "spring", stiffness: 50, damping: 13 }}
    
  >
    <div>
      <Header/>
      <Todo/>
      <Footer/>
    </div>
    </motion.div>
  );
}

export default Middle