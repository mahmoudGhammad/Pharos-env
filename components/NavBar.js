import React from 'react'
import Link from 'next/link'

import { HomeIcon , BanknotesIcon  , MegaphoneIcon} from '@heroicons/react/24/outline'
function NavBar() { 
  return (
    <>
    <div className='flex flex-row-reverse justify-between shadow-lg  '>
    <Link href='/'>
        <div className='text-blue-700 hover:cursor-pointer flex flex-col mr-10 mt-10'>
        
        <HomeIcon className=' h-10 w-10 hover:animate-bounce self-center '/>
        <p className=' font-extrabold text-2xl'> الرئيسية</p>
        </div>
      </Link>
      <Link href='/claim'>
        <div className='text-blue-700 hover:cursor-pointer flex flex-col mr-10 mt-10 '>
          <MegaphoneIcon className=' h-10 w-10 animate-pulse hover:animate-bounce self-center '/>
        <p className=' font-extrabold text-2xl'>الشكاوي</p>
        </div>
      </Link>
      <Link href='/exchange'>
        <div className='text-blue-700 hover:cursor-pointer flex flex-col  mt-10'>
          <BanknotesIcon className=' h-10 w-10 hover:animate-bounce self-center '/>
        <p className='font-extrabold text-2xl'>مبادلة</p>
        </div>
      </Link>

      <img src='Pharos.jpg' className=' h-28 mt-3 mb-3 ml-10'></img>
    </div>
      
    </>
   
  )
}

export default NavBar