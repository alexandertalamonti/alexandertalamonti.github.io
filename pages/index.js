import { HiArrowDown } from "react-icons/hi"
import { motion } from 'framer-motion';
import Image from "next/image";
import spaceship from "../public/spaceship.svg"

export default function Home() {
  
  let docWidth = 1800
  // make sure your function is being called in client side only
  if (typeof window !== 'undefined') {
    docWidth = window.innerWidth
  }
  

  return (
    <>
    
      <div className='flex items-center flex-col md:flex-row justify-between'>
        <div className=''>
          <motion.p animate={{x: 0}} initial={{x:-1000}} transition={{duration: 1}} className="xl:text-6xl text-5xl">Alexander Talamonti</motion.p>
          <motion.p animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 1, duration: 3}} className='xl:text-2xl text-lg'>Innovating in web3 and Artificial Intelligence</motion.p>
        </div>
        <div className='h-[90vh] flex flex-grow md:max-w-[40%] items-center justify-center relative'>
          <motion.div className="rounded-full bg-slate-900 md:w-96 md:h-96 h-72 w-72"
            whileTap={{scale:1.1}}
          >
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute top-24 right-0"
        animate={{x: [50, -docWidth]}} transition={{delay: 2, repeat: Infinity, duration: 10}}
      >
        <Image src={spaceship} alt="spaceship" layout="fixed" width={40} height={40} />
      </motion.div>
      <HiArrowDown className="animate-bounce m-auto hidden md:block"/>
      <div className='h-screen'>
        More!
      </div>
    </>
  )
}
