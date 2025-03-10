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
} from "@nextui-org/react";
import { Car, User, Hash, Phone, Clipboard, Eye } from "lucide-react";

export default function Users() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Exemple de données du chauffeur
  const chauffeur = {
    nom: "Diouff",
    prenom: "Issa",
    telephone: "+221 07 99 88 77",
    typeVehicule: "Voiture",
    marqueVehicule: "Toyota Corolla",
    plaque: "AB-123-CD",
    // commentaire: "Conducteur expérimenté, disponible 24/7.",
  };

  return (
    <>
      <Button
        isIconOnly
        className="p-1 rounded-full text-white bg-gray-800"
        onPress={onOpen}
      >
        <User size={50} className="text-white" />
      </Button>

      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-white font-poppins text-primary rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="text-center text-xl font-bold">
                Profil du chauffeur
              </ModalHeader>
              <ModalBody>
                <div className="mt-2 grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-secondary" />
                    <span className="font-semibold">Nom :</span>
                    <span>{chauffeur.nom}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-secondary" />
                    <span className="font-semibold">Prénom :</span>
                    <span>{chauffeur.prenom}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span className="font-semibold">Téléphone :</span>
                    <span>{chauffeur.telephone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-secondary" />
                    <span className="font-semibold">Type de véhicule :</span>
                    <span>{chauffeur.typeVehicule}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-secondary" />
                    <span className="font-semibold">Marque :</span>
                    <span>{chauffeur.marqueVehicule}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Hash className="w-5 h-5 text-secondary" />
                    <span className="font-semibold">Plaque :</span>
                    <span>{chauffeur.plaque}</span>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <Clipboard className="w-5 h-5 text-secondary" />
                    <span className="font-semibold">Commentaire :</span>
                    <span>{chauffeur.commentaire}</span>
                  </div> */}
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button onPress={onClose} className="text-white bg-red-500 rounded-full py-6">
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
