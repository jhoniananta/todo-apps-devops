  import React from "react";
  import Typography from "./Typography";
  import { IoMdArrowDropdown } from "react-icons/io";
  import { FaCaretUp } from "react-icons/fa";


  type DropDownMenuProps = {
    placeholder: string;
    options: string[];
    selected?: string;
    handleChange: (selectedOption: string) => void;
  };

  export default function DropDownMenu({
    placeholder = "",
    options = [],
    selected = "",
    handleChange = () => {},
  }: DropDownMenuProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = React.useState(selected);

    const handleClick = (option: string) => {
      setValue(option);
      setIsOpen(false);
      handleChange(option);
    }
    return (
      <div className="relative">
        <button
          id="dropdownDefaultButton"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className={`w-full bg-[#F8FAFF] focus:outline-none font-medium text-sm px-4 py-1.5 text-center inline-flex items-center justify-between ${
            isOpen ? "rounded-t-2xl" : "rounded-2xl"
          }`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {value ? (
            <Typography variant="c2" className="text-black">
              {value}
            </Typography>
          ):(
            <Typography variant="c2" className="text-muted-foreground">
              {placeholder}
            </Typography>)
          }
          {!isOpen ? <IoMdArrowDropdown color="gray" size={20} /> : <FaCaretUp color="gray" size={16} />}
        </button>

        {isOpen && (
        <div
          id="dropdown"
          className="z-10 absolute bg-[#F8FAFF] rounded-b-2xl w-full shadow-md"
        >
          <ul className="pt-1 pb-3.5 text-sm overflow-auto" aria-labelledby="dropdownDefaultButton">
            {options.map((option, index) => (
              <li key={`option-${index}`}>
                <button
                  onClick={(e) => {
                    e.preventDefault(); // Mencegah event bubbling
                    handleClick(option)}}
                  className={`block w-full text-left px-4 py-1.5 ${
                    value === option ? "bg-gray-200 text-black font-medium" : "hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
        )}
      </div>
    );
  }
