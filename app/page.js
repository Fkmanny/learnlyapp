"use client"
import React, { useState } from 'react'
import { FaBars, FaBell, FaChevronLeft, FaChevronRight, FaGgCircle, FaHome, FaRegCalendar, FaStumbleuponCircle, FaTasks, FaTimes, FaTools, FaWallet } from 'react-icons/fa';
import { FaChartLine, FaCircleExclamation, FaRegCalendarDays, FaRegUser } from 'react-icons/fa6';
import { RxDashboard } from "react-icons/rx";
import { TbLogout } from 'react-icons/tb';
import { MdAccessTimeFilled, MdAvTimer, MdOutlineAccessTimeFilled, MdOutlineAutoGraph, MdTaskAlt } from 'react-icons/md';
import { TiDocumentText } from "react-icons/ti";
import { BiAlarmExclamation } from "react-icons/bi";
import { VscBell } from "react-icons/vsc";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Loadee from '@/components/Loadee';
import useStore from '@/components/store';
import Dashboard from '@/components/Dashboard';


const Home = () => {

  const { setRToggle } = useStore();

  const RToggle = useStore((state) => state.RToggle);

  const toggleclick =() =>{
    setRToggle(!RToggle)
  }


  const [isLoading, setIsLoading] = useState(false);

  const navButton = () => {
    toast.error('You only requested for the Dashboard')
  }
  const navButtonX = () => {
    toast.success('You are currently on the Dashboard')
  }
  const logOut = () => {
    toast('Logging out from where?', {
      icon: '👀',
    });
  }




  return (
    <div className='w-full px-3 py-4 h-screen sm:h-auto md:p-8 bg-gray-50'>
              {isLoading && <Loadee/>}

              {/* Sidebar */}
        <div className=' md:w-[94%] mx-auto h-full flex flex-row  gap-7 '>
            <div className={`z-20 transition-all duration-300 ${RToggle ? 'left-0 z-20' : 'left-[100%]'} fixed w-full xl:left-auto xl:w-[23%] xl:relative flex flex-col items-center py-8 h-full bg-gray-50 xl:bg-[#634db4] shad5  overflow-y-scroll xl:overflow-y-visible`} style={{borderRadius : '40px'}}>
                <div className='flex items-center justify-start w-9/12 mt-7 xl:mt-0 xl:w-auto gap-4'>
                    <div>
                    <FaStumbleuponCircle color='blue' size={30}
                    className='block xl:hidden'/>
                    <FaStumbleuponCircle color='white' size={30} className='hidden xl:block'/>
                    </div>
                    <h1 className='AoenikRegular logotext font-semibold text-3xl md:text-3xl text-gray-800 xl:text-white hidden xl:block'>Teachmate AI</h1>
                    <h1 className='AoenikRegular logotext font-semibold text-3xl md:text-3xl text-gray-800 xl:text-white block xl:hidden'>Teachmate AI</h1>
                </div> 
                
                {/* Sidebar Links */}
                <div className='w-9/12 mx-auto font-semibold mt-8 xl:mt-20'>
                  <ul >
                    <li onClick={navButton} className='cursor-pointer flex flex-row AoenikRegular text-lg items-center gap-10 p-2 pl-3 rounded-lg hover:bg-[#ffffff30] text-gray-800 xl:text-white opacity-95 mb-1.5'><FaHome size={21} /> Home</li>
                    <li onClick={navButtonX} className='cursor-pointer flex flex-row AoenikRegular text-lg items-center gap-10 p-2 pl-3 rounded-lg hover:bg-[#ffffff30] text-gray-800 xl:text-white opacity-95 mb-1.5'><RxDashboard size={21} /> Dashboard</li>
                    <li onClick={navButton} className='cursor-pointer flex flex-row AoenikRegular text-lg items-center gap-10 p-2 pl-3 rounded-lg hover:bg-[#ffffff30] text-gray-800 xl:text-white opacity-95 mb-1.5'><FaRegCalendarDays size={21}/> Courses</li>
                    <li onClick={navButton} className='cursor-pointer flex flex-row AoenikRegular text-lg items-center gap-10 p-2 pl-3 rounded-lg hover:bg-[#ffffff30] text-gray-800 xl:text-white opacity-95 mb-1.5'><TiDocumentText size={21}/> History</li>
                    <li onClick={navButton} className='cursor-pointer flex flex-row AoenikRegular text-lg items-center gap-10 p-2 pl-3 rounded-lg hover:bg-[#ffffff30] text-gray-800 xl:text-white opacity-95 mb-1.5'><FaRegUser size={21}/> Account</li>
                  </ul>
                </div>
               {/*close Popup*/}
                <h3 onClick={()=>{toggleclick()}} className=' text-gray-700 cursor-pointer flex font-semibold hover:text-[#970dce] duration-300 items-center mt-5 xl:hidden absolute left-10 top-0'><FaChevronLeft size={18} className='mr-1'/> back</h3>

                {/* LogOut Onclick*/}
                <div className='w-9/12 mx-auto mt-1.5 font-semibold xl:mt-[11.8rem]'>
                  <ul >
                    <li onClick={logOut} className='cursor-pointer flex flex-row AoenikRegular text-lg items-center gap-10 p-2 pl-3 rounded-lg hover:bg-[#ffffff30] text-gray-800 xl:text-white opacity-95 mb-2'><TbLogout size={21}/> Log out</li>
                  </ul>
                </div>
            </div>
            <Dashboard/>


        </div>

    </div>
  )
}

export default Home




