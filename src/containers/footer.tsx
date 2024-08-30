import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Youtube, Facebook, Twitter, Instagram, Send } from "lucide-react";
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-slate-400 py-[60px]">
        <div>
          <h1 className="text-center text-[100px] font-serif text-white">
            Scheduling Is Easy
          </h1>
          <p className="text-center text-[30px] text-white">
            <a className="text-cyan-950" href="tel:888-396-5195">
              Call now
            </a>{" "}
            to check availability and to request a free estimate
          </p>
          <span className="text-center text-[100px] text-yellow-500 block">
            888-396-5195
          </span>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="block w-full h-[1px] bg-white"></li>
            <li className="uppercase text-white text-[30px] font-bold">or</li>
            <li className="block w-full h-[1px] bg-white"></li>
          </ul>
        </div>
        <form action="" className="mt-[40px]">
          <span className="text-[30px] text-white text-center block mb-[30px]">Use the quick form below to leave your details and we will call you back in a few minutes</span>
          <div className="grid grid-rows-1 grid-cols-3 container gap-[20px]">
            <div>
              <Input  className="mb-[10px]" type="email" placeholder="Email" />
              <Input type="email" placeholder="Full Name" />
            </div>
            <div>
              <Input className="mb-[10px]" type="email" placeholder="Zip code" />
              <Input type="email" placeholder="Phone" />
            </div>
            <div>
              <Textarea placeholder="Type your message here." />
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
          <Button size="xl">Send</Button>
          </div>
        </form>
      </div>
      <div className="bg-slate-900 py-[60px] flex justify-center ">
        <div className="flex flex-col items-center">
            <ul className="flex items-center gap-2 justify-center">
                <li><a href="#"><Youtube color="#fff" width={30} height={30}/></a></li>
                <li><a href="#"><Facebook  color="#fff" width={30} height={30}/></a></li>
                <li><a href="#"><Twitter  color="#fff" width={30} height={30}/></a></li>
                <li><a href="#"><Instagram  color="#fff" width={30} height={30}/></a></li>
                <li><a href="#"><Send  color="#fff" width={30} height={30}/></a></li>
            </ul>
            <span className="text-white text-[24px] block my-4">Call us for a cost estimate over the phone</span>
            <a href="tel:11111" className="text-slate-500 text-[100px]">888-396-5195</a>
            <span className="text-slate-200 text-sm">Copyrights © 2003-2024 | All Rights Reserved | USACleanMaster.Com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
