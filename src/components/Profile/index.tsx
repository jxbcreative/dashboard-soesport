import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {BiShow} from 'react-icons/bi'

const socialMedia = [
  {icon: <BsInstagram/>, color: [ "hover:bg-pink-600", "text-pink-600"]},
  {icon: <BsTwitter/>, color: ["hover:bg-blue-400", "text-blue-400"]}
]

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="w-[22vw] h-auto pt-3 pb-1 ml-auto rounded-md bg-white">
      <div className=" relative">
        <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto">
          <p className="font-semibold text-white text-center p-2 text-2xl">
            T
          </p>
        </div>
        <div className="space-y-1 ml-3 text-center mt-2">
          <p className="font-semibold text-[15px]">Benny Tan Susanto</p>
          <p className="text-gray-400 text-xs">tansusanto194@gmail.com</p>
        </div>
        <div className="ml-auto absolute top-0 cursor-pointer right-5">
          <CiMenuKebab className="text-lg" onClick={handleOpen}/>
          <div className={`${open? "bg-white w-auto top-5" : "opacity-0 top-10"} absolute py-2.5 px-6 transition-all ease-in-out duration-300 right-0 shadow-md rounded-md cursor-pointer`}>
            <p className="text-red-500">Update</p>
          </div>
        </div>
        {/* Social media */}
        <div className="flex items-center space-x-3 justify-center mt-5">
          {
            socialMedia.map((val, idx) => (
              <div key={idx} className={`${val.color[0]} p-2.5 rounded-md bg-gray-100 transition-all ease-in-out duration-200 hover:text-white ${val.color[1]}`}>
                <p className="text-lg">{val.icon}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="bg-gray-300 w-full h-[1px] my-4"/>
      <div className="px-3">
        <div className="mb-3 space-y-1">
          <label className="text-xs font-medium">Name</label>
          <div className="bg-gray-100 w-full py-2.5 px-2 rounded-sm">
            <p className="text-md text-gray-400">Benny Tan Susanto</p>
          </div>
        </div>
        <div className="mb-3 space-y-1">
          <label className="text-xs font-medium">Phone Number</label>
          <div className="bg-gray-100 w-full py-2.5 px-2 rounded-sm">
            <p className="text-md text-gray-400">089604276162</p>
          </div>
        </div>
        <div className="mb-3 space-y-1">
          <label className="text-xs font-medium">Email</label>
          <div className="bg-gray-100 w-full py-2.5 px-2 rounded-sm">
            <p className="text-md text-gray-400">tansusanto194@gmail.com</p>
          </div>
        </div>
        <div className="mb-3 space-y-1">
          <label className="text-xs font-medium">Password</label>
          <div className="bg-gray-100 w-full flex items-center py-2.5 px-2 rounded-sm">
            <p className="text-md text-gray-400">Susanto23</p>
            <BiShow className="text-lg ml-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
