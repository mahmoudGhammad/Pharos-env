import React from 'react'

function HomeFooter() {
  return (
    <div className=' felx  m-10 w-full flex-row-reverse'>

        <div className=' flex flex-col self-end  text-slate-900 font-sans font-bold shadow-md  p-4'>
            <p className=' self-end '>  رقم جهاز شئون البيئة ١٩٨٠٨ </p>
            <p className=' self-end ' >www.shakwa.eg</p>

            <p className=' self-end '>٣٠ طريق مصر حلوان الزراعي - المعادي - القاهرة - مصر </p>
            <p className=' self-end '> الرقم البريدي ١١٧٢٨</p>
            <p className=' self-end '>ت : ٠٢٢٥٢٥٦٤٥٣ </p>
            <p className=' self-end '>ت : ٠٢٢٥٢٥٦٤٥٢</p>

            <p className=' self-end '>فاكس :٠٢٢٥٢٥٦٤٩٠</p>
        </div>  

        <div className=' self-start'>
         <p className=' text-xs shadow-md  p-5 rounded-lg w-fit  mb-7 font-bold'> Made Possible by: Prof. Dr. Ahmed Samir Nasser</p>
        </div>
    </div>
  )
}

export default HomeFooter