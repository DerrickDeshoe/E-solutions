import React from 'react';
import Image from 'next/image';
import ServiceMark from '../../public/images/HomeImages/ServiceMark.svg';

interface Payment {

    title: string 
    description: string
}

const PaymentSolutions = (props: Payment) => {
  return (
    <div className='flex flex-col space-y-3'>
      <div className='flex space-x-2 items-center'>
        <Image src={ServiceMark} alt='ServiceMark' className='w-[5%] lg:w-[3%]'/>
        <h4 className='font-bold lg:text-[12px]'>{props.title}</h4>
      </div>
      <p className=' text-xs lg:text-[13px] leading-normal tracking-wide'>{props.description}</p>
    </div>
  )
}

export default PaymentSolutions
