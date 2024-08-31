import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { RadioGroup } from "@radix-ui/react-radio-group";
import Logo from '../assets/image-removebg-preview.png'
import * as React from "react";

const Career = () => {
  return (
    <>
      <div className="bg-slate-500 pt-[150px] pb-[70px]">
        <div className="container max-w-[95%] flex items-center justify-between">
          <div>
            <h1 className="text-[141px] leading-[127px] font-[800] text-slate-400">
              Work Smarter, <br /> Not Harder.
            </h1>
            <p className="text-[45px] leading-[50px] text-slate-800 font-[400]">
              JOIN THE <span className="font-[700]">USA CLEAN MASTER</span> TEAM{" "}
              <br /> AND BOOST YOUR INCOME!
            </p>
            <p className="text-[23px] leading-[28px] text-slate-300">
              Looking to hire! Professional carpet cleaning technicians to work
              in their local areas.
            </p>
          </div>
          <div>
            <iframe
              className="rounded-[20px]"
              width="639"
              height="359"
              src="https://www.youtube.com/embed/OlStmta0Vh4"
              title="The Weeknd - I Was Never There feat. Gesaffelstein (Official Audio)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container py-[70px]">
        <div>
          <h1 className="text-[48px] leading-[63px] font-semibold text-[#192635]">
            SOUNDS INTERESTING? LET'S TALK!
          </h1>
          <p className="text-[16px] leading-[19px] pb-10">
            Fill out our details below and our human resources team will get
            right back to you.
          </p>

          <div className="flex justify-between">
            <div className="w-[48%]">
            <form action="">
              <div className="flex items-center mb-5">
                <span className="text-4 leading-6 text-[#143f6c] font-bold block w-[450px]">Do you own a van? </span>
                <RadioGroup defaultValue="comfortable" className="flex items-center gap-x-[20px]">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center mb-5">
                <span className="text-4 leading-6 text-[#143f6c] font-bold block w-[450px]">Do you have a valid driver's license?  </span>
                <RadioGroup defaultValue="comfortable" className="flex items-center gap-x-[20px]">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center mb-5">
                <span className="text-4 leading-6 text-[#143f6c] font-bold block w-[450px]">Do you have your own professional grade equipment?  </span>
                <RadioGroup defaultValue="comfortable" className="flex items-center gap-x-[20px]">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center mb-5">
                <span className="text-4 leading-6 text-[#143f6c] font-bold block w-[450px]">How many years of professional experience do you have? </span>
                <RadioGroup defaultValue="comfortable" className="flex items-center gap-x-[20px]">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center mb-5">
                <span className="text-4 leading-6 text-[#143f6c] font-bold block w-[450px]">Are you interested in full/part-time? </span>
                <RadioGroup defaultValue="comfortable" className="flex items-center gap-x-[20px]">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex gap-[10px] mb-5">
                <Input placeholder="Full Name" type="text"/>
                <Input placeholder="Email" type="text"/>
                <Input placeholder="Mobile Phone" type="text"/>
                <Input placeholder="Zip Code" type="text"/>
              </div>
              <Button size="lg">Submit</Button>
            </form>
            </div>

            <div className="w-[35%]">
                <img src="https://www.usacleanmaster.com/images/kevinProfilePic.png" alt="" />
                <span className="text-4 text-[17px] text-slate-500 italic font-medium">Employee review:</span>
                <p className="text-[15px] leading-[18px] text-blue-400 py-3">"You're never alone on the job, you have the support of an entire team with you, supporting all the way. There is customer support who encourages and helps all the way. It's just great to be a part of a working system."</p>
                <span className="text-slate-400 block italic pl-4">Kevin Azucena</span>
                <span className="text-slate-400 block">- USA Clean Master Carpet Technician, Washington DC, 2021</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className=" py-[70px] bg-slate-900">
        <div className="container flex justify-between items-center">
            <div className="w-[47%]">
                <h1 className="text-[62px] leading-[68px] text-[#7e96ae] font-bold">LOOKING TO HIRE!</h1>
                <h2 className="text-[31px] text-[#7e96a6] leading-[34px] font-medium mb-10">Professional Carpet Cleaning Technician</h2>
                <p className="text-[18px] text-white leading-[27px] font-semibold mb-[30px]">If you feel all the back-office work like: 
                 <span className="text-[#7e96a6]">marketing, finance, appointment scheduling, sales, and customer service...</span> is taking too much of your time & money - this is the right place for you! We take care of everything - all you must do is what you do best - provide an excellent cleaning service!</p>
                <p className="text-[16px] text-white font-medium leading-[17px]">USA Clean Master is a nationwide home service provider, with two decades in the carpet cleaning industry and thousands of satisfied customers. Since 2003, we have expanded our service portfolio to offer many home services including; carpet, upholstery, area rug cleaning, tile & grout, wood floors, air duct cleaning, water and fire damage restoration services and mold remediation.
<br /><br />
USA Clean Master is looking for Professional Carpet Cleaning Technicians to work in their local area, providing our services. We are seeking highly motivated individuals to join our team, provide our services and grow with our company.</p>
                <ul className="mt-3 mb-5">
                    <span className=" block pl-2 pb-3 text-[18px] text-[#7e96ae] leading-[19px]">Requirements:</span>
                    <li className="text-[16px] text-white leading-[17px] list-disc mb-1 ml-5">2 years of experience with carpet and upholstery cleaning</li>
                    <li className="text-[16px] text-white leading-[17px] list-disc mb-1 ml-5">High level of service, honest, reliable with common sense</li>
                    <li className="text-[16px] text-white leading-[17px] list-disc mb-1 ml-5">Own van and professional equipment</li>
                    <li className="text-[16px] text-white leading-[17px] list-disc mb-1 ml-5">Valid driver's license and clean driving record required</li>
                    <li className="text-[16px] text-white leading-[17px] list-disc mb-1 ml-5">Availability for (at least) 10 jobs a week - part-time or full-time</li>
                </ul>
                <Button type="button" variant="secondary" size="lg">Back to Quick Application Form</Button>
            </div>
            <div className="w-47%">
                <img src={Logo} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Career;
