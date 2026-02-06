import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div>
        <h1 className="text-9xl font-bold tracking-tighter text-primary">
          404
        </h1>
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mx-auto max-w-md text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have
          been removed, renamed, or doesn't exist.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
