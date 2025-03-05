import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';
import { Button } from '@nextui-org/react';

export default function Transactions() {
    const transactions = [
        { id: 'income', icon: <ArrowDownCircle size={40} className="text-white " />, title: 'Entrées' },
        { id: 'expense', icon: <ArrowUpCircle size={40} className="text-white " />, title: 'Sorties' }
    ];

    return (
        <div className="p-4 ">
            {/* <h2 className="text-xl text-white font-semibold text-start mb-6">Gestion des Transactions</h2> */}
            <div className="flex justify-between gap-8">
                {transactions.map((transaction) => (
                    // <div key={transaction.id} className="p-6 rounded-2xl border-2 bg-white border-gray-200 hover:border-secondary hover:bg-secondary hover:text-white transition-all cursor-pointer flex gap-2 items-center">
                    //     <div className="mb-4 border-2 bg-white p-2 rounded-full">{transaction.icon}</div>
                    //     <p className="text-xl font-semibold">{transaction.title}</p>
                    // </div>
                    <Button key={transaction.id} radius='full' className="flex bg-secondary p-6 gap-2 items-center text-white justify-center">
                        <div>{transaction.icon}</div>
                        <div>{transaction.title}</div>
                    </Button>
                ))}
            </div>
        </div>
    );
}
