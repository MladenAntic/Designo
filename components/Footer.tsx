import Image from "next/image";
import Wrapper from "./Wrapper";
import NavLink from "./navbar/NavLink";
import { navLinks, socialLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pb-14">
      <Wrapper>
        <div className="flex items-center justify-between border-b border-darkgray pb-8 pt-36 max-md:flex-col max-md:gap-8">
          <Image
            src="/logo.png"
            width={196}
            height={24}
            alt="Designo Logo"
            className="invert"
          />

          <ul className="flex items-center gap-[42px] text-white max-lg:gap-7">
            {navLinks.map((link, index) => (
              <NavLink key={index} {...link} footer={true} />
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-end justify-between max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-5">
          <div className="max-md:text-center">
            <h5 className="text-base font-bold leading-[26px] text-lightgray max-lg:text-sm">
              Designo Central Office
            </h5>
            <p className="text-lightgray max-lg:text-sm">
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </p>
          </div>

          <div className="max-md:text-center">
            <h5 className="text-base font-bold leading-[26px] text-lightgray max-lg:text-sm">
              Contact Us (Central Office)
            </h5>
            <p className="text-base font-bold leading-[26px] text-lightgray max-lg:text-sm">
              P: +1 253-863-8967
            </p>
            <p className="text-base font-bold leading-[26px] text-lightgray max-lg:text-sm">
              M: contact@designo.co
            </p>
          </div>

          <div className="flex items-center gap-5 max-lg:gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group"
                target="_blank"
              >
                <link.Icon className="text-3xl text-light-peach transition-colors duration-200 group-hover:text-peach max-lg:text-xl" />
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
