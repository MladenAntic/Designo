import Image from "next/image";
import Wrapper from "./Wrapper";
import { navLinks } from "@/constants";
import NavLink from "./navbar/NavLink";
import ToggleMenu from "./navbar/ToggleMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative z-[100] bg-white py-16">
      <Wrapper className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" width={196} height={24} alt="Designo Logo" />
        </Link>

        <ul className="flex items-center gap-[42px] max-lg:gap-7 max-md:hidden">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </ul>

        <ToggleMenu />
      </Wrapper>
    </nav>
  );
};

export default Navbar;
