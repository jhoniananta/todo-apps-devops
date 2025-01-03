import React, { useRef } from "react";
import Typography from "./components/Typography";
import { Input } from "./components/InputRightIcon";
import { IoSearchOutline } from "react-icons/io5";

type NavbarProps = {
  children: React.ReactNode;
  withSearch?: boolean;
  handleFilterClick?: () => void;
  handleSearch?: (search: string) => void;
};

export default function Navbar({ children, withSearch = false, handleFilterClick = () =>{}, handleSearch = () => {} }: NavbarProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    handleSearch(searchRef.current!.value);
    searchRef.current!.value = "";
  }
  
  return (
    <>
      <div className="fixed bg-transparent sm:bg-[#051A49] w-full flex flex-col gap-4 sm:gap-0 sm:flex-row items-center sm:items-center sm:pr-12">
        <div className="flex w-full min-h-[82px] bg-[#051A49] items-center px-4 lg:px-8">
          <Typography variant="h5" weight="bold" className="text-[#F8DF53]">
            {children}
          </Typography>
        </div>

        {withSearch && (
          <div className="px-4 sm:px-0 flex gap-4 items-center">
            <Input type="text" placeholder="Search" icon={<IoSearchOutline />} ref={searchRef} handleClickIcon={handleClick}/>
            <img
              src="/icons/filter.png"
              alt="Filter Icon"
              className="hidden sm:block cursor-pointer"
              onClick={handleFilterClick} 
            />

            <img
              src="/icons/filter-black.png"
              alt="Filter Icon"
              className="block sm:hidden cursor-pointer"
              onClick={handleFilterClick} 
            />
          </div>
        )}
      </div>

      
    </>
  );
}
