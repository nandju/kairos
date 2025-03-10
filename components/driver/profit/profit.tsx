"use client";
import { Eye } from "lucide-react";
import { Select, SelectItem } from '@nextui-org/react';
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Operation from './operation';


export default function Profit(){
    return(
        <div className="p-4 mt-4">
            {/* <div className="bg-gradient-to-r from-white to-secondary text-black rounded-2xl flex justify-between items-center p-3"> */}
            <div className=" relative text-white rounded-2xl flex justify-start gap-8 items-end">
                 {/* <div className="absolute -left-8 -z-">
                    <Image
                    src="/assets/images/illustrations/no-background/Véhicule-removebg-preview.png"
                    alt="cars-background"
                    width={230}
                    height={290}
                    className="object-cover"
                    />
                </div> */}
                <div className="flex relative z-0 flex-col gap-2 text-gray-200 font-bold">
                    <div className="text-xl font-extralight">Profit</div>
                    <div className="font-bold text-3xl text-white"> 155000,00.Fcfa </div>
                </div>
                
                {/* <Select label="période" id="period" size="md" radius="lg" className="w-28 rounded-2xl text-center text-black bg-white">
                <SelectItem value="days">Jour</SelectItem>
                <SelectItem value="week">Semaine</SelectItem>
                <SelectItem value="mouth">Mois</SelectItem>
                <SelectItem value="year">Année</SelectItem>
                </Select> */}
                {/* <Button className="bg-white">Jour</Button> */}
                 {/* <Eye size={45} className="p-3 rounded-full text-white bg-gray-800"/> */}
                 <Operation/>
            </div>
        </div>
    );
}