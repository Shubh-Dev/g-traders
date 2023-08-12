import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoNotificationsSharp } from 'react-icons/io5';

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="left flex items-center px-2 py-2 gap-2">
                <div className="w-9 rounded-md">
                    <img src="/GT.png" alt="logo" className="object-cover rounded-md" />
                </div>
                <div><RxHamburgerMenu className="text-3xl text-slate-500" /></div>
                <div><input type="text" className="rounded-2xl border border-slate-500 px-2 width-[20px]" /></div>
            </div>



            <div className="flex items-center gap-2">
                <div><IoNotificationsSharp className="text-xl" /></div>
                <div className="w-9 h-9 rounded-full">
                    <img src="/user.jpg" alt="logo" className="object-cover w-9 h-9 rounded-full" />
                </div>



            </div>
        </div>
    )
};

export default Header