"use client";

import { Card, CardBody } from "@nextui-org/react";
import { TrendingUp, PiggyBank, ClipboardList } from "lucide-react";
import TrendingKeywords from "./traidingkeywords";
import SimpleBarChart from "./barchart";

export default function DashboardTab() {
    return (
      <div className="p-6 space-y-6">
<div className="flex flex-row-reverse gap-4 items-stretch h-[400px]">
  {/* En-tête avec les stats principales */}
  <div className="grid grid-cols-1 gap-4 w-1/4">
    <div className="bg-gray-100 rounded-lg p-4 shadow-sm flex gap-3 items-center">
      <div className="flex justify-center items-center bg-foreground text-white rounded-full h-14 w-14">
        <TrendingUp size={32} />
      </div>
      <div>
        <div className="text-gray-500 text-sm">Ventes aujourd'hui</div>
        <div className="text-2xl font-semibold">456 450 F</div>
      </div>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 shadow-sm flex gap-3 items-center">
      <div className="flex justify-center items-center bg-foreground text-white rounded-full h-14 w-14">
        <PiggyBank size={32} />
      </div>
      <div>
        <div className="text-gray-500 text-sm">Gain mensuel</div>
        <div className="text-2xl font-semibold">678 456 450 F</div>
      </div>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 shadow-sm flex gap-3 items-center">
      <div className="flex justify-center items-center bg-foreground text-white rounded-full h-14 w-14">
        <ClipboardList size={32} />
      </div>
      <div>
        <div className="text-gray-500 text-sm">Commandes en attente</div>
        <div className="text-2xl font-semibold">67</div>
      </div>
    </div>
  </div>

  {/* Graphique et statistiques */}
  <Card className="bg-gradient-to-r from-[#4A2B0F] to-[#8B4513] text-white w-3/4">
    <CardBody className="h-full flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-sm opacity-80">Revenue</div>
          <div className="text-2xl font-bold">678 456 450 F</div>
        </div>
        <select className="bg-white/20 rounded px-3 py-1">
          <option>Mensuel</option>
        </select>
      </div>

      {/* Zone du graphique */}
      <div className="flex-grow my-4">
        {/* Ici, vous pouvez ajouter votre composant de graphique */}
        <SimpleBarChart/>
      </div>

      {/* Stats en grid */}
      <div className="grid grid-cols-4 text-foreground gap-4">
        <div className="bg-white rounded-lg p-4">
          <div className="text-xl font-bold">1256K</div>
          <div className="text-sm opacity-80">À la livraison</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="text-xl font-bold">452K</div>
          <div className="text-sm opacity-80">Total livré</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="text-xl font-bold">25K</div>
          <div className="text-sm opacity-80">Annulé</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="text-xl font-bold">2256K</div>
          <div className="text-sm opacity-80">Non en caisse</div>
        </div>
      </div>

      {/* Commande en cours */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <div className="text-sm opacity-80">Nouvelle commande</div>
          <div>Ali Jones #756387</div>
        </div>
        <div className="bg-[#FFD700] px-4 py-1 rounded">
          12 000 F
        </div>
      </div>
    </CardBody>
  </Card>
</div>


        
  
<Card className="shadow-lg mt-6">
  <div className="flex gap-2 bg-gray-100">
    {/* Section Commandes récentes */}
    <CardBody className="flex-[2] bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Commande récente</h3>
        <select className="border rounded px-3 py-1">
          <option>Mensuel</option>
        </select>
      </div>

      <div className="space-y-4 bg-white rounded-xl px-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex justify-between items-center border-b pb-4">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-lg py-2">
                <img src="assets/images/MOUSSE.jpeg" alt="MasqueFortifiantCacaoMiel" />
              </div>
              <div>
                <div className="font-semibold">MASQUE FORTIFIANT CACAO MIEL</div>
                <div className="text-sm text-gray-500">Eau, Cacao, Miel, Protéines...</div>
                <div className="text-sm text-[#FFD700]">#01236{item}</div>
              </div>
            </div>
            
            <div className="text-right">
              <div>20 000 F</div>
              <div className="text-sm">X{item}</div>
            </div>
            <div className="bg-foreground text-[#FFD700] px-3 py-1 rounded">
              ATTENTE
            </div>
          </div>
        ))}
      </div>
    </CardBody>

    {/* Section Mots clés tendance */}
    <CardBody className="flex-1">
      <TrendingKeywords />
    </CardBody>
  </div>
</Card>
      </div>
    );
  }