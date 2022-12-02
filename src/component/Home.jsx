import React from 'react'
import homeVid from '../asset/Earth.mp4'

const Home = () => {
  return (
    <div className='w-full h-[100vh]  top-[90px]'>
        <video className='object-cover h-full w-full absolute -z-10' src={homeVid} autoPlay loop muted />
        <div className='w-full h-[90%] flex justify-center items-center flex-col text-white px-4 text-center'>
            <h1>Decentralized</h1>
            <h1 className='py-2'><span className='blue'>Trading</span> Unleashed</h1>
            <p className='text-xl py-4'>Guaranteed liquidity trading for millions of users and top Etherium Applications.
                <span className='blue'> A new Trading Future!</span>
            </p>
            <div>
                <button className='m-2'>Use MegDefi</button>
                <button type="button" className="bg-none border-2 border-[#00d8ff] m-2 text-[#00d8ff] px-[2rem] ">
                    FAQ
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home