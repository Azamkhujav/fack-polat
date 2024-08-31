import DogGirl from "@/components/donAndGirl";
import { BadgeCheck, Building2, Check, CircleAlert, CircleHelp } from "lucide-react";
import Image from "../assets/iamge2.png";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Commerical = () => {
  return (
    <div>
      <div className="container pt-[100px]">
        <div className="flex justify-center flex-col items-center">
          <Building2 color="#35a5ff" width={100} height={100} />
          <h1 className="text-[60px] text-slate-600 font-sans">
            Commercial Cleaning Services
          </h1>
          <p className="text-[24px] text-slate-900">
            Peace of mind for Owners and Managers Of Commercial Properties
          </p>
        </div>

        <div className="py-[30px] flex justify-center flex-col">
          <img src={Image} alt="" />
          <p className="text-[26px] text-center mt-2 text-[#35a5ff]">
            Make your business more efficient & productive by providing a
            cleaner & healthier environment. Moreover, you'll make a good
            impression on employees & visitors.
          </p>
        </div>
        <div className="mt-[70px] flex justify-between">
          <div className="w-[47%]">
            <h1 className="text-[26px] text-[#35a5ff] font-sans mb-2">
              What Will You Get?
            </h1>
            <p className="text-[16px] text-slate-600 font-sans">
              At USA Clean Master, we value our customers and their time. That's
              why we have done everything we can to offer you the best service
              and options. Here's what you'll get as a USA Clean Master client:
            </p>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" />
                Free Onsite Estimate
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                Even if we've already been at your office, we want you to be
                certain you're getting the right service at the right price.
                We'll send out a technician, free of charge, to your location to
                inspect the carpets, their size and their condition, and provide
                you with a detailed estimate.
              </p>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" />
                Transparent Pricing
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                You want to know what you are paying for. That's why we provide
                a full estimate with detailed pricing. You'll know exactly what
                you get and at what price.
              </p>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" />
                Top Industry Techniques
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                Every technician we have has been trained by USA Clean Master to
                follow top industry standards and techniques.
              </p>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" /> Tailored
                Service Packages
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                We know every business is different and has different cleaning
                needs. That is why we service you at your own terms, to meet
                your needs.
              </p>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" /> Dedicated
                Account Manager
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                You need someone that knows you and can get everything arranged
                quickly and with minimum effort.Someone on your side who does
                all the leg work for you. We have that person waiting for you.
              </p>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" />
                Dependable Company
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                With hundreds of clients, tens of thousands of carpets cleaned,
                and many years of experience, we have the capabilities and
                knowledge to do the job right for you.
              </p>
            </div>
          </div>
          <div className="w-[47%]">
            <h1 className="text-[26px] text-[#35a5ff] font-sans mb-2">
              Our Main Advantages
            </h1>
            <p className="text-[16px] text-slate-600 font-sans">
              USA Clean Master's commercial division is a part of USA Clean
              Master's nationwide chain of professional carpet cleaning
              providers. We offer carpet & upholstery cleaning services in over
              20 states across the USA, with headquarters in the DC metro area.
              Our services are aimed at both commercial and residential
              cleaning, offering a wide range of services for every need you may
              have.
            </p>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" />
                We have experience and knowledge
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                We have been in business for many years, offering our services
                to hundreds of clients over the years. We know carpets inside
                and out, and we have met every stain you can think of.
              </p>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" />
                We know how to treat commercial clients
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                We have a crew of dedicated account managers ready to help you
                with every question or inquiry you may have. You're in good
                hands.
              </p>
            </div>
            <div className="mt-[20px]">
              <h3 className="text-[#6bac00] flex items-center gap-2 text-[20px] font-semibold">
                <BadgeCheck width={20} height={20} color="#6bac00" /> You get
                the best prices
              </h3>
              <p className="pl-[28px] text-[16px] text-slate-900">
                As a business we know how every expense affects the bottom line,
                so we offer you more value for money. You get special deals,
                excellent prices and more!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[70px] h-[400px]">
            <Carousel className="w-full h-[400px]">
              <CarouselContent className="h-full">
                <CarouselItem className="relative h-full ">
                  <img
                    src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className=""
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                </CarouselItem>
                <CarouselItem className="relative h-full">
                  <img
                    src="https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className=""
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                </CarouselItem>
                <CarouselItem className="relative h-full">
                  <img
                    src="https://images.pexels.com/photos/434163/pexels-photo-434163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className=""
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                </CarouselItem>
                <CarouselItem className="relative h-full">
                  <img
                    src="https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className=""
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <h2 className="mt-[100px] text-[26px] text-slate-700 font-medium">
            Frequently Asked Questions
          </h2>
          <div className="flex justify-between flex-wrap mt-[40px]">
            <div className="w-[48%] mb-5">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-center gap-1">
                <CircleHelp color="#35a5ff" width={22} height={22} /> What
                commercial carpet cleaning methods do you use?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start gap-1">
                {" "}
                <div className="mt-1">
                  <div className="mt-1">
                    <BadgeCheck width={16} height={16} color="#6bac00" />
                  </div>
                </div>
                USA Clean Master Commercial Cleaning primarily uses hot water
                extraction on synthetic wall-to-wall carpets. The reason for
                this is it simply does the best job of cleaning and rejuvenating
                today's carpets and it is great for environmentally friendly
                cleaning. Even the major carpet manufacturers recommend hot
                water extraction as the only method that satisfies the
                maintenance conditions in their warranties. Hot Water Extraction
                uses extremely hot water to clean the carpet from top to bottom,
                and even kills dust mites. Depending on your needs and the
                condition of your carpet, carpet foam, shampoo, or dry cleaning
                may also be appropriate. All methods of carpet cleaning use
                moisture, but carpet dry cleaning uses as little as possible.
                One of the advantages of carpet dry cleaning is its ability to
                improve the carpet's appearance while also drying very quickly,
                usually within an hour or two with adequate airflow in the room.
              </p>
            </div>
            <div className="w-[48%] mb-5">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-center gap-1">
                <CircleHelp color="#35a5ff" width={22} height={22} /> How much
                will the office carpet cleaning cost?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start gap-1">
                {" "}
                <div className="mt-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Good question, with many answers. There are so many variables
                that any answer would be subject to changes. Pricing of cleaning
                a commercial carpet is especially difficult to estimate, since
                every area is very different. There are high traffic areas
                (walkways, corridors or halls), offices, conference rooms and
                other areas. The best thing to do is get an onsite estimate by a
                professional technician, who would inspect the carpet and
                understand exactly what would be required. The final price
                depends on the number of areas to be cleaned, their size, the
                amount of stains and the condition of the carpets. As a policy,
                we offer our clients the best value for money - excellent
                service standard, quality cleaning and competitive prices.
              </p>
            </div>
            <div className="w-[48%] mb-5">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-center gap-1">
                <CircleHelp color="#35a5ff" width={22} height={22} /> How do you
                define an area for carpet cleaning?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start gap-1">
                {" "}
                <div className="mt-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                In commercial cleaning, the areas and costs are defined by the
                size of the cleaned areas. The estimate given to you would be
                based on Square Footage (Sq. Ft.). In general, one area is
                defined as a single room up to 200 square feet. If you have a
                300 square foot room, it will be counted as two areas. However,
                since in commercial carpet cleaning rooms aren't necessarily
                defined, every area would be priced individually.
              </p>
            </div>
            <div className="w-[48%] mb-5">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-center gap-1">
                <CircleHelp color="#35a5ff" width={22} height={22} /> How long
                does carpet cleaning take?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start gap-1">
                {" "}
                <div className="mt-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Carpet cleaning can range anywhere from one hour and upwards to
                a day, or several days. It all depends on the size of the area
                that requires cleaning. The rule of thumb with commercial carpet
                cleaning is around one hour minimum for a small office (lobby,
                hallway and an office).
              </p>
            </div>
            <div className="w-[48%] mb-5">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-center gap-1">
                <CircleHelp color="#35a5ff" width={22} height={22} />
                What guarantees do you offer for Commercial Carpet Cleaning?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start gap-1">
                {" "}
                <div className="mt-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                We offer 100% satisfaction guaranty. we do our best to get your
                office as clean as possible. Each carpet is different, each
                stain is different - but using our knowledge and experience we
                know which method and material to use for each and every one.
              </p>
            </div>
            <div className="w-[48%] mb-5">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-center gap-1">
                <CircleHelp color="#35a5ff" width={22} height={22} />
                My carpets were cleaned but look dirty again. What happened?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start gap-1">
                {" "}
                <div className="mt-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                If your carpet gets dirty again quickly after a professional
                carpet cleaning, it means that there was a detergent residue
                left on your carpet that new dirt is sticking to. Our Hot Water
                Extraction cleaning method leaves behind little or no detergent
                residue. This is actually one reason why it is better to leave
                stain removal to us rather than purchase a spot cleaner from the
                store. Commercially available carpet stain treatments are often
                difficult to rinse out adequately so that the residue attracts
                dirt and can make it look like the stain has returned.
              </p>
            </div>
            <div className="w-[48%] mb-5">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-center gap-1">
                <CircleHelp color="#35a5ff" width={22} height={22} /> How do you
                treat stains?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start gap-1">
                {" "}
                <div className="mt-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                As stated above, each stain is different and requires a
                different approach. Some stains can be removed simply by going
                over them with the hot water extraction, and some require a more
                robust cleaning solution.
              </p>
            </div>
            <div className="w-[48%] mb-5">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-center gap-1">
                <CircleHelp color="#35a5ff" width={22} height={22} /> Why did
                the stains reappear on the office carpets?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start gap-1">
                <div className="mt-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                When stains reappear a few days after a carpet cleaning, it
                usually means that the original spill had permeated the backing
                or even the carpet pad, and has wicked back up to the surface
                after the carpet has dried. Luckily USA Clean Master has the
                solution for this. So if we remove a stain, and it reappears in
                a few days, we'll be happy to come out and take care of it.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex justify-center flex-col items-center">
            <div className="flex items-center flex-col mb-10">
                <h1 className="text-[60px] text-slate-600 ">LET'S TALK</h1>
                <a href="tel:888-396-5195" className="text-[90px] text-blue-900 mt-[-30px]">888-396-5195</a>
                <span className="text-24px uppercase font-sans text-slate-700 mt-[-20px] mb-5">Affordable Rates! Do Not Wait, Call Us Today.</span>
                <p className="text-center text-[16px]">Our representatives are ready to help you make your office healthier with our cleaning services. <br />
                Call us or complete the form below:</p>
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
                <Button size="xl">SEND</Button>
            </div>
          </form>
          <p className="flex items-center gap-1 italic leading-4 text-[12px] mt-5"> <div><CircleAlert  color="blue" width={15} height={15}/></div>Your information is never sold or shared. <br />
          It is used for the sole purpose of contacting you.</p>
        </div>
      </div>
      <DogGirl />
    </div>
  );
};

export default Commerical;
