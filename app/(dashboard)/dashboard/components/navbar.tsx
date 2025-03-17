"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Menu, Search, X } from "lucide-react";
import { Avatar, Button, Input } from "@nextui-org/react";
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@nextui-org/react";

interface User {
  name: string;
  role: string;
  avatarUrl: string;
}

export default function Navbar() {
  const [isOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Données utilisateur simulées
  const user: User = {
    name: "Jane Doe",
    role: "Administrator",
    avatarUrl: "/placeholder.svg",
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        
        {/* Bouton pour ouvrir le Drawer (Mobile) */}
        <Button 
          variant="bordered" 
          isIconOnly 
          className="mr-2 md:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Drawer (Menu Latéral Mobile) */}
        <Drawer isOpen={isOpen} onClose={() => setIsDrawerOpen(false)}>
          <DrawerContent>
            <DrawerHeader>
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button isIconOnly variant="light" onClick={() => setIsDrawerOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </DrawerHeader>
            <DrawerBody>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-sm font-medium">🏠 Accueil</Link>
                <Link href="/dashboard" className="text-sm font-medium">📊 Dashboard</Link>
                <Link href="/profile" className="text-sm font-medium">👤 Profil</Link>
              </nav>
            </DrawerBody>
            <DrawerFooter>
              <p className="text-sm text-muted-foreground">Your Company © 2025</p>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* Logo Desktop */}
        <div className="flex items-center gap-2">
          <Link href="/" className="hidden md:flex items-center gap-2 mr-6">
            <Image src="/placeholder.svg" alt="Logo" width={30} height={30} />
            <span className="font-semibold">Your Company</span>
          </Link>
        </div>

        {/* Barre de recherche Desktop */}
        <div className="relative hidden md:flex flex-1 items-center px-2 md:ml-6 md:justify-center">
          <div className="w-full max-w-lg lg:max-w-xs">
            <label htmlFor="desktop-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="desktop-search"
                className="block w-full rounded-md border py-1.5 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>

        {/* Icônes & Avatar */}
        <div className="flex items-center gap-4 md:ml-auto">
          {/* Icône Recherche Mobile */}
          <Button variant="light" isIconOnly className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            <span className="sr-only">Search</span>
          </Button>

          {/* Barre de recherche Mobile */}
          {isSearchOpen && (
            <div className="absolute inset-x-0 top-16 z-50 bg-background p-4 md:hidden">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input className="w-full pl-10" placeholder="Search" type="search" />
              </div>
            </div>
          )}

          {/* Icône Notifications */}
          <Button variant="light" isIconOnly className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
          </Button>

          {/* Avatar Utilisateur */}
          <div className="flex items-center gap-2">
            <Avatar src={user.avatarUrl} alt={user.name} className="h-8 w-8" />
            <div className="hidden md:flex flex-col">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">{user.role}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
