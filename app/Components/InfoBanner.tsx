import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Banner {

    image: StaticImageData
    heading: string
    paragraph: string
}

const InfoBanner = (props: Banner) => {
  return (
    <div className='flex flex-wrap items-center p-[5%] bg-blue lg:space-x-[5%]'>
      <Image src={props.image} alt='BannerImage' className='w-[38%]' />
      <div className='flex flex-col w-[48%] text-white'>
        <h3 className='font-bold'>{props.heading}</h3>
        <p className='text-xs lg:text-[14px] leading-8 tracking-normal'>{props.paragraph}</p>
      </div>
    </div>
  )
}

export default InfoBanner
