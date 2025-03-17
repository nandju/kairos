"use client";

import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { PlusCircle } from "lucide-react";

export default function AddClientModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Récupération des données du formulaire
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // Actions à effectuer avec les données (e.g., API call)
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="flex items-center gap-2 px-4 py-2 bg-foreground text-white rounded-lg"
      >
        <PlusCircle size={20} />
        Ajouter un client
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="xl" className="w-full">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-brown-700 text-2xl">Ajouter un client</h2>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Colonne gauche */}
                  <div>
                    <label className="text-foreground mb-2 block">Nom</label>
                    <Input
                      name="lastName"
                      placeholder="Nom de famille"
                      className="mb-4 w-full"
                    />

                    <label className="text-foreground mb-2 block">Prénom</label>
                    <Input
                      name="firstName"
                      placeholder="Prénom"
                      className="mb-4 w-full"
                    />

                    <label className="text-foreground mb-2 block">
                      Adresse email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="mb-4 w-full"
                    />
                  </div>

                  {/* Colonne droite */}
                  <div>
                    <label className="text-foreground mb-2 block">Téléphone</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Numéro de téléphone"
                      className="mb-4 w-full"
                    />

                    <label className="text-foreground mb-2 block">Adresse</label>
                    <Textarea
                      name="address"
                      placeholder="Adresse complète"
                      className="mb-4 w-full"
                      rows={3}
                    />

                    <label className="text-foreground mb-2 block">Statut</label>
                    <RadioGroup
                      name="status"
                      orientation="horizontal"
                      className="mb-4"
                    >
                      <Radio value="active">Actif</Radio>
                      <Radio value="inactive">Inactif</Radio>
                    </RadioGroup>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="button"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="text-primary border-2 border-foreground"
                >
                  Annuler
                </Button>
                <Button type="submit" className="bg-foreground text-white">
                  Enregistrer
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
