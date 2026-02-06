"use client";

import React from "react";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { useSidebar } from "@/contexts/SidebarContext";
import { cn } from "@/lib/utils";

export default function AdminLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar - Fixed width */}
      <Sidebar />

      {/* Main Content Area */}
      <div
        className={cn(
          "flex flex-1 flex-col overflow-hidden transition-all duration-300 ease-in-out",
          isCollapsed ? "pl-0 md:pl-18" : "pl-0 md:pl-48",
        )}
      >
        {/* Header - Sticky top */}
        <Header />

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-muted/30 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
