import React from 'react';
import {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full h-[90px] bg-black'>
    <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div>
          <h1 className='text-[#00d8ff]'>MegDefi</h1>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex text-[#f8f8f8] items-center'>
            <li>Platform</li>
            <li>About</li>
            <li>Developers</li>
            <li>Community</li>
            
            <button className='ml-4'>Use MegDefi</button>
          </ul>
         
        </div>
        {/* menu-btn */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ?  <AiOutlineClose size={30} className='text-white'/> : <AiOutlineMenu size={30} className='text-white'/>}
          
         
        </div>
    </div>
    <div className={nav ?'w-full bg-black text-white absolute top-90px left-0 flex justify-center text-center' :  
    'absolute left-[-100%]'}>
          <ul >
            <li className='text-2xl'>Platform</li>
            <li className='text-2xl'>About</li>
            <li className='text-2xl'>Developers</li>
            <li className='text-2xl'>Community</li>
            
            <button className='m-8 px-8'>Use MegDefi</button>
          </ul>
         
        </div>

</div>
  )
}

export default Navbar