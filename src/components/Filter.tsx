import React from "react";
import { cn } from "../lib/utils";
import Button from "./Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "./ui/drawer";
import { Input } from "./InputRightIcon";
import DropdownMenu from "./DropDownInput";

type DrawerDialogDemoProps = {
  isDesktop: boolean;
  open: boolean;
  onClose: () => void;
};

export function DrawerDialogDemo({ isDesktop, open, onClose }: DrawerDialogDemoProps) {
  return isDesktop ? (
    // Desktop version
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Filter</DialogTitle>
        </DialogHeader>
        <FilterForm/>
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
          <FilterForm/>
        </div>
        <DrawerFooter className ="pt-2 flex-shrink-0">
          <DrawerClose asChild>
            <Button>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function FilterForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <div>
          {/* Categories */}
          <label htmlFor="categories-input" className="m-0 text-black font-bold block mb-1 text-l">
            Categories
          </label>
          <Input id="categories-input" type="text" placeholder="Choose a category" className="w-full" />
        </div>
        <div>
          {/* Priority */}
          <label htmlFor="priority-input" className="m-0 text-black font-bold block mb-1 text-l mt-2">
            Priority
          </label>
          <DropdownMenu 
            placeholder="Choose Priority" 
            options={["Low", "Medium", "High"]} 
          />
        </div>
      </div>
      <Button className="mt-4" type="submit">
        Apply
      </Button>
    </form>
  );
}