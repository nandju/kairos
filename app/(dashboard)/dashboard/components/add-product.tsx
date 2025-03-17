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
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { Upload, PlusCircle } from "lucide-react";

const categories = [
  { value: "soins-visage", label: "Soins Visage" },
  { value: "soins-cheveux", label: "Soins Cheveux" },
  { value: "soins-corps", label: "Soins Corps" },
  { value: "huiles-essentielles", label: "Huiles Essentielles" },
  { value: "savons-naturels", label: "Savons Naturels" },
  { value: "masques-visage", label: "Masques Visage" },
  { value: "kits-decouverte", label: "Kits Découverte" },
];

export default function AddMenuModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Vous pouvez ici récupérer les données du formulaire
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // Faites les actions nécessaires avec les données
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="flex items-center gap-2 px-4 py-2 bg-foreground text-white rounded-lg"
      >
        <PlusCircle size={20} />
        Ajouter un produit
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" size="xl" className="w-full">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-brown-700 text-2xl">Ajouter un produit</h2>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Colonne gauche */}
                  <div>
                    <label className="text-foreground mb-2 block">
                      Nom du produit
                    </label>
                    <Input
                      name="productName"
                      placeholder="Nom du produit"
                      className="mb-4 w-full"
                    />

                    <label className="text-foreground mb-2 block">
                      Catégorie
                    </label>
                    <Select
                      name="category"
                      placeholder="Choisir une catégorie"
                      className="mb-4 w-full"
                    >
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <label className="text-foreground mb-2 block">
                      Quantité
                    </label>
                    <Input
                      name="quantity"
                      placeholder="ml"
                      className="mb-4 w-full"
                    />
                  </div>

                  {/* Colonne droite */}
                  <div>
                    <label className="text-foreground mb-2 block">
                      Ingrédients
                    </label>
                    <Input
                      name="ingredients"
                      placeholder="Texte"
                      className="mb-4 w-full"
                    />

                    <label className="text-foreground mb-2 block">Prix</label>
                    <div className="flex gap-2 mb-4">
                      <div className="w-24">
                        <Input value="FCFA" disabled />
                      </div>
                      <Input
                        name="price"
                        placeholder="0000"
                        className="w-full"
                      />
                    </div>

                    <label className="text-foreground mb-2 block">Statut</label>
                    <RadioGroup
                      name="status"
                      orientation="horizontal"
                      className="mb-4"
                    >
                      <Radio value="available">Disponible</Radio>
                      <Radio value="unavailable">Indisponible</Radio>
                    </RadioGroup>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="text-foreground mb-2 block">
                    Description
                  </label>
                  <Textarea
                    name="description"
                    placeholder="Ajouter une description à votre produit"
                    className="mb-4 w-full"
                    rows={4}
                  />
                </div>

                {/* Upload image */}
                <div>
                    <label className="text-foreground mb-2 block">Image</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center relative">
                        <Upload className="mx-auto mb-2 text-gray-400" size={24} />
                        <p className="text-gray-500 text-sm">
                            Télécharger une image
                        <br />
                        (jpg; png; bmp)
                        </p>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
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
                <Button
                  type="submit"
                  className="bg-foreground text-white"
                >
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
