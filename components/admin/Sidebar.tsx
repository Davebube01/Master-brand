"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/assets/richie-logo.png";
import { useSidebar } from "@/contexts/SidebarContext";

// Import Custom Icons
import SquaresFourIcon from "@/assets/admin/SquaresFour.svg";
import StorefrontIcon from "@/assets/admin/Storefront.svg";
import GraduationCapIcon from "@/assets/admin/GraduationCap.svg";
import WalletIcon from "@/assets/admin/Wallet.svg";

export const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: SquaresFourIcon,
  },
  {
    title: "Wallet",
    href: "/admin/wallet",
    icon: WalletIcon,
  },
   {
    title: "Academy",
    href: "/admin/academy",
    icon: GraduationCapIcon,
  },
  {
    title: "Marketplace",
    href: "/admin/marketplace",
    icon: StorefrontIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen hidden md:flex flex-col bg-[#F4F4F4F4] text-sidebar-foreground border-r transition-all duration-300 ease-in-out",
        isCollapsed ? "w-18" : "w-48",
      )}
    >
      <div className="flex h-full flex-col w-full relative">
        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-9 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-xs hover:bg-gray-100"
        >
          {isCollapsed ? (
            <ChevronRight className="h-3 w-3" />
          ) : (
            <ChevronLeft className="h-3 w-3" />
          )}
        </button>

        {/* Logo Section */}
        <div
          className={cn(
            "flex items-center py-8 transition-all duration-300",
            isCollapsed ? "justify-center px-0" : "px-6",
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden transition-all duration-300",
              isCollapsed ? "w-8" : "w-24",
            )}
          >
            <Image
              src={logo}
              alt="Logo"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3">
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                title={isCollapsed ? item.title : ""}
                className={cn(
                  "group flex items-center rounded-md py-3 transition-colors",
                  isCollapsed ? "justify-center px-0" : "px-3",
                  isActive
                    ? "bg-[#1B413E] text-white"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  className={cn(
                    "h-5 w-5 transition-all duration-200",
                    isActive
                      ? "brightness-0 invert"
                      : "brightness-0 opacity-60 group-hover:opacity-100",
                  )}
                />
                {!isCollapsed && (
                  <span className="ml-3 text-sm font-medium animate-in fade-in duration-300 whitespace-nowrap">
                    {item.title}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sign Out */}
        <div className="mt-auto p-3">
          <Link href="/auth">
          <button
            className={cn(
              "flex w-full items-center rounded-md py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors",
              isCollapsed ? "justify-center px-0" : "px-4",
            )}
            title="Sign Out"
          >
            <LogOut className="h-5 w-5 rotate-180" />
            {!isCollapsed && (
              <span className="ml-3 animate-in fade-in duration-300 whitespace-nowrap">
                Sign Out
              </span>
            )}
          </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
