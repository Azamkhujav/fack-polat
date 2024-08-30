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
import { ArrowDown, Check } from "lucide-react";
import Footer from "@/containers/footer";
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

      <div className="py-11 bg-[#F3F5F8]">
      <div className="container">
        <h2 className="text-center text-4xl mb-4">ABOUT US</h2>
        <p className="text-2xl text-center mb-5 text-slate-900">USA Clean Master offers professional cleaning services for homes and commercial properties. Since 2003, we have expanded our service portfolio to offer many home services, including carpet cleaning, upholstery cleaning, area rug cleaning, tile & grout, wood floors, air duct cleaning, fire and water damage restoration services, mold remediation in houses, schools, offices and other commercial buildings.</p>
        <p className="text-sm text-center">Our benefits are a combination of nationwide team of professional technicians with the care and customer service you'd expect from a local provider. Our customers receive service from experienced and knowledgeable technicians utilizing the best techniques in the industry and using the right equipment. With the convenience of scheduling seven days a week, you're sure to find a good time for your cleaning appointment with USA Clean Master - a cleaning provider you can trust.</p>
        <div className="grid grid-cols-2 grid-rows-1 mt-24">
          <img src="https://images.pexels.com/photos/3796556/pexels-photo-3796556.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div>
            <h2 className="text-[80px] leading-[80px] text-slate-800 font-serif mb-4">A COMPANY YOU CAN TRUST
            </h2>
            <ul>
              <li className="text-lg font-sans text-slate-600 flex mb-1 gap-2 items-center"><Check color="#143f6c" /> One stop for all your cleaning, maintenance & restoration needs
              </li>
              <li className="text-lg font-sans text-slate-600 flex mb-1 gap-2 items-center"><Check color="#143f6c" /> Free on site price estimate
              </li>
              <li className="text-lg font-sans text-slate-600 flex mb-1 gap-2 items-center"><Check color="#143f6c" /> Eco Friendly cleaning alternative
              </li>
              <li className="text-lg font-sans text-slate-600 flex mb-1 gap-2 items-center"><Check color="#143f6c" /> Qualified Cleaning Technicians
              </li>
              <li className="text-lg font-sans text-slate-600 flex mb-1 gap-2 items-center"><Check color="#143f6c" /> We are dedicated to the complete
              & total satisfaction of our customers</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
