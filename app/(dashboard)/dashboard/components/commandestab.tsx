"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import { MoreVertical, Search, Eye, Pencil, Copy, Trash } from "lucide-react";

const CommandesTab = () => {
  const commandes = [
    {
      orderId: "#KAN001",
      date: "15 Jan 2025, 14:20",
      client: "Alice Kouadio",
      produit: "Crème hydratante bio",
      montant: "12 000 FCFA",
      statut: "En attente",
      urgence: "Normale",
    },
    {
      orderId: "#KAN002",
      date: "14 Jan 2025, 10:00",
      client: "Emmanuel Diarra",
      produit: "Huile essentielle de coco",
      montant: "18 500 FCFA",
      statut: "En préparation",
      urgence: "Prioritaire",
    },
    {
      orderId: "#KAN003",
      date: "13 Jan 2025, 09:30",
      client: "Fatoumata Traoré",
      produit: "Savon naturel à base de karité",
      montant: "8 000 FCFA",
      statut: "Livré",
      urgence: "Normale",
    },
    {
      orderId: "#KAN004",
      date: "12 Jan 2025, 16:45",
      client: "Jean-Baptiste Kouakou",
      produit: "Shampoing sans sulfate",
      montant: "10 500 FCFA",
      statut: "Annulée",
      urgence: "Urgente",
    },
  ];

  const [filterValue, setFilterValue] = useState("");

  const filteredCommandes = React.useMemo(() => {
    return commandes.filter((commande) => {
      return (
        commande.client.toLowerCase().includes(filterValue.toLowerCase()) ||
        commande.produit.toLowerCase().includes(filterValue.toLowerCase()) ||
        commande.orderId.toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  }, [filterValue]);

  const onSearchChange = React.useCallback((value: string) => {
    setFilterValue(value);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-4 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Rechercher par client, produit..."
            startContent={<Search className="text-default-300" />}
            value={filterValue}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-4">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="flat">Filtrer par statut</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Statut filter">
                <DropdownItem key="En attente">En attente</DropdownItem>
                <DropdownItem key="En préparation">En préparation</DropdownItem>
                <DropdownItem key="Livré">Livré</DropdownItem>
                <DropdownItem key="Annulée">Annulée</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange]);

  return (
    <Table
      aria-label="Table des commandes KANUURA"
      topContent={topContent}
      topContentPlacement="outside"
      removeWrapper
    >
      <TableHeader>
        <TableColumn>ID COMMANDE</TableColumn>
        <TableColumn>DATE</TableColumn>
        <TableColumn>CLIENT</TableColumn>
        <TableColumn>PRODUIT</TableColumn>
        <TableColumn>MONTANT</TableColumn>
        <TableColumn>STATUT</TableColumn>
        <TableColumn>OPTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {filteredCommandes.map((commande) => (
          <TableRow key={commande.orderId}>
            <TableCell>{commande.orderId}</TableCell>
            <TableCell>{commande.date}</TableCell>
            <TableCell>{commande.client}</TableCell>
            <TableCell>{commande.produit}</TableCell>
            <TableCell>{commande.montant}</TableCell>
            <TableCell>
              <Button
                size="sm"
                color={
                  commande.statut === "En attente"
                    ? "warning"
                    : commande.statut === "Livré"
                    ? "success"
                    : "danger"
                }
                variant="flat"
              >
                {commande.statut}
              </Button>
            </TableCell>
            <TableCell>
              <div className="flex justify-between gap-3">
                <Tooltip content="Voir détails" className="text-white bg-green-500">
                  <button className="text-green-500 hover:text-green-600">
                    <Eye size={20} />
                  </button>
                </Tooltip>
                <Tooltip content="Modifier" className="text-white bg-blue-500">
                  <button className="text-blue-500 hover:text-blue-600">
                    <Pencil size={20} />
                  </button>
                </Tooltip>
                <Tooltip content="Dupliquer" className="text-white bg-orange-500">
                  <button className="text-orange-500 hover:text-orange-600">
                    <Copy size={20} />
                  </button>
                </Tooltip>
                <Tooltip content="Supprimer" className="text-white bg-red-500">
                  <button className="text-red-500 hover:text-red-600">
                    <Trash size={20} />
                  </button>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CommandesTab;
