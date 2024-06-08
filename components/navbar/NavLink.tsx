import { cn } from "@/lib/utils";
import { NavLinkProps } from "@/types";
import Link from "next/link";

const NavLink = ({ href, label, className, footer }: NavLinkProps) => (
  <li className="relative">
    <Link
      href={href}
      className={cn(
        `nav-link text-[14px] uppercase leading-[14px] tracking-[2px] ${footer && "max-sm:text-[8px]"}`,
        className
      )}
    >
      {label}
    </Link>
  </li>
);

export default NavLink;
