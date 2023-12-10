import React from 'react'
import { FaTachometerAlt, FaRegSun, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt } from "react-icons/fa"
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className='bg-[#4E73DF] px-[20px]   h-screen'>
        {/* <div className="fixed h-screen px-[20px] w-1/6 bg-[#4E73DF] text-white p-4"> */}
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'><NavLink
              to="/Main"
              className={({ isActive }) => {
                return ` text-sm text-black hover:text-blue-600 ${
                  isActive && "text-blue-500"
                } `;
              }}
            >
              Dashboard
            </NavLink></p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'><NavLink
              to="/Allstudent"
              className={({ isActive }) => {
                return ` text-sm text-black hover:text-blue-600 ${
                  isActive && "text-blue-500"
                } `;
              }}
            >
              Dashboard
            </NavLink></p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaWrench color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'><NavLink
              to="/Stu"
              className={({ isActive }) => {
                return ` text-sm text-black hover:text-blue-600 ${
                  isActive && "text-blue-500"
                } `;
              }}
            >
              Student
            </NavLink></p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> ADDONS</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer'>
                    <FaRegChartBar color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>
                </div>
                <div className='flex items-center gap-[10px] py-[15px] cursor-pointer'>
                    <FaRegCalendarAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
            </div>
            <div className='pt-[15px]'>
                <div className='flex items-center justify-center'>
                    <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
                        <FaChevronLeft color='white' />
                    </div>
                </div>
            </div>
            <div className='bg-[#395CBF] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
                <FaBolt color='white' />
                <p className='text-[12px] leading-[18px] font-normal text-white/[0.4] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, soluta.</p>
                <button className='bg-[#17A673] text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Upgrade to Pro!</button>

            </div>
        </div>
    )
}

export default Sidebar