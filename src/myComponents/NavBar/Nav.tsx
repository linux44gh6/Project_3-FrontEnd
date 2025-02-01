import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import img from "@/assets/school-logo-design-featuring-pencils-books-develop-minimalist-logo-school-supply-retailer-minimalist-simple-modern-vector-logo-design_538213-49653-removebg-preview.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { components } from "@/myComponents/NavComponents/Components";

import React from "react";
import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
const Nav = () => {
  return (
   <div className="border-b-2 border-gray-200 shadow-sm sticky top-0 z-50 bg-white">
    <div className="flex justify-around items-center">
    <div>
      <img className='w-24' src={img} alt="" />
      </div>
      <div className="w-9/12">
       <Input  placeholder="Search" />
      </div>
      <div className=" flex justify-between items-center space-x-4">
      <IoPersonOutline size={34} />
      <AiOutlineShoppingCart size={34} />
    </div>
    </div>
     <div className=" flex justify-center items-center">
     
     
  <div>
  <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="font-semibold text-lg">Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <NavLink className={'font-semibold'} key={component.href} to={component.href}>{component.title}</NavLink>
              ))}
            </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
   
    <NavigationMenuItem>
            <NavLink className={'font-semibold'} to={'/about'}>About</NavLink>
    </NavigationMenuItem>
   
  </NavigationMenuList>
</NavigationMenu>
  </div>
    </div>
   </div>
  );
};

export default Nav;