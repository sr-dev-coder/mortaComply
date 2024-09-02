import React from "react";
import { Logo } from "../Logo";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 container">
      <div className="mx-auto">
        <div className="py-7 px-12 rounded-[22px] flex justify-between items-center">
          <Logo />
          <NavigationMenu>
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem className="text-sm font-medium text-green uppercase">
                <Link href="#">Home</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-sm font-medium text-white uppercase">
                <Link href="#">About Us</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="text-sm font-medium text-white uppercase">
                <Link href="#">Careers</Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="bg-green text-black text-sm uppercase font-bold py-3 rounded-[15px] px-5 border-solid border-[2px] border-transparent hover:border-green hover:bg-transparent hover:text-green transition-all cursor-pointer ">
                <Link href="#">Book a Call</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};
