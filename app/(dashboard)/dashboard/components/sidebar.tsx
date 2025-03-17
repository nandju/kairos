"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, LayoutDashboard, CalendarRange, Users } from "lucide-react";

import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();

  const routes = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Voiture",
      path: "/cars",
      icon: Car,
    },
    {
      name: "Reservation",
      path: "/reservation",
      icon: CalendarRange,
    },
    {
      name: "Conducteurs",
      path: "/drivers",
      icon: Users,
    },
  ];

  return (
    <aside className="fixed left-0 top-16 z-30 flex h-[calc(100vh-4rem)] w-64 flex-col border-r bg-background">
      <div className="flex flex-col gap-2 p-4">
        {routes.map((route) => {
          const isActive = pathname === route.path;

          return (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                isActive
                  ? "bg-secondary text-white font-medium"
                  : "hover:bg-secondary/50"
              )}
            >
              <route.icon className="h-5 w-5" />
              {route.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
