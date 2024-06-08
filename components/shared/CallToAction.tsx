import { CallToActionProps } from "@/types";
import Link from "next/link";

const CallToAction = ({ text, href, background, textColor }: CallToActionProps) => {
  return (
    <Link
      href={href}
      className={`z-10 flex h-[56px] w-[152px] items-center justify-center rounded-lg ${background} ${textColor} text-center text-[15px] font-medium uppercase tracking-[1px] transition-colors duration-200 hover:bg-light-peach hover:text-white max-[1192px]:mx-auto max-sm:text-sm`}
    >
      {text}
    </Link>
  );
};

export default CallToAction;
