import React from 'react';
import { Eye, Pencil, Copy, Trash, PlusCircle, List } from 'lucide-react';
import { Card, CardBody, Button, Tooltip } from '@nextui-org/react';
import AddMenuModal from './add-product';

// Tableau des produits avec des données adaptées à KANUURA
const produits = [
  {
    id: 1,
    title: 'SAVONS NATURELS',
    priceRange: '1 500 FCFA - 3 000 FCFA',
    items: 15,
    image: 'assets/images/MOUSSE.jpeg',
  },
  {
    id: 2,
    title: 'HUILES ESSENTIELLES',
    priceRange: '5 000 FCFA - 10 000 FCFA',
    items: 10,
    image: 'assets/images/4-1.png',
  },
  {
    id: 3,
    title: 'CRÈMES HYDRATANTES',
    priceRange: '3 500 FCFA - 8 000 FCFA',
    items: 8,
    image: 'assets/images/WhatsApp Image 2024-11-15 at 10.22.00 (1).jpeg',
  },
  {
    id: 4,
    title: 'SOIN DU VISAGE',
    priceRange: '2 500 FCFA - 7 000 FCFA',
    items: 12,
    image: 'assets/images/WhatsApp Image 2024-11-15 at 10.22.00.jpeg',
  },
  {
    id: 5,
    title: 'GOMMAGES',
    priceRange: '3 000 FCFA - 6 000 FCFA',
    items: 6,
    image: 'assets/images/sachet_7.png',
  },
  {
    id: 6,
    title: 'MASQUES CAPILLAIRES',
    priceRange: '4 000 FCFA - 8 000 FCFA',
    items: 10,
    image: 'assets/images/dcgd.png',
  },
];

// Composant pour une carte produit
const MenuCard = ({ title, priceRange, items, image }: any) => {
  return (
    <Card className="overflow-hidden shadow-lg">
      <div className="relative">
        <div className="h-32 bg-foreground">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <CardBody className="p-4">
        <h3 className="font-bold text-sm mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">{priceRange}</p>
        <p className="text-sm text-gray-500">{items} articles</p>
        <div className="flex justify-between mt-4">
          <Tooltip content="Voir produit" className="text-white bg-green-500">
          <button className="text-green-500 hover:text-green-600">
            <Eye size={20} />
          </button>
          </Tooltip>
          <Tooltip content="Modifier produit" className="text-white bg-blue-500">
          <button className="text-blue-500 hover:text-blue-600">
            <Pencil size={20} />
          </button>
          </Tooltip>
          <Tooltip content="Dupliquer produit" className="text-white bg-orange-500">
          <button className="text-orange-500 hover:text-orange-600">
            <Copy size={20} />
          </button>
          </Tooltip>
          <Tooltip content="Supprimer produit" className="text-white bg-red-500">
          <button className="text-red-500 hover:text-red-600">
            <Trash size={20} />
          </button>
          </Tooltip>
        </div>
      </CardBody>
    </Card>
  );
};

// Composant principal pour afficher les catégories
const ProduitsTab = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">Listes des produits</h1>
        <div className="flex gap-4">
          <Button className="flex items-center gap-2 px-4 py-2 text-primary border-2 border-foreground rounded-lg">
            <List size={20} />
            Liste de produits
          </Button>
          <AddMenuModal/>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produits.map((category) => (
          <MenuCard
            key={category.id}
            title={category.title}
            priceRange={category.priceRange}
            items={category.items}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProduitsTab;
