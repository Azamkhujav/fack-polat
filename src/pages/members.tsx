import DogGirl from "@/components/donAndGirl";
import { CheckCircle, CircleAlert, Sun } from "lucide-react";
import React from "react";
import Join from "../assets/join.png";
import Cleaner from '../assets/cleaner.png'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Members = () => {
  return (
    <div>
      <div className="container pt-[160px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[60px] leading-[65px] text-slate-600">
            IT'S BETTER TO BE A MEMBER
          </h1>
          <p className="text-[22px] leading-[25px] text-slate-900">
            TAKE ADVANTAGE OF DISCOUNTS AND OTHER BENEFITS OF MEMBERSHIP
          </p>
          <div className="my-8">
            <Sun color="#143f6c" width={40} height={40} />
          </div>
          <p className="text-[16px] leading-[22px] text-slate-950 text-center">
            USA Clean Master membership includes all our cleaning services and
            helps you to <br /> maintain your home or business at low cost, all
            under one roof.
          </p>
        </div>

        <div className="mt-10 flex justify-between">
          <div className="w-[48%]">
            <div>
              <h2 className="text-[24px] leading-[26px] pl-2 text-[#3598ff] mb-2">
                WHY BECOME A MEMBER
              </h2>
              <div className="flex items-center gap-2">
                <CheckCircle width={20} height={20} color="#6bac00" />
                <span className="text-[22px] leading-[22px] text-[#6bac00]">
                  Save Money -
                </span>
              </div>
              <div className="pl-3">
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + maintain your home or business at significantly lower cost.
                </span>
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + Instant $10 off your first order as a member!
                </span>
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + 10% discount off all subsequent orders (no limits or
                  excluded services)
                </span>
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + Personalized deals, package & member-only offers.
                </span>
              </div>

              <div className="flex items-center gap-2 mt-10">
                <CheckCircle width={20} height={20} color="#6bac00" />
                <span className="text-[22px] leading-[22px] text-[#6bac00]">
                  Save Time -
                </span>
              </div>
              <div className="pl-3">
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + No need to scan for different companies for each cleaning
                  issue - all under one roof.
                </span>
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + Hassle-free reminder when it's time to schedule your next
                  service visit.
                </span>
              </div>

              <div className="flex items-center gap-2 mt-10">
                <CheckCircle width={20} height={20} color="#6bac00" />
                <span className="text-[22px] leading-[22px] text-[#6bac00]">
                  Peace of Mind -
                </span>
              </div>
              <div className="pl-3">
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + You don’t have to compromise on the quality of the service
                  just to save on your cleaning expenses.
                </span>
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + Certified through NADCA and IICRC
                </span>
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + Safe, non-toxic natural cleaning products available upon
                  request
                </span>
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + We have 5 star reviews on Google & Yelp
                </span>
                <span className="block text-4 text-[16px] text-[#143f6c]">
                  + 100% Satisfaction Guarantee on every job we do
                </span>
              </div>
            </div>
            <img src={Cleaner} alt="" />
          </div>

          <div className="48%">
            <div className="flex justify-center mb-4">
            <img src={Join} width={402} height={105} alt="" />
            </div>
            <form action="" className="w-[570px]">
              <div className="grid grid-cols-2 grid-rows-2 gap-5">
                <Input type="email" placeholder="Email" />
                <Input type="email" placeholder="Full Name" />
                <Input type="email" placeholder="Phone" />
                <Input type="email" placeholder="Zip Code" />
              </div>
              <div className="mt-5">
                <Textarea placeholder="comment / service" />
              </div>
              <div className="flex justify-center mt-5">
                <Button size="xl" className="uppercase">become a member</Button>
              </div>
            </form>
            <p className="flex items-center gap-1 italic leading-4 text-[12px] mt-5">
              <div>
                <CircleAlert color="blue" width={15} height={15} />
              </div>
              Your information is never sold or shared. <br />
              It is used for the sole purpose of contacting you.
            </p>

            <ul className="mt-10">
            <span className="text-6 text-[26px] text-[#3598ff] pb-3 block">Membership Program Restriction</span>
                <li className="text-[14px] leading-[17px] text-slate-800 ml-6 list-disc"><span className="text-red-600 font-semibold">10%</span> discount applies from second order onward.</li>
                <li className="text-[14px] leading-[17px] text-slate-800 ml-6 list-disc">$89 Minimum order required to apply any member discount.</li>
                <li className="text-[14px] leading-[17px] text-slate-800 ml-6 list-disc">$10 Instant discount for new members on the first order only.</li>
                <li className="text-[14px] leading-[17px] text-slate-800 ml-6 list-disc">The membership benefit can't be transferred to any third party.</li>
                <li className="text-[14px] leading-[17px] text-slate-800 ml-6 list-disc">The membership discount applies on all services offered in the member service area</li>
                <li className="text-[14px] leading-[17px] text-slate-800 ml-6 list-disc">If during one year no services are ordered, the membership will be automatically canceled.</li>
                <li className="text-[14px] leading-[17px] text-slate-800 ml-6 list-disc">Cannot be combined with any other offer.</li>
            </ul>
          </div>
        </div>
      </div>
      <DogGirl />
    </div>
  );
};

export default Members;
