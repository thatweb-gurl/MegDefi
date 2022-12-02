import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border rounded-2xl p-[2rem] '>
                
    <div>
      <div className='bg-[#00d8ff] text-3xl inline-flex rounded-[50%] p-2 mb-2'>
        {props.icon}
        </div>
      <h3 className='text-xl font-bold'>
        {props.heading}
        </h3>
      <p className='text-left'>{props.text}
      </p>
    </div>

    

    </div>
  )
}

export default AboutCard