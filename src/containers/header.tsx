import React, { useEffect, useState } from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Instagram, Smartphone, Twitter, Youtube } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './main.scss'
const Header = () => {
  const location = useLocation()
  useEffect(() =>{
    window.scrollTo(0,0)
  },[location.pathname])
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
  const navigate = useNavigate()
  return (
    <div className="bg-white header  fixed z-10 w-full">
      <header className="container flex items-center justify-between py-2">
        <div>Logo imagae</div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Our company</MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="cursor-pointer" onClick={() => navigate('/about')}>
                  About
                </MenubarItem>
                <MenubarItem className="cursor-pointer" onClick={() => navigate('/commerical')}>Commerical</MenubarItem>
                <MenubarItem className="cursor-pointer" onClick={() => navigate('/questions')}>Common Questions</MenubarItem>
                <MenubarItem className="cursor-pointer" onClick={() => navigate('/members')}>Memebers</MenubarItem>
                <MenubarItem className="cursor-pointer" onClick={() => navigate('/career')}>Careers</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Our service</MenubarTrigger>
              <MenubarContent>
                {
                  data?.map((item, key) => (
                    <MenubarItem onClick={() => navigate(`/service/${item.id}`)} className="cursor-pointer" style={{
                      marginLeft: "0"
                    }} key={key}>
                      {item.title}
                    </MenubarItem>
                  ))
                }

              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Resources</MenubarTrigger>
              <MenubarContent>
                <MenubarItem className="cursor-pointer">
                  <Link to="/resource">resource</Link>
                </MenubarItem>

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
