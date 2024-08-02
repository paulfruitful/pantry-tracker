import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='dark:bg-[#1A1A1A] grid' >

      <div className='flex w-full'>
        <span className='juistify-self-start p-6 text-3xl dark:text-white'>Trackr</span>
      </div>


    </div>
    
    </>
  )
}
