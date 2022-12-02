import React from 'react';
import terminal from '../asset/terminal.png';

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
        <div className='max-w-[1240px] px-16 py-16 md:flex ' >
            <div>
                <h1>Superpowers For <span className='blue'>MegDefi</span> Development</h1>
                <p>
                    Checkout the <span className='text-[#6a00ff]'> documentation</span> , the <span className='text-[#6a00ff]'> quick start</span> or <span className='text-[#6a00ff]'> a guide below</span> to integrate 
                    your project with thousands of tokens and billions of liquidity.
                </p>
            </div>
            <div className='flex justify-center w-full py-16'>
                <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={terminal} alt="/" />
            </div>
        </div>
        
    </div>
  )
}

export default Developers