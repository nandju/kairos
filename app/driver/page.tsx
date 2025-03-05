import Card from "@/components/driver/card/card";
import Historical from "@/components/driver/historical/historical";
import Load from "@/components/driver/load/load";
import Profit from "@/components/driver/profit/profit";
import Username from "@/components/driver/username/username";


export default function Driver(){
    return(
        <div>
            <Username/>
            <Profit/>
            <Card/>
            <Load/>
            <Historical/>
        </div>
    );
}