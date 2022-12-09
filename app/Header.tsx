import React from "react"
import Link from "next/link"

function Header() {
    return (
        <header className="p-5"> 
            <Link href="./" className="font-bold text-xl text-white">Home</Link>
        </header> 
    )  
} 

export default Header 