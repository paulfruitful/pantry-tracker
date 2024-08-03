'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='grid w-full' style={{height:'100vh',width:'100vw'}} >

<div className="flex flex-row justify-between w-full">
  <div className="relative flex  p-6 font-bold text-3xl text-white">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
  <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" stroke-width="2"/>
  <line x1="12" y1="12" x2="18" y2="12" stroke="currentColor" stroke-width="2"/>
  </svg>

    <span className='ml-2'>Trackr</span>
  </div>
  <div className="p-6">
    <div className="flex text-[19px] dark:text-white">
      <span className=" border-b-[2px] p-3 border-none hover:border-solid btn-style">Login</span>
      <span className="mx-2"></span>
     
      <span className="border-b-[2px] border-none bg-white text-black p-3 rounded-[10px] btn-style  hover:border-solid">Signup</span>
    </div>
  </div>
</div>

<section class="grid  overflow-y-hidden" style={{height:'100vh'}}>
<video autoPlay loop muted className="w-full fixed opacity-80 " style={{zIndex:'-3'}} src="https://videos.pexels.com/video-files/6994733/6994733-uhd_2560_1440_30fps.mp4"></video>  
<div class="absolute flex flex-col overflow-hidden w-full" style={{height:'100vh', backgroundColor:'rgba(0, 0, 0, 0.8) '}}>
    <div className="flex flex-col overflow-hidden self-center">
    <h1 class='text-center lg:text-[33px] lg:text-3xl p-3 font-bold'>Organize Your Pantry, Save Money, Reduce Waste</h1>
    <p className='text-md'>Discover the easiest way to manage your pantry and never run out of your favorite foods again.</p>
    <a href='/register' class="bg-green-500 self-center text-white rounded-lg p-3 text-md w-[180px] text-center font-bold h-[50px] ">Start Now</a>
 </div>
  </div>
</section>
      <div>
        
      </div>

      <style jsx>
        {
          `
  .btn-style {
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-style:hover {
  border-bottom: 2px solid white;
}

fullscreen { 
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  transform: translate(-50%, -50%);
}



          `
        }

      </style>







    </div>
    
  )
}
