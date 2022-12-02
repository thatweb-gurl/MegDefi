import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 bg-black text-white text-center'>
        <h1><span className='blue'>Join MegDefi community</span></h1>
        <div className='py-4'>
            <input className='p-3 m-4 rounded-3xl blue '
            type="email" placeholder='Enter your email address'/>
            <button className='m-2'>Subscribe</button>
        </div>
        <div className='flex item-center justify-center py-2'>
            <input className=' mr-2' type='checkbox' />
            <p>Yes, I agree to recieve emails from MegDefi</p>
        </div>
        
    </div>
  )
}

export default Subscribe