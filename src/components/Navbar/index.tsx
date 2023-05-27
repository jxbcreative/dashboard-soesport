import React,{ useState } from 'react';
import {BiSearch} from 'react-icons/bi'
import {RiNotification3Line, RiSettings3Line} from 'react-icons/ri'
import {CgLogOut} from 'react-icons/cg'

interface NavProps{
  pageProps: string;
}


const iconProfile = [
  {name: 'Settings', icon: <RiSettings3Line/>},
  {name: 'Logout', icon: <CgLogOut/>},
]

const Navbar: React.FC<NavProps> = ({pageProps}) => {
  const [openProfile, setOpenProfile] = useState<boolean>(false)

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile)
  }

  return (
      <div className="py-4 px-3 flex items-center">
          <h2 className='ml-14 text-xl font-bold'>{pageProps}</h2>
        <div className="ml-auto flex items-center space-x-10 mr-20">
        <div className='w-72 bg-white py-3 px-2 flex items-center space-x-3 ml-10 rounded-md'>
          <BiSearch className='text-lg text-gray-400'/>
          <input type="text" placeholder='Search products' className='w-full'/>
        </div>
          <div className='relative'>
            <RiNotification3Line className='text-lg'/>
            {/* Notification */}
            <div className='w-5 h-5 bg-red-500 rounded-full absolute top-0 left-2.5'>
              <p className='text-center text-[11px] p-0.5 text-white'>0</p>
          </div>
            </div>
            {/* Account */}
            <div className='relative'>
            <div onMouseEnter={handleOpenProfile} className='bg-blue-500 cursor-pointer w-10 h-10 rounded-full'>
                <p className='font-semibold text-center text-white p-1.5 text-lg'>T</p>
            </div>
            <div onMouseLeave={() => setOpenProfile(false)}  className={`${openProfile? "bg-white w-auto rounded-md py-3 top-12 shadow-sm" : "opacity-0 top-20"} absolute right-0 transition-all ease-in-out duration-300`}>
                <div className='space-y-1 px-3'>
                  <p className='font-semibold'>Benny Tan Susanto</p>
                  <p className='text-gray-300'>tansusanto194@gmail.com</p>
                </div>
                <div className='bg-gray-200 w-full h-[1px] my-3'/>
                <div className='px-3'>
                  {
                    iconProfile.map((val, idx) => (
                      <div key={idx} className={`${val.name == 'Logout' ? "text-red-500" : "text-black"} flex items-center space-x-2 hover:bg-gray-100 py-3 px-3 cursor-pointer rounded-md transition-all ease-in translate-x-0 duration-300`}>
                        <p className='text-lg'>{val.icon}</p>
                        <p>{val.name}</p>
                      </div>
                    ))
                  }
                </div>
            </div>
            </div>
        </div>
      </div>
  );
};

export default Navbar;
