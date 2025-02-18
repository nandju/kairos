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
    DatePicker
  } from "@nextui-org/react";
//   import { Calendar, MapPin, Briefcase, User, Car } from "lucide-react";
import {now, getLocalTimeZone} from "@internationalized/date";
  
  export default function ReservationForm() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
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
        <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
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
                    {/* Checkbox pour choisir le type de véhicule */}
                    <div className="flex flex-col space-y-2">
                      <label className="font-semibold text-lg flex items-center">
                        {/* <Car className="w-5 h-5 text-gray-400 mr-2" /> */}
                         Type de Véhicule
                      </label>
                      <div className="flex flex-col space-x-4">
                        <Checkbox>Économique</Checkbox>
                        <Checkbox>Berline</Checkbox>
                        <Checkbox>Véhicule de luxe</Checkbox>
                      </div>
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
                  <Button color="danger" variant="light" onPress={onClose}>
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
  