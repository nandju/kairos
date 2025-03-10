import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { Button } from '@nextui-org/react';
import Sortie from '../formulaire/sortie';
import Entre from '../formulaire/entre';

export default function Transactions() {
    return (
        <div className="p-4">
            <div className="flex justify-between gap-8">

                <Entre/>

                {/* <Button radius="full" className="flex bg-secondary p-6 gap-2 items-center text-white justify-center">
                    <ArrowDownCircle size={40} className="text-white" />
                    <div>Entrées</div>
                </Button> */}

                <Sortie/>

                {/* <Button radius="full" className="flex bg-secondary p-6 gap-2 items-center text-white justify-center">
                    <ArrowUpCircle size={40} className="text-white" />
                    <div>Sorties</div>
                </Button> */}
            </div>
        </div>
    );
}
