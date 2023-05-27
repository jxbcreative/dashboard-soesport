import React from 'react'
import {FaWallet} from 'react-icons/fa'
// import LogoSoeSport from '../../../public/assets/logo-soesport-white.svg'
// import Image from 'next/image'

const Wallet = () => {
  return (
    <div className='bg-blue-600 w-[22vw] ml-auto h-auto rounded-md'>
      <div className='flex'>
        <div className='p-5'>
          <div className='bg-[#ffffff91] w-9 h-9 rounded-full p-2'>
            <FaWallet className='text-lg text-white mx-auto'/>
          </div>
          <div className='space-y-1 mt-5'>
            <p className='font-medium text-white text-[13px] mt-3'>Wallet Balance</p>
            <h2 className='text-2xl font-bold text-white mt-2'><span className='text-sm'>$</span> 400,254</h2>
          </div>
        </div>
        <div className='bg-white opacity-10 h-auto w-32 rounded-l-full ml-auto'/>
        {/* <Image src={LogoSoeSport} alt='logo-soesport' className='w-12 ml-auto mr-5'/> */}
      </div>
    </div>
  )
}

export default Wallet