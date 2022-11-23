import React from 'react'
import Link from 'next/link'

import { HomeIcon , BanknotesIcon  , MegaphoneIcon} from '@heroicons/react/24/outline'
function NavBar() { 
  return (
    <>
    <div className='flex justify-between shadow-lg flex-row-reverse '>
    <Link href='/'>
        <div className='text-blue-700 hover:cursor-pointer flex flex-col mr-5 mt-10'>
        
        <HomeIcon className=' h-6 w-6 hover:animate-bounce self-center '/>
        <p className=' font-extrabold text-l'> الرئيسية</p>
        </div>
      </Link>
      <Link href='/claim'>
        <div className='text-blue-700 hover:cursor-pointer flex flex-col  mt-10 '>
          <MegaphoneIcon className=' h-6 w-6 animate-pulse hover:animate-bounce self-center '/>
        <p className=' font-extrabold text-l'>الشكاوي</p>
        </div>
      </Link>
      <Link href='/exchange'>
        <div className='text-blue-700 hover:cursor-pointer flex flex-col  mt-10'>
          <BanknotesIcon className=' h-6 w-6 hover:animate-bounce self-center '/>
        <p className='font-extrabold text-l'>مبادلة</p>
        </div>
      </Link>

      <img src='Pharos.jpg' className=' h-20 w-20 mt-3 mb-3 ml-5'></img>
    </div>
      
    </>
   
  )
}

export default NavBar