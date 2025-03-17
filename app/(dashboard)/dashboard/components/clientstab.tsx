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
import { MoreVertical, Search, Eye, Pencil, UserPlus, Trash } from "lucide-react";
import AddClientModal from "./add-clients";

export default function ClientsTab() {
  const [clients, setClients] = useState([
    {
      clientId: "C001",
      nom: "Alice Kouadio",
      email: "alice.kouadio@example.com",
      telephone: "0707070707",
      statut: "Actif",
    },
    {
      clientId: "C002",
      nom: "Emmanuel Diarra",
      email: "emmanuel.diarra@example.com",
      telephone: "0808080808",
      statut: "Inactif",
    },
    {
      clientId: "C003",
      nom: "Fatoumata Traoré",
      email: "fatoumata.traore@example.com",
      telephone: "0909090909",
      statut: "Actif",
    },
    {
      clientId: "C004",
      nom: "Jean-Baptiste Kouakou",
      email: "jean.kouakou@example.com",
      telephone: "0606060606",
      statut: "Actif",
    },
  ]);

  const [filterValue, setFilterValue] = useState("");

  const filteredClients = React.useMemo(() => {
    return clients.filter((client) =>
      client.nom.toLowerCase().includes(filterValue.toLowerCase()) ||
      client.email.toLowerCase().includes(filterValue.toLowerCase()) ||
      client.telephone.includes(filterValue)
    );
  }, [filterValue, clients]);

  const onSearchChange = React.useCallback((value:any) => {
    setFilterValue(value);
  }, []);

  const handleDelete = (id:any) => {
    setClients((prev) => prev.filter((client) => client.clientId !== id));
  };

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex justify-between gap-4 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Rechercher par nom, email ou téléphone..."
            startContent={<Search className="text-default-300" />}
            value={filterValue}
            onValueChange={onSearchChange}
          />
          <AddClientModal/>
          </div>
      </div>
    );
  }, [filterValue, onSearchChange]);

  return (
    <Table
      aria-label="Table des utilisateurs"
      topContent={topContent}
      topContentPlacement="outside"
      removeWrapper
    >
      <TableHeader>
        <TableColumn>ID UTILISATEUR</TableColumn>
        <TableColumn>NOM</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>TÉLÉPHONE</TableColumn>
        <TableColumn>STATUT</TableColumn>
        <TableColumn>OPTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {filteredClients.map((client) => (
          <TableRow key={client.clientId}>
            <TableCell>{client.clientId}</TableCell>
            <TableCell>{client.nom}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.telephone}</TableCell>
            <TableCell>
              <Button
                size="sm"
                color={client.statut === "Actif" ? "success" : "warning"}
                variant="flat"
              >
                {client.statut}
              </Button>
            </TableCell>
            <TableCell>
              <div className="flex justify-between gap-3">
                <Tooltip content="Voir profil" className="text-white bg-green-500">
                  <button className="text-green-500 hover:text-green-600">
                    <Eye size={20} />
                  </button>
                </Tooltip>
                <Tooltip content="Modifier" className="text-white bg-blue-500">
                  <button className="text-blue-500 hover:text-blue-600">
                    <Pencil size={20} />
                  </button>
                </Tooltip>
                <Tooltip content="Supprimer" className="text-white bg-red-500">
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(client.clientId)}
                  >
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
}
