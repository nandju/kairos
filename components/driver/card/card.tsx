import { Button } from "@nextui-org/react";
import { CirclePlus } from "lucide-react";
import Image from "next/image";


export default function Card(){
    return(
        <div className="p-4">
            <div className="flex gap-2 justify-between items-center">
                <div className="text-2xl font-extralight text-white">Cards</div>
                <div className="flex items-center gap-4">
                    <Button isIconOnly className="rounded-full p-1 bg-secondary"><CirclePlus size={45} className="bg-secondary text-white"/></Button>
                    {/* <CirclePlus size={45} className="p-3 rounded-full text-secondary bg-gray-800"/> */}
                    <div className="flex gap-2">
                    <Image
                    src="/assets/images/illustrations/driver/orange-money-whiteV1.png"
                    alt="cars-background"
                    width={100}
                    height={100}
                    className="object-contain rounded-2xl"
                    />
                    <Image
                    src="/assets/images/illustrations/driver/wavemoney.png"
                    alt="cars-background"
                    width={100}
                    height={100}
                    className="object-contain rounded-2xl"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}