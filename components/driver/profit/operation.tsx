"use client";

import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardBody
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Eye } from "lucide-react";

export default function Operation() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState("All");

  // Données des transactions
  const transactions = [
    { date: "03 Juill 24", description: "Maintenance des véhicules", amount: "75 000 F", paymentMethod: "Espèce", type: "Dépenses" },
    { date: "03 Juill 24", description: "Péages", amount: "15 000 F", paymentMethod: "Espèce", type: "Dépenses" },
    { date: "29 Juin 24", description: "Règlement facture client", amount: "25 000 F", paymentMethod: "Chèque", type: "Régularisations" },
    { date: "29 Juin 24", description: "Retrait Espèce", amount: "80 000 F", paymentMethod: "Espèce", type: "Autres" },
    { date: "15 Juin 24", description: "Assurance des véhicules", amount: "300 000 F", paymentMethod: "Virement bancaire", type: "Dépenses" },
    { date: "10 Juin 24", description: "Salaires", amount: "350 000 F", paymentMethod: "Virement bancaire", type: "Dépenses" },
    { date: "10 Juin 24", description: "Carburant", amount: "90 000 F", paymentMethod: "Espèce", type: "Dépenses" },
    { date: "03 Juin 24", description: "Maintenance des véhicules", amount: "75 000 F", paymentMethod: "Espèce", type: "Dépenses" },
  ];

  const tabs = [
    { id: "All", label: "Toutes les opérations" },
    { id: "Dépenses", label: "Dépenses" },
    { id: "Régularisations", label: "Régularisations" },
    { id: "Autres", label: "Autres" }
  ];

  // Filtrer les transactions selon l'onglet actif
  const filteredTransactions = activeTab === "All" ? transactions : transactions.filter(t => t.type === activeTab);

  return (
    <div className="flex flex-col w-full">
      <Button isIconOnly className="p-1 rounded-full text-white bg-gray-800" onPress={onOpen}>
        <Eye size={50} className="text-white" />
      </Button>

      {/* Modal avec historique des opérations */}
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} size="full" scrollBehavior="inside">
        <ModalContent className="bg-white font-sans text-gray-800">
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between items-center border-b py-4">
                <span className="text-center text-lg font-medium flex-1">Historique des opérations</span>
              </ModalHeader>

              <ModalBody className="p-0">
                {/* Système d'onglets */}
                <Tabs aria-label="Filtrage des transactions" items={tabs} selectedKey={activeTab} >
                {/* <Tabs aria-label="Filtrage des transactions" items={tabs} selectedKey={activeTab} onSelectionChange={setActiveTab}> */}
                  {(item) => (
                    <Tab key={item.id} title={item.label}>
                      <Card>
                        <CardBody>
                          <div className="flex flex-col">
                            {filteredTransactions.length > 0 ? (
                              filteredTransactions.map((transaction, idx) => (
                                <div key={idx} className="flex justify-between items-center px-4 py-3 border-t">
                                  <div className="flex flex-col">
                                    <span className="font-medium">{transaction.description}</span>
                                    <span className="text-sm text-gray-500">{transaction.date}</span>
                                  </div>

                                  <div className="flex flex-col items-end">
                                    <span className="font-medium">{transaction.amount}</span>
                                    <Button
                                      size="sm"
                                      className={`rounded-full text-xs px-3 py-1 min-w-0 h-6 ${
                                        transaction.paymentMethod === "Chèque"
                                          ? "bg-orange-100 text-orange-600"
                                          : transaction.paymentMethod === "Virement bancaire"
                                          ? "bg-green-100 text-green-600"
                                          : "bg-blue-100 text-blue-600"
                                      }`}
                                    >
                                      {transaction.paymentMethod}
                                    </Button>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className="text-center text-gray-500 py-4">Aucune transaction trouvée.</p>
                            )}
                          </div>
                        </CardBody>
                      </Card>
                    </Tab>
                  )}
                </Tabs>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
