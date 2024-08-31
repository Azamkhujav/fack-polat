import React from "react";
import { UserPen } from "lucide-react";
import Image from "../assets/i.jpg";
import DogGirl from "@/components/donAndGirl";
const Resource = () => {
  return (
    <div>
      <div className="container pt-[110px]">
        <div className="flex justify-center items-center flex-col">
          <UserPen width={100} height={100} color="#3598FF" />
          <h1 className="text-slate-400 text-[60px]  font-mono">Glossary</h1>
          <p className="text-[22px] text-slate-950 mb-6">
            Useful Terms from the Professional Carpet, Rug, & Upholstery
            Cleaning Industry
          </p>
          <p className="text-slate-500 text-md">
            At USA Clean Master, we believe in the power of knowledge to elevate
            your understanding of the cleaning services we provide. Our
            Glossaries are a comprehensive resource designed to familiarize you
            with the terminology associated with our offerings, including carpet
            cleaning, rug maintenance, upholstery care, and more.
            <br />
            <br />
            Our glossary provides insights into the techniques and solutions
            that make USA Clean Master a trusted name in the industry. We invite
            you to explore, learn, and enhance your understanding of the
            terminology that defines the excellence of USA Clean Master's
            cleaning services.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-[60px] mt-[40px] mb-[100px]">
          <div>
            <h1 className="text-[#3598ff] text-[24px] mb-2">
              Carpet Cleaning Terms & Definitions Glossary
            </h1>
            <p className="text-slate-500 text-md">
              Let's unravel the terminology of carpet care and elevate our
              understanding of this essential aspect of home maintenance...
            </p>
          </div>
          <div>
            <h1 className="text-[#3598ff] text-[24px] mb-2">
              Upholstery Cleaning Terms & Definitions
            </h1>
            <p className="text-slate-500 text-md">
              This Upholstery Cleaning Glossary is designed to be your compass,
              providing clear and concise definitions for the diverse vocabulary
              associated with the art and science of upholstery care...
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[50px] text-slate-400 text-center font-sans">
            EVERYTHING YOU NEED FOR GOOD & CLEAN RESULTS
          </h1>
        </div>
      </div>
      <DogGirl/>
    </div>
  );
};

export default Resource;
