import Head from 'next/head'

import Link from 'next/link'
import {React , useRef , useState} from 'react'

import { db } from '../firebase'

import {doc , setDoc , addDoc , getFirestore, collection , }from 'firebase/firestore'
import NavBar from '../components/NavBar'
import HomeBody from '../components/HomeBody'
import HomeFooter from '../components/HomeFooter'



export default function Home() {


    
  return (
    <div  >
      <Head>
        <title>Pharos Claim </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Pharos.jpg" />


        
      </Head>
      <div className=' h-screen'>

          <NavBar/>
          <div className="  w-full h-screen flex  flex-col flex-1">

                <div  className=' w-fit self-end'>
                  <p className=' text-sm font-bold font-serif lg:text-2xl  shadow-md p-5 m-3 mt-10'> منصة جامعة فاروس القانونيه لحماية البيئة  </p>   
                </div>

                
                < div className=' flex flex-col ' >
                    <HomeBody />
                    <HomeFooter /> 
                  
                </div>

       </div>
      



      </div>
      

      
      



     
    </div>
  )
}
