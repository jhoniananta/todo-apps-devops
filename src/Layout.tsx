import React from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  childNav?: string;
  withNavbar?: boolean;
  withSearch?: boolean;
  handleFilterClick?: () => void;
  handleSearch?: (search: string) => void;
};

export default function Layout({
  children,
  childNav,
  withNavbar,
  withSearch,
  handleFilterClick,
  handleSearch = () => {},
}: LayoutProps) {
  return (
    <>
      {withNavbar && <Navbar children={childNav} withSearch={withSearch} handleFilterClick={handleFilterClick} handleSearch={(search: string )=> handleSearch(search)}/>}
      <div className="pt-24">{children}</div>
    </>
  );
}