import React from "react";
import Typography from "./components/Typography";
import { Input } from "./components/InputRightIcon";
import { useLocation } from "react-router-dom"; 

type NavbarProps = {
  children: React.ReactNode;
};

export default function Navbar({ children }: NavbarProps) {
  const location = useLocation();

const getNavbarTitle = () => {
  if (location.pathname === "/add") {
    return "Add To-do";
  }
  return children;
};

  return (
    <div className="bg-transparent sm:bg-[#051A49] w-full flex flex-col gap-4 sm:gap-0 sm:flex-row items-center sm:items-center sm:pr-12">
      <div className="flex w-full min-h-[82px] bg-[#051A49] items-center px-4 lg:px-8">
        <Typography variant="h5" weight="bold" className="text-[#F8DF53]">
          {getNavbarTitle()}
        </Typography>
      </div>

      {window.location.pathname !== "/add" && (
        <div className="px-4 sm:px-0 flex gap-4 items-center">
          <Input placeholder="Search" />
          <img
            src="/public/icons/filter.png"
            alt="Filter Icon"
            className="hidden sm:block"
          />
          <img
            src="/public/icons/filter-black.png"
            alt="Filter Icon"
            className="block sm:hidden"
          />
        </div>
      )}
    </div>
  );
}
