import React from "react";
import { SidebarProvider } from "@/contexts/SidebarContext";
import AdminLayoutContent from "@/components/admin/AdminLayoutContent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SidebarProvider>
  );
}
