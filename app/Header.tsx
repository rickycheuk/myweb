import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

function Header() {
  return (
    <header className="p-5">
      <a
        href="./"
        className="absolute float-left w-3 group bg-transparent text-white text-2xl rounded-lg opacity-60 hover:opacity-100"
      >
        <Icon.Home className="group-hover:scale-125" />
      </a>
    </header>
  );
}

export default Header;
