

export default function Historical() {
    const orders = [
        { id: 1, pickup: "Aéroport", destination: "Hôtel Radisson", estimatedTime: "20 min", status: "En attente" },
        { id: 2, pickup: "Gare Centrale", destination: "Siège Kairos", estimatedTime: "15 min", status: "En cours" },
        { id: 3, pickup: "Avenue Charles De Gaulle", destination: "Centre commercial", estimatedTime: "30 min", status: "Terminée" }
    ];

    const statusColors:any = {
        "En attente": "text-yellow-500",
        "En cours": "text-blue-500",
        "Terminée": "text-green-500"
    };

    return (
        <div className="p-4">
            <div className="bg-white rounded-2xl flex flex-col gap-5 p-4 shadow-md">
                <div className="flex justify-between font-bold items-center text-2xl">
                    <div>Commandes</div>
                    <div className="text-lg font-extralight cursor-pointer hover:underline">Tout voir</div>
                </div>
                {/* Historiques des commandes */}
                <div className="flex flex-col gap-3 bg-white">
                    {orders.map(order => (
                        <div key={order.id} className="p-3 bg-gray-300 flex justify-between rounded-xl items-center">
                            <div>
                                <p className="text-lg font-semibold">{order.pickup} → {order.destination}</p>
                                <p className="text-sm text-gray-500">⏳ {order.estimatedTime}</p>
                            </div>
                            <span className={`text-sm font-semibold ${statusColors[order.status]}`}>
                                {order.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
