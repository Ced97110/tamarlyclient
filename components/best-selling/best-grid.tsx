import React from "react";
import Image from "next/image";
import ButtonViewMore from "./button-view-more";

function BestSelling() {

    return (

        <section className="min-h-screen bg-blue-200">
           <div className="mx-auto max-w-screen-2xl px-4">
                <div className="flex flex-col p-5  md:p-12 lg:flex-row items-center">
                    <div className="h-full w-full pb-7  basis-full lg:basis-4/6">
                        <div className="relative aspect-square h-full max-h-[450px]  w-full overflow-hidden">
                          <Image src='/system-design-interview.jpg' className="h-full w-full object-contain" fill alt='book' sizes="(min-width: 1024px) 56vw, 66vw"/> 
                        </div>
                    </div>

                    <div className="flex-col self-center  basis-full lg:basis-2/6 ">
                      <h2 className="text-3xl font-semibold pb-5">Featured Book</h2>
                      <h3 className=" pb-3 ">by Tamarly Publishing</h3>
                      <h3 className="text-xl  font-semibold pb-3 ">System Design Interview</h3>
                      <p className="pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                         quis nostrud exercitation ullamco
                         laboris nisi ut aliquip ex ea commodo consequat
                       </p>
                       <p className="pb-6 text-orange-500">$ 45.00</p>
                       <ButtonViewMore/>

                    </div>
                </div>
       
            </div>
        </section>

    );
};

export default BestSelling;