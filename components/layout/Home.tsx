"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import icon from "@/public/icon/Vector.svg";
import asset from "@/public/svgs/asset.svg";
import assetAcademy from "@/public/svgs/asset-academy.svg";
import assetDashboard from "@/public/svgs/asset-dashboard.svg";
import { Plus, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog from "@/public/icon/blog.svg";
import coins from "@/public/icon/Coins.svg";
import cube from "@/public/icon/Cube.svg";
import graduationCap from "@/public/icon/GraduationCap.svg";
import spiral from "@/public/icon/Spiral.svg";
import house from "@/public/svgs/house.svg";
import funds from "@/public/svgs/funds.svg";
import money from "@/public/svgs/money.svg";
import grow from "@/public/svgs/grow.svg";
import bg from "@/public/svgs/bg.svg";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F9F9F9] px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-6 border border-gray-100">
            <Image src={icon} alt="icon" className="w-4 h-4" />
            <span>Who we are</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            One Group. Four Pillars.
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl font-medium">
            RiChei Assets™ is the digital extension of the RiChei Group,
            bringing transparency and access to local opportunities where land,
            trust, education, and technology empower Africans and the diaspora
            to invest and grow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
          {/* Card 1: RiChei Assets */}
          <div className="group md:col-span-2">
            <div className="relative h-[280px] md:h-[320px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src={asset}
                alt="RiChei Assets"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm z-10">
                <Image
                  src={coins}
                  alt="coins"
                  className="w-4 h-4 text-primary fill-primary/20"
                />
                <span className="font-bold text-primary text-sm">
                  RiChei Assets:
                </span>
              </div>
            </div>
            <h3 className="text-xl md:text-lg font-semibold text-primary leading-snug max-w-md">
              Fractional investment in prime
              <br className="hidden md:block" />
              Nigerian land and residential projects.
            </h3>
          </div>

          {/* Card 2: RiChei Academy */}
          <div className="group md:col-span-3">
            <div className="relative h-[280px] md:h-[320px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src={assetAcademy}
                alt="RiChei Academy"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm z-10">
                <Image
                  src={graduationCap}
                  alt="blog"
                  className="w-4 h-4 text-primary fill-primary/20"
                />
                <span className="font-bold text-primary text-sm">
                  RiChei Academy:
                </span>
              </div>
            </div>
            <h3 className="text-xl md:text-lg font-semibold text-primary leading-snug max-w-md">
              Professional real estate and investment literacy for the next
              generation of agents.
            </h3>
          </div>

          {/* Card 3: RiChei Blog */}
          <div className="group md:col-span-3">
            <div className="relative h-[280px] md:h-[320px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
              {/* Reusing assetAcademy as placeholder for Blog since explicit blog image wasn't found */}
              <Image
                src={assetAcademy}
                alt="RiChei Blog"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm z-10">
                <Image
                  src={blog}
                  alt="blog"
                  className="w-4 h-4 text-primary fill-primary/20"
                />
                <span className="font-bold text-primary text-sm">
                  RiChei Blog
                </span>
              </div>
            </div>
            <h3 className="text-xl md:text-lg font-semibold text-primary leading-snug max-w-md">
              Your source for project transparency, market data, and
              behind-the-scenes updates.
            </h3>
          </div>

          {/* Card 4: Member Dashboard */}
          <div className="group md:col-span-2">
            <div className="relative h-[280px] md:h-[320px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src={assetDashboard}
                alt="Member Dashboard"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-sm z-10">
                <Image
                  src={coins}
                  alt="cube"
                  className="w-4 h-4 text-primary fill-primary/20"
                />
                <span className="font-bold text-primary text-sm">
                  Member Dashboard
                </span>
              </div>
            </div>
            <h3 className="text-xl md:text-lg font-semibold text-primary leading-snug max-w-md">
              Your private vault for documents, ROI tracking, and NFT
              certificates.
            </h3>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F9F9F9] px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-6 border border-gray-100">
            <Image src={cube} alt="icon" className="w-4 h-4" />
            <span>The product</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            The Investor Dashboard
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl font-medium">
            No more wondering where your money is. Manage your portfolio like a
            pro.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8">
          {/* Card 1: RiChei Assets */}
          <div className="group md:col-span-3">
            <div className="relative h-[280px] md:h-[320px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100"></div>
          </div>

          {/* Card 2: RiChei Academy */}
          <div className="group md:col-span-2">
            <div className="relative h-[280px] md:h-[320px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100"></div>
          </div>

          {/* Card 3: RiChei Blog */}
          <div className="group md:col-span-2">
            <div className="relative h-[280px] md:h-[320px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100"></div>
          </div>

          {/* Card 4: Member Dashboard */}
          <div className="group md:col-span-3">
            <div className="relative h-[280px] md:h-[320px] w-full rounded-2xl overflow-hidden mb-6 bg-gray-100"></div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F9F9F9] px-4 py-2 rounded-full text-sm font-medium text-gray-600 mb-6 border border-gray-100">
            <Image src={spiral} alt="icon" className="w-4 h-4" />
            <span>The flow</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How It Works
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl font-medium">
            A flow of the step by step process from start to finish.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          {/* Card 1: Select */}
          <div className="bg-[#F5F5F5] col-span-4 rounded-lg p-8 md:p-10 relative h-[280px] overflow-hidden group">
            <h3 className="text-3xl md:text-3xl font-bold text-primary mb-2">
              1. Select
            </h3>

            <p className="font-semibold text-primary text-lg md:text-lg max-w-[230px] absolute bottom-12 z-10 leading-snug">
              Choose a verified project that fits your budget.
            </p>

            <div className="absolute bottom-0 right-0 w-[60%] h-full">
              <Image
                src={house}
                alt="Select project"
                fill
                className="object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 2: Fund */}
          <div className="bg-[#F5F5F5] col-span-4 lg:col-span-3 rounded-lg p-8 md:p-10 relative h-[280px] overflow-hidden group">
            <h3 className="text-3xl md:text-3xl font-bold text-primary mb-2">
              2. Fund
            </h3>

            <p className="font-semibold text-primary text-lg md:text-xl max-w-[230px] absolute bottom-12 z-10 leading-snug">
              Invest securely via Bank Transfer or USDT/USDC.
            </p>

            <div className="absolute bottom-0 right-0 w-[50%] h-full">
              <Image
                src={funds}
                alt="Fund investment"
                fill
                className="object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 3: Receive */}
          <div className="bg-[#F5F5F5] col-span-4 lg:col-span-3 rounded-lg p-8 md:p-10 relative h-[280px] overflow-hidden group">
            <h3 className="text-3xl md:text-3xl font-bold text-primary mb-2">
              3. Receive
            </h3>

            <p className="font-semibold text-primary text-lg md:text-xl max-w-[220px] absolute bottom-12 z-10 leading-snug">
              Get your Project Participation Tokens instantly.
            </p>

            <div className="absolute bottom-0 right-0 w-[70%] h-full translate-y-4">
              <Image
                src={money}
                alt="Receive tokens"
                fill
                className="object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Card 4: Grow */}
          <div className="bg-[#F5F5F5] col-span-4 rounded-lg p-8 md:p-10 relative h-[280px] overflow-hidden group">
            <h3 className="text-3xl md:text-3xl font-bold text-primary mb-2">
              4. Grow
            </h3>

            <p className="font-semibold text-primary text-lg md:text-xl max-w-[300px] absolute bottom-12 z-10 leading-snug">
              Track development via the Journal and watch your asset value
              appreciate.
            </p>

            <div className="absolute bottom-0 right-0 w-[50%] h-full">
              <Image
                src={grow}
                alt="Watch assets grow"
                fill
                className="object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto px-4 my-20 py-20 bg-[#F4F4F4]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Header */}
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1A332F] mb-6">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
            <p className="text-gray-500 text-lg md:max-w-[280px]">
              Everything you need to know about RiChei Assets can be answered.
              Have more questions?
            </p>
            <Link href="/contact" className="">
              <span className="text-[#1A332F] font-bold underline underline-offset-4 hover:text-primary/80">
                Contact
              </span>{" "}
              our team.
            </Link>
          </div>

          {/* Right Column: Accordion */}
          <div className="md:col-span-8 flex flex-col ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`transition-all duration-300 overflow-hidden outline-none ${
                  openIndex === index
                    ? "bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.05)] rounded-2xl border border-gray-100/50"
                    : "bg-[#F4F4F4]  hover:bg-gray-100 border-y border-y-gray-200"
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg md:text-xl font-bold text-[#1A332F]">
                    {faq.question}
                  </span>
                  <div className="shrink-0 ml-4">
                    {openIndex === index ? (
                      <X className="w-6 h-6 text-[#1A332F]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[#1A332F]" />
                    )}
                  </div>
                </button>

                <div
                  className={`px-6 text-gray-500 leading-relaxed transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-[200px] opacity-100 pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl p-8 md:p-20 text-center relative overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="RiChei Blog"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Green Overlay */}
          <div className="absolute inset-0 bg-[#1A332F]/90 rounded-2xl" />

          {/* Content - now with relative positioning to stay on top */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Don&apos;t wait to buy real Estate.
              <br />
              Buy real estate and wait.
            </h2>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Join the future of African real estate.
              <br />
              Secure your first tokenized plot today.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Button className="bg-white text-[#1A332F] hover:bg-gray-100 rounded-full text-lg h-12 px-8 w-full md:w-auto">
                Get started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full text-lg h-12 px-8 w-full md:w-auto"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "Is this solely based on cryptocurrency",
    answer:
      "Blockchain is our record-keeper, but your investment is in physical Nigerian land. The token represents your legal ownership or stake in the real estate asset.",
  },
  {
    question: "Is it possible for me to visit the land",
    answer:
      "Yes, absolutely. All our properties are accessible for physical inspection. You can schedule a visit through our platform or contact our support team.",
  },
  {
    question: "How are payments processed",
    answer:
      "Payments can be made securely via traditional bank transfers or using stablecoins like USDT/USDC for global accessibility and speed.",
  },
  {
    question: "Do you deal both on land and buildings",
    answer:
      "Currently, we focus primarily on prime land assets, but we have roadmap plans to introduce residential building projects and development opportunities.",
  },
  {
    question: "How do non-crypto users navigate",
    answer:
      "Our platform is designed for everyone. You don't need deep crypto knowledge—we handle the complexity in the background so you can invest with standard fiat currency methods if you prefer.",
  },
];
