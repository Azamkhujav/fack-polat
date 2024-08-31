import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Logo from '../assets/logo.png'
import { Instagram, Smartphone, Twitter, Youtube } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white  fixed  z-[100] w-full  border-b border-dotted border-slate-600">
      <header className="container flex items-center justify-between py-2">
      <div>LOGO</div>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Our company</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                About
              </MenubarItem>
              <MenubarItem>Commerical</MenubarItem>
              <MenubarItem>Common Questions</MenubarItem>
              <MenubarItem>Memebers</MenubarItem>
              <MenubarItem>Carrers</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Our company</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Our company</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Our company</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-lg flex items-center gap-1"><Smartphone /> +998971460322</span>
        <ul className="flex items-center gap-2">
            <li><Youtube /></li>
            <li><Instagram/></li>
            <li><Twitter/></li>
        </ul>
      </div>
    </header>
    </div>
  );
};

export default Header;
