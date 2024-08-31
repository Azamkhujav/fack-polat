import * as React from "react";
import Image1 from "../assets/image1.png";
import DogGirl from "@/components/donAndGirl";

const About = () => {
  return (
    <div>
      <div className="container max-w-[1200px]">
        <div className="flex justify-center pt-[100px] mb-10">
          <img src={Image1} alt="" />
        </div>
        <div className="">
          <h1 className="text-center text-[60px] text-slate-600">
            About USA Clean Master
          </h1>
          <p className="text-center text-[24px] text-slate-900">
            Customer Satisfaction Is The Foundation Of Any Successful Business
          </p>
          <div className="flex flex-wrap justify-between mt-[80px]">
            <div className="w-[47%] mb-5">
              <h2 className="text-[26px] text-[#35a5ff] mb-3 ">About Us</h2>
              <p className="text-4 text-slate-600 font-sans">
                With over 15 years of experience in the cleaning industry our
                reputation has grown and grown.
              </p>
              <br />
              <p className="text-4 text-slate-600 font-sans">
                And we owe it all to you, our clients. Over the years we served
                ten's of thousands of happy, satisfied clients. How do we do it?
                Simple, we value each and every client. We never give up on any
                stain and we train only the best personnel.
              </p>
            </div>
            <div className="w-[47%] mb-5">
              <h2 className="text-[26px] text-[#35a5ff] mb-3 ">
                The Best Offer You Can Get
              </h2>
              <p className="text-4 text-slate-600 font-sans">
                At our USA Clean Master company we take notice not only to the
                job at hand but also pay special attention for fair, reasonable
                pricing. If you were quoted by one of our competitors and want a
                better offer just pick up the phone and call our office at
                888-396-5195.
              </p>
            </div>
            <div className="w-[47%] mb-5">
              <h2 className="text-[26px] text-[#35a5ff] mb-3 ">
                About the expertise and experience of our specialists
              </h2>
              <p className="text-4 text-slate-600 font-sans">
                The easiest way to ensure the level of professionalism and
                experience of our experts, the easiest way is to see reviews
                from our clients or use our services. You can also gain a lot of
                useful information by reading our USA Clean Master's blog where
                our certified experts regularly share knowledge, talk about the
                intricacies and invisible sides of cleaning, and also explain
                things useful for the homeowner. Or visit the Knowledge base for
                more detailed information such as carpet care tips and tricks,
                methods, Guides, FAQs and many more!
              </p>
            </div>
            <div className="w-[47%] mb-5">
              <h2 className="text-[26px] text-[#35a5ff] mb-3 ">
                Green Cleaning Only - Your Biggest Benefit
              </h2>
              <p className="text-4 text-slate-600 font-sans">
                We have a mutual benefit agreement with several green cleaning
                products manufactures in the US to use only their products which
                we designed together. Our strict guidelines as to the quality of
                our cleaning substances has been legendary. When our technicians
                finish the your cleaning session, you will be amazed just how
                clean a house can get without using harmful products. By
                maintaining our Green policy your family can breath easier and
                enjoy a safer environment.
              </p>
              <br />
              <p className="text-4 text-slate-600 font-sans">
                We provide superior residential and commercial cleaning and
                restoration services. Visit Our Services page to learn more.
              </p>
            </div>

            <div className="w-[47%] mb-5">
              <h2 className="text-[26px] text-[#35a5ff] mb-3 ">
                Truck Mounted High Tech Gear*
              </h2>
              <p className="text-4 text-slate-600 font-sans">
                By using only the most advanced high teach cleaning trucks we
                are able to accomplish two goals: First, the cleaning times are
                much shorter and we can price them at a cheaper price. Second,
                our process is much more thorough and comprehensive. We clean
                better and faster thanks to our machinery.
              </p>
              <p className="text-4 text-slate-600 font-sans">
                *(subject to availability - not available in certain areas)
              </p>
            </div>

            <div className="w-[47%] mb-5">
              <h2 className="text-[26px] text-[#35a5ff] mb-3 ">
                Qualified Cleaning Technicians
              </h2>
              <p className="text-4 text-slate-600 font-sans">
                We train our technicians at our national headquarters, there we
                do a full background check to make sure we get only the most
                honest personnel.
              </p>
              <br />
              <p className="text-4 text-slate-600 font-sans">
                We have a two months long training course, where our workers
                learn how to clean any surface and how to treat clients the USA
                Clean Master way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DogGirl />
    </div>
  );
};

export default About;
