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
  Checkbox,
  DatePicker,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { Calendar, Upload, DollarSign, ArrowUpCircle } from "lucide-react";
import { now, getLocalTimeZone } from "@internationalized/date";
import Image from "next/image";

export default function Sortie() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const expenseTypes = [
    "Transport",
    "Restauration",
    "Hébergement",
    "Fournitures",
    "Services",
    "Autre"
  ];
  
  const paymentMethods = [
    { id: "especes", name: "Espèces" },
    { id: "orange-money", name: "Orange Money" },
    { id: "wave", name: "Wave" },
    { id: "free-money", name: "Free money" }
  ];
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState("");

  return (
    <>
      <Button
        // color="secondary"
        radius="full"
        className="flex bg-secondary p-6 gap-2 items-center text-white justify-center"
        onPress={onOpen}
      >
        <ArrowUpCircle size={40} className="text-white" />
        <div>Sorties</div>
      </Button>
      <Modal backdrop="blur" scrollBehavior="outside" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-white font-poppins text-primary rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col font-poppins gap-1 text-center text-xl font-bold">
                Formulaire des dépenses
                {/* <Button 
                  isIconOnly 
                  color="danger" 
                  variant="light" 
                  className="absolute right-2 top-2"
                  onPress={onClose}
                >
                  ×
                </Button> */}
              </ModalHeader>
              <ModalBody>
                <div className="mt-2 grid grid-cols-1 gap-4 font-poppins">
                  <div className="relative">
                    <DatePicker
                      color="primary"
                      hideTimeZone
                      showMonthAndYearPickers
                      defaultValue={now(getLocalTimeZone())}
                      label="Date de l'opération"
                      variant="flat"
                      className="w-full"
                    //  classNames={{
                    //    base: "border rounded-xl bg-gray-50 p-2",
                    //  }}
                    //   startContent={<Calendar className="w-5 h-5 " />}
                    />
                  </div>

                  <Select
                    label="Type de charges"
                    className="w-full"
                    color="primary"
                    variant="flat"
                    classNames={{
                      base: "border rounded-xl bg-gray-50",
                      trigger: "h-12",
                    }}
                  >
                    {expenseTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </Select>

                  <Select
                    label="Intitulé de l'opération"
                    color="primary"
                    className="w-full "
                    variant="flat"
                    classNames={{
                      base: "border rounded-xl bg-gray-50",
                      trigger: "h-12",
                    }}
                  >
                    <SelectItem key="operation1" value="operation1">Opération 1</SelectItem>
                    <SelectItem key="operation2" value="operation2">Opération 2</SelectItem>
                    <SelectItem key="operation3" value="operation3">Opération 3</SelectItem>
                  </Select>

                  <Input
                    color="primary"
                    type="number"
                    label="Montant TTC"
                    className="w-full "
                    classNames={{
                      base: "border rounded-xl bg-gray-50",
                      input: "h-10",
                    }}
                    startContent={<DollarSign className="w-5 h-5" />}
                  />

                  <div className="flex flex-col space-y-2">
                    <label className="text-sm text-gray-600">Moyen de paiement</label>
                    <div className="flex flex-wrap gap-2">
                      {paymentMethods.map((method) => (
                        <Button
                          key={method.id}
                          className={`px-4 py-2 rounded-full text-sm ${
                            selectedPaymentMethod === method.id
                              ? "bg-indigo-100 text-red-600 border border-red-600"
                              : "bg-gray-100 text-gray-700"
                          }`}
                          onClick={() => setSelectedPaymentMethod(method.id)}
                          color="primary"
                          variant="flat"
                        >
                          {method.name}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-red-600">
                    <Upload className="w-5 h-5" />
                    <span className="text-sm">Charger un reçu</span>
                  </div>

                  <Input
                    color="primary"
                    type="text"
                    label="Nom de la pièce jointe"
                    className="w-full bg-gray-50 rounded-xl"
                    classNames={{
                      base: "border rounded-xl bg-gray-50",
                      input: "h-10",
                    }}
                  />

                  <Textarea
                    color="primary"
                    // placeholder="Ajouter un commentaire"
                    className="w-full resize-none h-24 "
                    maxRows={3}
                    label="Ajouter un commentaire"
                  />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="primary" className=" text-white w-full rounded-full py-6">
                  Enregistrer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}