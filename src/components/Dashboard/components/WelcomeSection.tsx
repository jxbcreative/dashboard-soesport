import React from 'react'
import Image from 'next/image'
import BgDashboard from '../../../../public/assets/management-product.svg'
import Link from 'next/link'

const WelcomeSection = () => {
  return (
    <div className='flex w-[54vw] bg-[#589BFF] rounded-md h-auto p-3'>
        <div className='p-3 mt-5'>
            <h2 className='font-bold text-xl text-white'>Hello Benny Tan!</h2>
            <p className='mt-4 text-[13px] w-[80%]'>How your day? Do you want to create a new product?</p>
            <div className='mt-4'>
              <Link href={'/products'}>
                <button className='bg-[#f7a20f] rounded-md text-white font-medium py-2.5 text-md px-6'>Add product</button>
              </Link>
            </div>
        </div>      
            <Image src={BgDashboard} alt='management-product' className='w-[50%] ml-auto mr-10'/>
    </div>
  )
}

export default WelcomeSection