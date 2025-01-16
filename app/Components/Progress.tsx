import React from 'react';

interface Progress {

    digit: string 
    statement: string
}

const Progress = (props: Progress) => {
  return (
    <div className='flex flex-col border-r border-white p-5 space-y-3'>
      <div className='flex justify-center'>
        <p className='font-bold lg:text-4xl'>{props.digit}</p>
        <p className='font-bold lg:text-4xl'>+</p>
      </div>
      <p className='font-light leading-relaxed tracking-wider'>{props.statement}</p>
    </div>
  )
}

export default Progress
