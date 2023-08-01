import React from 'react';
import ThemeButton from "@/app/components/ThemeButton";

function Navbar() {
    return (
        <div className={"w-full flex justify-between items-center bg-black text-white p-8 font-bold dark:text-black dark:bg-white"}>
            <div>sanaz niamati</div>
            <ThemeButton/>
        </div>
    );
}

export default Navbar;