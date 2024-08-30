import React, { useEffect, useState } from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import parse from 'html-react-parser';
import { Instagram, Smartphone, Twitter, Youtube } from 'lucide-react';
import { log } from 'console';
import { Link } from 'react-router-dom';

import './main.scss'
const Header = () => {

  const [data, setData] = useState(null);
  const url = "http://185.105.90.191:83/service/"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.log(err);

      } finally {
        console.log("hi");

      }
    };

    fetchData();
  }, [url]);

  return (
    <div className="bg-white header  fixed z-10 w-full">
      <header className="container flex items-center justify-between py-2">
        <div>Logo imagae</div>
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
                <MenubarItem>CArrers</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Our service</MenubarTrigger>
              <MenubarContent>
                {
                  data?.map((item, key) => (
                    <MenubarItem style={{
                      marginLeft: "0"
                    }} key={key}>
                      <MenubarShortcut>
                        <Link to={`/service/${item.id}`}>
                          {item.title}
                        </Link>
                      </MenubarShortcut>
                    </MenubarItem>
                  ))
                }

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
            <li><Instagram /></li>
            <li><Twitter /></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
