import React from "react";
import Typography from "./Typography";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCaretUp } from "react-icons/fa";


type DropDownMenuProps = {
  placeholder: string;
  options: string[];
};

export default function DropDownMenu({
  placeholder = "",
  options = [],
}: DropDownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleClick = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className={`w-full bg-[#F8FAFF]  focus:outline-none font-medium  text-sm px-4 py-1.5 text-center inline-flex items-center justify-between ${isOpen? 'rounded-t-2xl' :'rounded-2xl'}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value === "" && (
          <Typography variant="c2" className="text-muted-foreground">
            {placeholder}
          </Typography>
        )}
        {value !== "" && (
          <Typography variant="c2" className="text-black">
            {value}
          </Typography>)
        }
        {!isOpen && <IoMdArrowDropdown color="gray" size={20} />}
        {isOpen && <FaCaretUp color="gray" size={16} />}
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          isOpen ? "" : "hidden"
        } absolute   bg-[#F8FAFF] rounded-b-2xl w-full`}
      >
        <ul className="pt-1 pb-3.5 text-sm" aria-labelledby="dropdownDefaultButton">
          {options.map((option, key) => (
            <li key={key}>
              <button
                onClick={(e) => {
                  e.preventDefault(); // Mencegah event bubbling
                  handleClick(option)}}
                className="block w-full text-left px-4 py-1.5  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

''' test