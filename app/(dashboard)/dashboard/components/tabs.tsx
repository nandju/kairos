"use client";

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { LayoutDashboard, Package, ClipboardCheck, User } from "lucide-react";
import DashboardTab from "./dashboardtab";
import ProduitsTab from "./produitstab";
import CommandesTab from "./commandestab";
import ClientsTab from "./clientstab";

export default function AfterNavbar() {
  return (
    <div className="flex justify-between items-center w-full flex-col gap-6">
      <Tabs aria-label="Options">
        <Tab
          key="Tableau-de-board"
          title={
            <div className="flex items-center gap-2">
              <LayoutDashboard size={20} /> Tableau-de-board
            </div>
          }
        >
          <Card>
            <CardBody>
              <DashboardTab/>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="Produits"
          title={
            <div className="flex items-center gap-2">
              <Package size={20} /> Produits
            </div>
          }
        >
          <Card>
            <CardBody>
            <ProduitsTab />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="Commandes"
          title={
            <div className="flex items-center gap-2">
              <ClipboardCheck size={20} /> Commandes
            </div>
          }
        >
          <Card>
            <CardBody>
            <CommandesTab />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="Clients"
          title={
            <div className="flex items-center gap-2">
              <User size={20} /> Clients
            </div>
          }
        >
          <Card>
            <CardBody>
            <ClientsTab />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
