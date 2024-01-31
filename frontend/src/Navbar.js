import React from 'react'

const Navbar
 = () => {
  return (
    <div className=' px-20 flex items-center bg-black text-white  '>
    <div >
        
            <div className='flex' >
            <ul className='flex flex-row  mt-3 space-x-20 rtl:space-x-reverse text-sm ' >
            <li className='pl-10 font-signature text-2xl '  >Asker</li>
                <li className='pl-10 text-gray-200  hover:text-orange-500 cursor-pointer'  >Forums</li>
                <li className='text-gray-200 hover:text-orange-500 cursor-pointer' >Community Standards</li>
                <li className='text-gray-200 hover:text-orange-500 cursor-pointer'>All Activity</li>
                <li className='text-gray-200 hover:text-orange-500 cursor-pointer'>More</li>
                <li className='pl-30 text-gray-200 hover:text-orange-500  cursor-pointer' >Exsisting User?,Sign In</li>
                <li  className='pl-15 text-gray-200  hover:text-orange-500  cursor-pointer'>Sign Up</li>
            </ul>
            </div> 
            
            </div>
    </div>

    
   
  )
}


export default Navbar