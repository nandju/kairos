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
  Select,
  SelectItem,
  Textarea,
  DatePicker,
} from "@nextui-org/react";
import { Calendar, DollarSign, ArrowDownCircle } from "lucide-react";
import { now, getLocalTimeZone } from "@internationalized/date";

export default function Entre() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const paymentMethods = [
    { id: "especes", name: "Espèces" },
    { id: "orange-money", name: "Orange Money" },
    { id: "wave", name: "Wave" },
    { id: "free-money", name: "Free Money" },
  ];

  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState("");

  return (
    <>
      <Button
        radius="full"
        className="flex bg-secondary p-6 gap-2 items-center text-white justify-center"
        onPress={onOpen}
      >
        <ArrowDownCircle size={40} className="text-white" />
        <div>Entrées</div>
      </Button>
      <Modal backdrop="blur" scrollBehavior="outside" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-white font-poppins text-primary rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-xl font-bold">
                Formulaire des gains
              </ModalHeader>
              <ModalBody>
                <div className="mt-2 grid grid-cols-1 gap-4">
                  <div className="relative">
                    <DatePicker
                      color="primary"
                      hideTimeZone
                      showMonthAndYearPickers
                      defaultValue={now(getLocalTimeZone())}
                      label="Date de l'opération"
                      variant="flat"
                      className="w-full"
                    />
                  </div>

                  <Input
                    color="primary"
                    type="number"
                    label="Montant perçu"
                    className="w-full"
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

                  <Textarea
                    color="primary"
                    className="w-full resize-none h-24"
                    maxRows={3}
                    label="Ajouter un commentaire"
                  />
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="primary" className="text-white w-full rounded-full py-6">
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
