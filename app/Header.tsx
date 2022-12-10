import React from "react"
import Link from "next/link"
import * as Icon from 'react-feather';

function Header() {
    return (
        <header className="p-5"> 
            <Link href="./" className="font-bold text-xl text-white opacity-75 hover:opacity-100"><Icon.Home /></Link>
        </header> 
    )  
} 

export default Header 