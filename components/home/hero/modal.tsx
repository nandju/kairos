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
//    DateInput,
    Checkbox,
    DatePicker,
    CheckboxGroup
  } from "@nextui-org/react";
//   import { Calendar, MapPin, Briefcase, User, Car } from "lucide-react";
import {now, getLocalTimeZone} from "@internationalized/date";
import Image from "next/image";
  
  export default function ReservationForm() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
        React.useState<"inside" | "outside">("inside");
    const vehicleTypes = [
        {
          name: "Berline",
          picture: "/assets/images/illustrations/no-background/Berline-removebg-preview.png", // Remplace par une vraie image
          seats: 4,
        },
        {
          name: "SUV",
          picture: "/assets/images/illustrations/no-background/SUV-removebg-preview.png",
          seats: 4,
        },
        {
          name: "VAN",
          picture: "/assets/images/illustrations/no-background/VAN-removebg-preview.png",
          seats: 7,
        },
        {
          name: "Mini-Bus",
          picture: "/assets/images/illustrations/no-background/Mini-Bus-removebg-preview.png",
          seats: 15,
        },
        {
          name: "Véhicule Utilitaire",
          picture: "/assets/images/illustrations/no-background/Véhicule-removebg-preview.png",
          seats: "N/A", 
        },
      ];
      
  
    return (
      <>
        <Button
          color="secondary"
          radius="full"
          className="text-white p-6 mt-6"
          onPress={onOpen}
        >
          Réserver Maintenant
        </Button>
        <Modal backdrop="blur" scrollBehavior="outside" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="bg-gray-100 font-poppins text-primary rounded-lg">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col font-poppins gap-1 text-center text-xl font-bold">
                  Réservation de Véhicule
                </ModalHeader>
                <ModalBody>
                  <div className="mt-4 grid grid-cols-1 gap-4 font-poppins">
                    <Input
                      color="primary"
                      type="text"
                      label="Nombre de passagers"
                      className="w-full"
                    //   startContent={<User className="w-5 h-5 text-gray-400" />}
                    />
                    <Input
                      color="primary"
                      type="text"
                      label="Nombre de valises"
                      className="w-full"
                    //   startContent={<Briefcase className="w-5 h-5 text-gray-400" />}
                    />
                    <DatePicker
                        color="primary"
                        hideTimeZone
                        showMonthAndYearPickers
                        defaultValue={now(getLocalTimeZone())}
                        label="Date et heure de réservation"
                        variant="flat"
                    />
                    <Input
                      color="primary"
                      type="text"
                      label="Lieu de prise en charge"
                      className="w-full"
                    //   startContent={<MapPin className="w-5 h-5 text-gray-400" />}
                    />
                  {/* Sélection du type de véhicule */}
                  <div className="flex flex-col space-y-2">
                    <label className="font-semibold text-lg flex items-center">
                      Type de Véhicule
                    </label>
                    <CheckboxGroup
                      className="flex flex-col space-y-2"
                    >
                      {vehicleTypes.map((vehicle) => (
                        <Checkbox key={vehicle.name} value={vehicle.name}>
                          <div className="flex items-center space-x-3">
                          <Image
                            src={vehicle.picture}
                            alt={vehicle.name}
                            width={40} // Taille équivalente à w-10
                            height={40} // Taille équivalente à h-10
                            className="rounded-md object-contain"
                          />
                            <span>{vehicle.name} - {vehicle.seats} places</span>
                          </div>
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>




                    <div className="flex flex-col space-y-2">
                        <label className="font-semibold text-lg">Type de paiement</label>
                        <Checkbox defaultSelected>liquide</Checkbox>
                        <Checkbox>mobile</Checkbox>
                        <Checkbox>banque</Checkbox>
                    </div>
                    
  

                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" className="bg-secondary text-secondary-foreground" variant="flat" onPress={onClose}>
                    Fermer
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Valider
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  