
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Wheater from "@/components/Wallet";
import Profile from "@/components/Profile";
import React,{ ReactNode } from "react";

interface Props{
  children: ReactNode;
  pageProps: string;
}

const Layouts: React.FC<Props> = ({ children, pageProps }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[86vw]">
        <Navbar pageProps={pageProps}/>
        <div className="flex mx-14 mt-5">
        <main>{children}</main>
        <div className="space-y-5 ml-auto">
          <Wheater/>
          <Profile/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
