"use client";

import logo from "@/assets/richie-logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import heroImage from "@/assets/hero.png";
import icon from "@/assets/icon/house-icon.svg";
import { useState } from "react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl">
      <nav className="flex items-center justify-between text-primary py-5 px-4 max-w-5xl mx-auto relative z-50">
        <div>
          <Image src={logo} alt="logo" className="w-14 md:w-16 " />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 font-medium">
            <Link href="/">
              <li>Home</li>
            </Link>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, "features")}
              className="cursor-pointer"
            >
              <li>Features</li>
            </a>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "faq")}
              className="cursor-pointer"
            >
              <li>FAQ</li>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="cursor-pointer"
            >
              <li>Contact us</li>
            </a>
            <Button className="bg-[#263330] text-white hover:bg-[#263330]/90 rounded-full text-sm">
              Learn More
            </Button>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 rounded-b-2xl md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-300">
            <ul className="flex flex-col gap-4 font-medium text-center">
              <a
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}
                className="cursor-pointer"
              >
                <li className="py-2 hover:bg-gray-50 rounded-lg">Home</li>
              </a>
              <a
                href="#features"
                onClick={(e) => handleSmoothScroll(e, "features")}
                className="cursor-pointer"
              >
                <li className="py-2 hover:bg-gray-50 rounded-lg">Features</li>
              </a>
              <a
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, "faq")}
                className="cursor-pointer"
              >
                <li className="py-2 hover:bg-gray-50 rounded-lg">FAQ</li>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className="cursor-pointer"
              >
                <li className="py-2 hover:bg-gray-50 rounded-lg">Contact us</li>
              </a>
              <div className="pt-2">
                <Button className="w-full bg-[#263330] text-white hover:bg-[#263330]/90 rounded-full text-sm">
                  Learn More
                </Button>
              </div>
            </ul>
          </div>
        )}
      </nav>

      <section className="relative w-full overflow-hidden py-12 z-0 min-h-screen">
        {/* Grid Background with filled cells */}
        <div className="absolute inset-0 -z-10 mask-[linear-gradient(to_bottom,transparent,white)]">
          {/* Base grid */}
          <div className="rounded-2xl h-full w-full bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[80px_80px]" />

          {/* Filled grid cells - inverted pattern */}
          <div className="absolute inset-0">
            {/* Bottom left area (was Top left) */}
            <div className="absolute bottom-[10%] left-[15%] w-[80px] h-[80px] bg-[#e5e7eb]" />
            <div className="absolute bottom-[10%] left-[calc(15%+160px)] w-[80px] h-[80px] bg-[#e5e7eb]" />
            <div className="absolute bottom-[calc(10%+80px)] left-[calc(15%+80px)] w-[80px] h-[80px] bg-[#e5e7eb]" />

            {/* Bottom right area (was Top right) */}
            <div className="absolute bottom-[15%] right-[10%] w-[80px] h-[80px] bg-[#e5e7eb]" />
            <div className="absolute bottom-[15%] right-[calc(10%+80px)] w-[80px] h-[80px] bg-[#e5e7eb]" />
            <div className="absolute bottom-[calc(15%+80px)] right-[calc(10%+160px)] w-[80px] h-[80px] bg-[#e5e7eb]" />

            {/* Top left area (was Bottom left) */}
            <div className="absolute top-[25%] left-[8%] w-[80px] h-[80px] bg-[#e5e7eb]" />
            <div className="absolute top-[25%] left-[calc(8%+80px)] w-[80px] h-[80px] bg-[#e5e7eb]" />

            {/* Top right area (was Bottom right) */}
            <div className="absolute top-[20%] right-[20%] w-[80px] h-[80px] bg-[#e5e7eb]" />
            <div className="absolute top-[20%] right-[calc(20%+80px)] w-[80px] h-[80px] bg-[#e5e7eb]" />
            <div className="absolute top-[20%] right-[calc(20%+160px)] w-[80px] h-[80px] bg-[#e5e7eb]" />
            <div className="absolute top-[calc(20%+80px)] right-[calc(20%+240px)] w-[80px] h-[80px] bg-[#e5e7eb]" />
          </div>
        </div>

        {/* Hero Text Section */}
        <div className="text-center mb-12 px-4 z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto font-semibold text-[#2c3d3a] mb-4">
            Your access to genuine tokenized real estate
          </h1>
          <p className="text-lg md:text-2xl max-w-xl text-gray-600 mx-auto mb-8 leading-relaxed font-semibold">
            Manage your finances with our app that merges saving, investing, and
            planning tools to achieve your goals.
          </p>
          <Button className="bg-[#263330] hover:bg-[#263330]/90 text-white py-6 rounded-full text-base font-medium shadow-lg">
            Get started
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* Image Section with Floating Cards */}
        <div className="relative flex justify-center w-full px-4 mt-8">
          <div className="relative">
            {/* Main Property Image */}
            <Image
              src={heroImage}
              alt="Real Estate Property"
              className="object-contain rounded-3xl shadow-2xl"
              priority
            />

            {/* Enugu Residential Card - Left */}
            <div className="absolute top-[15%] -left-[30%] bg-white p-6 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 w-[400px] hidden lg:block animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <Image src={icon} alt="logo" />
                </div>
                <span className="font-semibold text-gray-900 text-lg">
                  Enugu Residential
                </span>
              </div>

              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <p className="text-sm font-semibold text-gray-800 ">
                    Status:
                  </p>
                  <p className="text-sm text-gray-500 leading-snug">
                    Site clearing
                    <br />
                    100% complete.
                  </p>
                </div>

                <div className="flex gap-6 bg-gray-100/60 p-2 w-full rounded">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Holdings:
                    </p>
                    <p className="text-xl font-bold text-gray-700">500</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Current Value
                    </p>
                    <p className="text-xl font-bold text-gray-700">
                      ₦2,750,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lagos Residential Card - Right */}
            <div className="absolute bottom-[20%] -right-[30%] bg-white p-5 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 w-[400px] hidden lg:block animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <Image src={icon} alt="logo" />
                </div>
                <span className="font-semibold text-gray-900 text-lg">
                  Lagos Residential
                </span>
              </div>

              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <p className="text-sm font-semibold text-gray-800 ">
                    Status:
                  </p>
                  <p className="text-sm text-gray-500 leading-snug">
                    Site clearing
                    <br />
                    100% complete.
                  </p>
                </div>

                <div className="flex gap-6 bg-gray-100/60 p-2 w-full rounded">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Holdings:
                    </p>
                    <p className="text-xl font-bold text-gray-700">1000</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Current Value
                    </p>
                    <p className="text-xl font-bold text-gray-700">
                      ₦5,500,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
