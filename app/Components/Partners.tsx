import React from 'react';
import OK from '../../public/images/PartnersImages/OK.png';
import Telecel from '../../public/images/PartnersImages/PTel.png';
import Zim from '../../public/images/PartnersImages/ZimSwitch.png';
import Econet from '../../public/images/PartnersImages/Econet.png';
import ZB from '../../public/images/PartnersImages/ZB.png';
import NBS from '../../public/images/PartnersImages/nbs.png';
import Cimas from '../../public/images/PartnersImages/Cimas.png';
import RBZ from '../../public/images/PartnersImages/ReserveBank.png';
import NetOne from '../../public/images/PartnersImages/Netone.png';
import NMB from '../../public/images/PartnersImages/NMB.png';
import Image from 'next/image';

interface Partners {

    heading : string 
    description: string
    color: string 
    color2: string
    font: string
    font2: string
    text: number
}

const Partners = (props: Partners) => {
  return (
    <div className='bg-partners bg-center bg-no-repeat bg-cover h-[60vh] w-[100%] p-5 lg:px-[6%] relative'>
      <div className='flex flex-col space-y-3 '>
        <h4 className={`text-${props.color} font-${props.font}`}>{props.heading}</h4>
        <p className={`text-${props.color2} font-${props.font2} text-[${props.text}px] leading-5 tracking-normal lg:w-[60%]`}>{props.description}</p>
      </div>
      <div className=''>
        <Image src={Telecel} alt='OK' className='absolute left-[3%] top-[30%] w-[5%]'/>
        <Image src={OK} alt='OK' className='absolute right-[25%] top-[10%] w-[7%]'/>
        <Image src={NMB} alt='OK' className='absolute left-[10%] top-[35%] w-[5%]'/>
        <Image src={NetOne} alt='OK' className='absolute left-[17%] top-[25%] w-[5%]'/>
        <Image src={Cimas} alt='OK' className='absolute left-[5%] top-[53%] w-[7%]'/>
        <Image src={ZB} alt='OK' className='absolute left-[20%] top-[53%] w-[8%]'/>
        <Image src={Zim} alt='OK' className='absolute right-[15%] top-[33%] w-[7%]'/>
        <Image src={Telecel} alt='OK' className='absolute right-[8%] top-[10%] w-[5%]'/>
        <Image src={Econet} alt='OK' className='absolute right-[15%] bottom-[8%] w-[8%]'/>
        <Image src={NBS} alt='OK' className='absolute right-[35%] bottom-[12%] w-[8%]'/>
        <Image src={Telecel} alt='OK' className='absolute right-[55%] bottom-[15%] w-[8%]'/>
        <Image src={RBZ} alt='OK' className='absolute left-[45%] bottom-[45%] w-[8%]'/>
      </div>
    </div>
  )
}

export default Partners
