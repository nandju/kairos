import { BellDot, User } from "lucide-react";


export default function Username(){
    return(
        <div className="p-4 bg-primary">
            <div className="flex justify-between items-center">
                <div className="text-lg font-extralight text-white">Welcome Back, <br /> <span className="font-bold text-2xl text-white">Mr Issa !</span> </div>
                <div className="flex gap-2">
                    <BellDot size={50} className="p-3 rounded-full text-white bg-gray-800"/>
                    <User size={50} className="p-3 rounded-full text-white bg-gray-800"/>
                </div>
            </div>
        </div>
    );
}