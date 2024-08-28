import { Button } from "@/components/ui/button";
import Banner from "@/containers/banner";
import React from "react";
import { service, moreService } from "@/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
const Home = () => {
    const [active, setActive] = React.useState(false)
    const handelActive = () => setActive(!active)
  return (
    <div>
      <Banner />
      <div className=" bg-slate-500 bg-opacity-70 mt-[-111px] relative">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-center">
            <h3 className="text-white">
              Call us for a{" "}
              <span className="text-[#ffba1a]">cost estimate</span> over the
              phone
            </h3>
            <a
              href="tel:+998971460211"
              className="text-[50px] leading-[55px] text-white"
            >
              +998971460211
            </a>
          </div>
          <Button
            variant="outline"
            className="text-[25px] px-10 py-8 uppercase bg-black text-white"
            size="lg"
          >
            Order Service{" "}
            <span className="inline-block pl-2 text-[#ffba1a]">Now</span>
          </Button>
        </div>
      </div>

      <div className="my-[100px] container">
        <h1 className="text-center text-[60px] leading-[65px] text-slate-500">
          SERVICES TO MAINTAIN A CLEAN & HEALTHY HOME OR BUSINESS
        </h1>
        <div className="grid grid-cols-5 grid-rows-2 mt-[100px] gap-4">
          {service.map((el) => {
            return (
              <Card
                key={el.title}
                className="hover:scale-105 transition-all hover:shadow-lg cursor-pointer"
              >
                <CardHeader className="pb-2 flex flex-col items-center">
                  <CardTitle className="text-center text-[#ffba1a] w-[50px] h-[50px]">
                    {el.icon}
                  </CardTitle>
                  <CardDescription className="text-center text-[22px] text-balck ">
                    {el.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-[15px] text-slate-500">
                  {el.text}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-[70px]">
          <div className="flex items-center justify-between gap-2">
            <div className="w-1/2 h-[1px] bg-slate-950" />
            <Button variant="ghost" className="flex gap-2" onClick={handelActive}>{active ? "Show less":"Show more"}
                <ArrowDown width={17} height={17} className={active ? "rotate-180" : "rotate-0"}/>
            </Button>
            <div className="w-1/2 h-[1px] bg-slate-950" />
          </div>
          <div className={!active ? "mt-0 h-0 overflow-hidden transition-all" : "mt-5 h-[144px] transition-all"}>
            <ul className="grid grid-cols-3 grid-rows-4 gap-2">
                {moreService.map(el =>{
                    return <li className="flex items-center gap-2">
                        <div className="w-[30px] h-[30px] text-[#ffba1a]">{el.icon}</div>
                        {el.title}
                    </li>
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
