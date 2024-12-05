import React from "react";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  childNav?: string;
  withNavbar?: boolean;
  withSearch?: boolean;
};

export default function Layout({
  children,
  childNav,
  withNavbar,
  withSearch,
}: LayoutProps) {
  return (
    <>
      {withNavbar && <Navbar children={childNav} withSearch={withSearch} />}
      <div className="pt-24">{children}</div>
    </>
  );
}