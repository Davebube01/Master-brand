import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/Hero";
import HomePage from "@/components/layout/Home";

export default function Page() {
  return (
    <>
      <div className="min-h-screen bg-primary">
        <div className="p-4">
          <HeroSection />
        </div>
        <main className="">
          <HomePage />
        </main>
        <Footer />
      </div>
    </>
  );
}
