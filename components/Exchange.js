import Head from 'next/head'


import {React , useRef , useState} from 'react'

import { db } from '../firebase'

import {doc , setDoc , addDoc , getFirestore, collection , }from 'firebase/firestore'
import NavBar from '../components/NavBar';


export default function Exchange() {
    
    const [file, setFile] = useState("");
 
    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);}
  
  
  const fName = useRef(null)
  const lName = useRef(null)
  const mNumber = useRef(null)
  const claim = useRef(null)
  const pic   = useRef(null)
  
  function subForm (e) {
      e.preventDefault()
     let firstName = fName.current.value
    //  let lastname = lName.current.value
     let phonenum = mNumber.current.value
     let claimU = claim.current.value
     let pict = pic.current.value
  
     console.log(firstName.length);
     let data={}
     if(firstName.length != "" & phonenum != '' & claimU != '' ){
      let data = {
          ffname : firstName ,
          // llname : lastname ,
          ppnumber : phonenum ,
          claimUm : claimU,
          picture  : pict ,
  
      }
      //********************************************************************************************************* */
      // adding document to firebase 
      const dataRef = collection (db , "patient")
      addDoc(dataRef , {
  
          ffname : firstName ,
          // llname : lastname ,
          ppnumber : phonenum ,
          claimUm : claimU,
          picture : pict, 
  
  
      })
         
     //******************************************************************************************* */
      console.log(data);
      fName.current.value = ''
      // lName.current.value = ''
      mNumber.current.value = ''
      claim.current.value =''
      alert('تم ارسال طلبك بنجاح')
  
     }else {
         alert('يجب ملئ جميع البيانات ')
     }

  }
  return (
<>
    
    
    <main className=' flex flex-col justify-items-stretch'>
    
    
    <div className=' self-end mt-7 p-3 flex flex-col w-full '>
      <p className=' font-semibold font-serif text-xs lg:text-lg self-end'>لإجراء عمليات الاستبدال من فضلك املأ البيانات التالية </p>
    </div>
    <form className=' flex flex-col m-4'  >


      <div className=' flex  bg-slate-300 rounded-md flex-col lg:flex-row '>

        <div className=' bg-slate-300 p-4 w-1/2 rounded-md'>
           <label for="fName" >Name:</label>
           <input ref={fName} type='text' id='fName' name='fName' 
            className=' rounded-full m-4 h-10 w-fit text-center text-slate-700 '
      
           >

          </input>

        </div>
        {/* <div className=' bg-slate-300 p-4 w-1/2' >
           <label for="lname">National ID:</label>
           <input ref={lName} type='text' id='lName' name='lName' 
              className=' rounded-full m-4 h-10 w-fit text-slate-700 text-center'
      
           >

          </input>

        </div> */}

        <div className=' bg-slate-300 p-4 w-1/2 rounded-md'>
           <label for="mNumber">Mobile Number:</label>
           <input  ref={mNumber} type='text' id='mNumber' name='mNumber' 
              className=' rounded-full m-4 h-10 w-fit text-slate-700 text-center'
      
           >

          </input>

        </div>

      </div>
      <div className=' flex bg-slate-300 mt-5 p-7 rounded-md flex-col'>
        <label for='claim'>Exchange Expalnation :</label>
        <input ref={claim} type='text' name='claim' id='claim' className=' rounded-xl p-2 text-center border-none m-4 h-16 text-slate-700 w-full ' ></input>
      </div>


      <div className=' self-center mt-7'>
      <input ref={pic} type="file" accept="image/*"  className=' text-slate-800 bg-slate-300'/>
      
      </div>
      



      <div className='self-center mt-12 bg-black text-yellow-200 rounded-md '>
        <button onClick={subForm} className='p-5 rounded-xl text-center font-extrabold' >Apply</button>
      </div>
     
    </form>
  </main>
  </>
  )
}
