import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from '@/assets/image.jpg'

import { Link } from 'react-router-dom';
import { Building2, Paintbrush, ShieldCheck, ShieldPlus, Sofa } from 'lucide-react';

const data = [
  {

    text1: 'Carpet Cleaning',
    text2: 'and maintance',
    image: 'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text3: "We offer a variety of carpet cleaning services tha  can fit any person's budget and needs",
    icon: <Paintbrush width={100} height={100} color='#ffba1a'/>,
  },
  {
    text1: 'A Clean home ',
    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text2: 'is a healthy home',
    text3:'Enjoy the benefits of having cleaner carpet and a healthier home environment.',
    icon: <ShieldPlus width={100} height={100} color='#ffba1a' />,
  },
  {
    text1: 'UPHOLSTERY',
    image: 'https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text2: 'FINE FURNITURE & MATTRESS',
    icon: <Sofa  width={100} height={100} color='#ffba1a' />,
    text3:'Restore the beauty and extend the life of your favorite upholstered furniture.'
  },
  {
    text1: 'STAIN-RESISTANT',
    image: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text3:'Professionally applied to carpets and upholstery and dries quickly, without any residual odor. It is non-toxic and safe to use around family and pets.',
    text2: 'PROTECTIVE COATING',
    icon: <ShieldCheck width={100} height={100} color='#ffba1a' />,
  },
  {
    text1:"COMMERCIAL",
    text2:"CLEANING SERVICES",
    text3:"Cleaning services with no disruption to your business operations. We can schedule evenings and weekends.",
    image:"https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    icon:<Building2 width={100} height={100} color='#ffba1a'/>
  }
]

const Banner = () => {
  return (
    <div>
      <Carousel className="w-full h-[700px]" >
        <CarouselContent className="h-full">
          {data.map(el =>{
            return <CarouselItem className="relative h-full" key={el.image}>
            <img src={el.image} alt="" className="absolute" width="100%" height="100%"/>
            <div className="relative ml-[300px] mt-[100px]">
                <div className="w-[600px] p-4 inline-block mb-2 bg-slate-500 bg-opacity-80 rounded-md backdrop-opacity-5">
                <Link to={'/'} className="">
                    <h2 className="text-[65px] text-white uppercase">{el.text1}</h2>
                    <h3 className="uppercase text-[40px] text-white">{el.text2}</h3>
                </Link>
                </div>
                <div className="gap-5 p-4 w-[600px] mb-2 bg-slate-500 bg-opacity-80 rounded-md backdrop-opacity-5 flex items-center">
                  {el.icon}

                  <h3 className="text-white text-md">
                    {el.text3}
                  <Link className="text-[#ffba1a] block mt-5 underline" to={'/'}>Read More</Link>
                  </h3>
                </div>
            </div>
          </CarouselItem>
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Banner;
