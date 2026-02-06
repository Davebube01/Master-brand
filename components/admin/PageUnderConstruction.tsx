import Link from "next/link";
import { Construction } from "lucide-react";

export default function PageUnderConstruction() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-6">
        <Construction className="h-12 w-12 text-primary" />
      </div>
      <h1 className="mb-2 text-2xl font-bold tracking-tight">
        Page Under Construction
      </h1>
      <p className="mb-6 max-w-sm text-muted-foreground">
        We're currently working on this feature. Please check back later for
        updates.
      </p>

      {/* Optional: Add a button to go back or somewhere else if needed, 
          but usually for dashboard inner pages, just showing the message is enough 
          as the sidebar is always visible. */}
    </div>
  );
}
