"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "@/constants";
import NavLink from "./NavLink";
import { useToggleMenu } from "@/contexts/ToggleMenuContext";

const ToggleMenu = () => {
  const { isOpen, setIsOpen } = useToggleMenu();

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose size={24} className="cursor-pointer" />
        </button>
      ) : (
        <button
          type="button"
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <RxHamburgerMenu size={24} />
        </button>
      )}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          className="top-[152px] bg-black md:hidden"
          side="top"
        >
          <ul className="flex flex-col gap-8 px-5 py-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                {...link}
                className="text-2xl leading-[25px] text-white transition-colors duration-200 hover:text-light-peach"
              />
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ToggleMenu;
