import Card from "@/components/driver/card/card";
import Historical from "@/components/driver/historical/historical";
import Load from "@/components/driver/load/load";
import Profit from "@/components/driver/profit/profit";
import Username from "@/components/driver/username/username";
import NoPc from '../../../components/no-pc/no-pc';


export default function Driver(){
    return(
        <div>
            <div className="block lg:hidden">
            <Username/>
            <Profit/>
            <Card/>
            <Load/>
            <Historical/>
            </div>
            
            <div className="hidden lg:block">
                <NoPc/>
            </div>
        </div>
    );
}