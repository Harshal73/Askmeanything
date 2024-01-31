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
                <label className='relative block' >
                  <span className=' flex flex-row' ></span>
                  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-32 border text-black border-slate-300 rounded-md   pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search " type="text" name="search"/>
                </label>
                

                
                
            </ul>
            </div> 
            
            </div>
    </div>

    
   
  )
}


export default Navbar