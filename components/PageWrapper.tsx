"use client";

import { ToggleMenuProvider } from "@/contexts/ToggleMenuContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ToggleMenuProvider>
        <Navbar />
        {children}
        <Footer />
      </ToggleMenuProvider>
    </div>
  );
};
