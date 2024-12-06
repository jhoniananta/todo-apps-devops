import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import Button from "./Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import DropdownMenu from "./DropDownInput";
import axios from "axios";

type DrawerDialogDemoProps = {
  isDesktop: boolean;
  open: boolean;
  onClose: () => void;
  handleFilter: (categoryChosen: string, priorityChosen: string) => void;
};

export function DrawerDialogDemo({
  isDesktop,
  open,
  onClose,
  handleFilter,
}: DrawerDialogDemoProps) {
  return isDesktop ? (
    // Desktop version
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Filter</DialogTitle>
        </DialogHeader>
        <FilterForm
          handleFilter={(categoryChosen: string, priorityChosen: string) =>
            handleFilter(categoryChosen, priorityChosen)
          }
        />
      </DialogContent>
    </Dialog>
  ) : (
    // Mobile version
    <Drawer open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DrawerContent className="flex flex-col">
        <DrawerHeader className="text-left flex-shrink-0">
          <DrawerTitle className="text-xl font-bold">Filter</DrawerTitle>
        </DrawerHeader>
        <div className="flex-grow px-4">
          <FilterForm
            handleFilter={(categoryChosen: string, priorityChosen: string) =>
              handleFilter(categoryChosen, priorityChosen)
            }
          />
        </div>
        <DrawerFooter className="pt-2 flex-shrink-0">
          <DrawerClose asChild>
            <Button className="rounded-xl">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

type FilterFormProps = {
  className?: string;
  handleFilter: (categoryChosen: string, priorityChosen: string) => void;
};

function FilterForm({ className, handleFilter }: FilterFormProps) {
  const [priority, setPriority] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [categoryChosen, setCategoryChosen] = useState<string>("");
  const [priorityChosen, setPriorityChosen] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/todo/categories")
      .then((res) => {
        const categoryNames: string[] = res.data[0].map(
          (item: { id: number; name: string }) => {
            return item.name;
          }
        );
        setCategory(categoryNames);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:5000/api/todo/priorities")
      .then((res) => {
        const priorityNames: string[] = res.data[0].map(
          (item: { id: number; name: string }) => {
            return item.name;
          }
        );
        setPriority(priorityNames);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleClick = () => {
    handleFilter(categoryChosen, priorityChosen);
  };

  return (
    <div className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <div>
          {/* Categories */}
          <label
            htmlFor="categories-input"
            className="m-0 text-black font-bold block mb-1 text-l"
          >
            Categories
          </label>
          <DropdownMenu
            placeholder="Choose Categoty"
            options={category}
            handleChange={(selectedOption) => setCategoryChosen(selectedOption)}
          />
        </div>
        <div>
          {/* Priority */}
          <label
            htmlFor="priority-input"
            className="m-0 text-black font-bold block mb-1 text-l mt-2"
          >
            Priority
          </label>
          <DropdownMenu
            placeholder="Choose Priority"
            options={priority}
            handleChange={(selectedOption) => setPriorityChosen(selectedOption)}
          />
        </div>
      </div>
      <Button
        className="mt-4 rounded-xl"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        Apply
      </Button>
    </div>
  );
}
