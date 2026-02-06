"use client";

import { useState } from "react";
import { Search, Bell, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/richie-logo.png";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/components/admin/Sidebar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    setIsClosing(false);
  };

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b bg-background px-4 md:px-8">
      {/* Mobile Menu Trigger */}
      <button
        className="mr-4 md:hidden text-muted-foreground hover:text-foreground"
        onClick={openMenu}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open Menu</span>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 flex md:hidden",
            isClosing
              ? "animate-out fade-out duration-300"
              : "animate-in fade-in duration-300",
          )}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu} />

          {/* Sidebar Panel */}
          <div
            className={cn(
              "relative flex w-64 max-w-xs flex-col bg-[#F4F4F4F4] h-full shadow-xl",
              isClosing
                ? "animate-out slide-out-to-left duration-300"
                : "animate-in slide-in-from-left duration-300",
            )}
          >
            <div className="flex h-16 items-center justify-between px-6 pt-4 pb-0 mb-6">
              <div className="w-20">
                <Image
                  src={logo}
                  alt="Logo"
                  className="object-cover w-full h-auto"
                />
              </div>
              <button
                onClick={closeMenu}
                className="rounded-full p-2 hover:bg-black/5"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close Menu</span>
              </button>
            </div>

            <nav className="flex-1 space-y-1 px-4 overflow-y-auto">
              {sidebarLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname?.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-[#1B413E] text-white"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    )}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className={cn(
                        "mr-3 h-5 w-5",
                        isActive
                          ? "brightness-0 invert"
                          : "brightness-0 opacity-60 group-hover:opacity-100",
                      )}
                    />
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="flex w-full max-w-xs lg:max-w-2xl items-center">
        <div className="relative w-full text-muted-foreground">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full rounded-md outline-none focus:outline-none border border-input bg-transparent py-2 pl-10 pr-3 text-sm placeholder:text-muted-foreground  sm:text-sm"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <button className="relative text-muted-foreground hover:text-foreground">
          <Bell className="h-6 w-6" />
          <span className="sr-only">Notifications</span>
        </button>

        <div className="flex items-center space-x-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-200">
            <div className="flex h-full w-full items-center justify-center bg-primary/80 text-white font-semibold text-sm">
              O
            </div>
          </div>
          <div className="hidden text-sm font-medium md:block text-[#1D1D1D]">
            Okwudili Goodness
          </div>
        </div>
      </div>
    </header>
  );
}
