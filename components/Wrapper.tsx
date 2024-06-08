import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={cn("max-w-7xl mx-auto w-[80%]", className)}>{children}</div>;
};

export default Wrapper;
