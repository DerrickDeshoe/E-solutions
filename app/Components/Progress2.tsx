import React from 'react';

interface Progress {

    digit: string 
    statement: string
}

const Progress2 = (props: Progress) => {
  return (
    <div className='flex flex-col p-5 space-y-3 lg:w-[50%] items-center justify-center'>
      <div className='flex justify-center'>
        <p className='font-bold lg:text-5xl'>{props.digit}</p>
        <p className='font-bold lg:text-5xl'>+</p>
      </div>
      <p className='font-semibold leading-relaxed tracking-wide text-sm'>{props.statement}</p>
    </div>
  )
}

export default Progress2