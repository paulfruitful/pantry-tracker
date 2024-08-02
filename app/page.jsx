import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='grid w-full' style={{height:'100vh',width:'100vw'}} >

      <div className='flex flex-row  justify-self-stretch w-full justify-center'>
        <span className='relative justify-start p-6 font-bold  text-3xl text-white '>Trackr</span>
        <div className='justify-end  p-6'> 
          <div className='flex  text-[17px]  dark:text-white ]'><span className='pr-[4px] border-b-[2px] border-none hover:border-solid '>Sign In</span><span className='pr-[4px] '>/</span><span className='border-b-[2px] border-none hover:border-solid' >Sign Up</span>
          </div>
        </div>
      </div>

      <div className="self-center w-full justify-center grid">
        <h1 className='text-green-500 text-[50px] font-bold'>Track Your Pantry Inventory Today!</h1>
      </div>

      <div>
        
      </div>







    </div>
    
  )
}
