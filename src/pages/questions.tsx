import * as React from "react";
import Image from "../assets/image2.jpg";
import DogGirl from "../components/donAndGirl";
import { Button } from "../components/ui/button";
import { BadgeCheck, CircleHelp } from "lucide-react";

const Questions = () => {
  return (
    <div className="">
      <div className="relative h-[628px] overflow-hidden">
        <div className="absolute z-10 bottom-0 left-0 bg-slate-900 bg-opacity-[0.7] w-full p-5 flex justify-center gap-36 items-center">
          <div>
            <span className="text-center text-white text-[22px] block">
              Call us for a{" "}
              <span className="italic text-yellow-200">cost estimate</span> over
              the phone
            </span>
            <a className="text-[70px] leading-[65px] text-white" href="tel:1">
              888-396-5195
            </a>
          </div>
          <Button size="xl" className="uppercase">
            Order service{" "}
            <span className="italic pl-2 text-yellow-200">now</span>
          </Button>
        </div>
        <img loading="lazy" width="100%" height="100%" src={Image} alt="" />
      </div>
      <div className="container mt-[70px]">
        <h1 className="text-center text-[70px] uppercase text-slate-600">
          Common Questions
        </h1>
        <p className="text-center text-[22px] uppercase">
          Ask the carpet cleaning experts
        </p>
        <div className="flex justify-between mt-[40px]">
          <div className="w-[48%]">
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                What exactly is carpet cleaning? Isn't vacuuming enough?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Carpet cleaning is the removal of dried soil, stains, and
                bacteria from your carpet's fibers. This differs from regular
                vacuuming because vacuuming targets the surface layer of your
                carpet, while carpet cleaning aims for the deeper carpet fibers
                where various bacteria attach themselves. For residential spaces
                we typically work with our portable steam cleaning machine and
                save the truck mounted machine for more commercial cleaning
                cases.
              </p>
            </div>

            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                What method of carpet cleaning does USA Clean Master use? Can I
                DIY?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                We use the hot water extraction method. This method is
                preferable to typical DIY methods because the hot water
                extraction machine sprays hot water while sucking it out
                simultaneously, removing any soil and leaving no residue behind.
                DIY methods do not take into account the risks of detergent
                residue and remaining water on a carpet and offer no reasonable
                way to remove them should they occur.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                What kind of chemicals do you use for cleaning?
              </h2>
              
              <p className="text-[16px] text-slate-900 flex items-start">
              <div className="mt-1 min-w-[26px] ml-1">
                <BadgeCheck width={16} height={16} color="#6bac00" />
              </div>
                None. All of our cleaning products are green. You can be sure
                that our cleaning services are safe for your children and pets.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                I want to purchase my first expensive carpet. Is there anything
                I should know before making a choice?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                You are right in choosing an expensive carpet, provided that the
                seller can guarantee you that the carpet will not shrink during
                cleaning, that the color is fast and will not run or fade and
                that the fibers are of the highest quality. Carpets manufactured
                from natural fibers are usually more durable than synthetics.
              </p>
            </div>

            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                How long does carpet take to dry?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Dry times depend on the size of the cleaned area and on the
                particular services performed. For the average bedroom you can
                expect between 2-4 hour drying time. Naturally, the bigger the
                space, the more time it takes to dry. Your technicians will be
                able to give you a more specific dry time.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                Is your work guaranteed?
              </h2>

              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Our service is guaranteed. If you are not satisfied with our
                service we will happily return to try again. Some stains might
                not be removable and the carpet must be dyed. We carry a
                selection of dyes on hand. We think it is wise to first estimate
                the damage with an on-site inspection. Of course, our on-site
                estimates are free of charge.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                Do you work with insurance?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                You bet. It is rare that an insurance company will be called
                upon for standard carpet cleaning, however in cases of water and
                fire damage we are happy to provide our estimate to any
                insurance company.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                Do I need to move my furniture?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Our technicians are glad to move any light furniture, like sofas
                and end tables, however for liability purposes and in order to
                protect you from incurring financial responsibility we cannot be
                responsible for heavier furniture, like bookcases and
                grandfather clocks. In these kinds of situations our technicians
                will work around these pieces.
              </p>
            </div>

            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                Do You Serve Both Residential and Commercial Customers?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Yes, we provide upholstery cleaning services for home and
                business owners. We have commercial grade powerful cleaning
                machines, as well as certified, experienced and trained staff to
                cover all your cleaning needs.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                How often should I schedule a professional cleaning?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                The frequency of professional cleaning depends on your specific
                needs. However, most of our customers choose weekly or bi-weekly
                services to maintain a clean and healthy living environment.
              </p>
            </div>

            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                Do I need to be home during the cleaning?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                No, you don't need to be home during the cleaning. Optionally,
                you can provide us with access to your property and we'll ensure
                it's secure once the cleaning is complete.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                Is it safe to have my carpets cleaned if i have pets?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Yes, it is safe to have your carpets cleaned if you have pets.
                Professional cleaning services use non-toxic and pet-friendly
                products that are safe for both animals and humans. In fact,
                regularly cleaning your carpets can help remove pet dander.
              </p>
            </div>
          </div>
          <div className="w-[48%]">
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                What is the difference between bed bugs and dust mites?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                This is one of our most common questions so we will spend a few
                lines detailing the answer. Bed bugs and dust mites are both
                human parasites that live in your most intimate spaces. <br />{" "}
                <br />
                While neither one of them is a danger to your health, per se,
                both of them can cause mild to severe allergic reactions and flu
                like symptoms. Since the beg bug is mainly a nocturnal parasite
                that lives off warm blood, they generally congregate in your
                pillows, mattress, box springs, sheets, etc. The dust mite eats
                organic food, you're your dead skin cells as their top priority.
                Since they require a constant source of food, you can find dust
                mites anywhere in the house, from your sofa blankets to your
                night slippers. <br />
                <br />
                Allergic reactions can result in a bed bug or dust mite
                infestation, however it is import to note that the dust mite
                related allergy is actually more directly related to the dust
                mite's left over fecal matter, while it is believed that
                allergic reactions from bed bugs are due to their saliva. <br />
                <br />
                Both the bedbug and the dust might cannot survive in high
                temperatures, therefore steam cleaning is an affective and a
                safe eradication method. For easily washable items, like pillow
                cases and sheets, most experts recommend a regular wash cycle
                under extreme heat. For items not machine washable, like
                mattress, box springs, carpets, etc., a USA Clean Master will
                begin the treatment process by vacuuming the area followed by a
                thorough steam cleaning, making sure to target the areas in
                between and in the corners. <br /> <br /> USA Clean Master is a
                green company and therefore we do not encourage the use of
                dangerous pesticides. If, however, you would like to add a
                chemical agent to the cleaning process, please do so after the
                steam cleaning phase has completed. <br />
                <br />
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                I wish to lay down wall-to-wall carpets, but am afraid of high
                maintenance costs. Should this concern me?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Once you have decided to make the investment and install
                wall-to-wall carpeting, you should be prepared for professional
                cleaning services at least once a year. While prima facie this
                seems to be an expensive proposition, it is far cheaper than
                replacing sections of your carpet that have suffered excessive
                wear and tear because abrasive dust particles were left on the
                carpet for too long a period of time. So, the answer is
                emphatically NO! Protect your investment. It's worth it.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                With three children in the home how can I keep my wall-to-wall
                carpets stain free?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Some carpets are chemically treated against staining. When small
                children are involved, this is always a wise option. However,
                even with chemically treated carpets, you will require
                professional cleaning from time to time as nothing is absolutely
                foolproof.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                I am moving out of my home in a month's time. How can I leave it
                looking good without wasting too much energy?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Good question! The perfect answer is hire a company to do the
                job for you. Let's face it. No one has that little bit of extra
                energy after all the hassles of packing and garage sales etc.
              </p>
            </div>
            <div className="w-full mb-[30px]">
              <h2 className="text-[22px] text-[#35a5ff] mb-1 flex items-start">
                <div className="mt-[6px] min-w-[30px]">
                  <CircleHelp color="#35a5ff" width={22} height={22} />
                </div>
                Can I sleep in my room after carpet cleaning?
              </h2>
              <p className="text-[16px] text-slate-900 flex items-start">
                <div className="mt-1 min-w-[26px] ml-1">
                  <BadgeCheck width={16} height={16} color="#6bac00" />
                </div>
                Absolutely! But it's better to wait until the carpet is
                completely dry before walking on it. If you step on it when it's
                still wet, you might slip or make it dirty again. It usually
                takes around 6 to 10 hours for the carpet to dry, depending on
                how well the room is ventilated. Don't worry, our cleaning
                solution is safe and won't harm you once it's dry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DogGirl />
    </div>
  );
};

export default Questions;
