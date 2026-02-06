"use client";

import Image from "next/image";
import {
  Calendar,
  ChevronRight,
  Download,
  Plus,
  BadgeCheck,
  AlertCircle,
  ArrowRight,
  Check,
} from "lucide-react";
import bg from "@/assets/bg.png";
import money from "@/assets/admin/money.svg";
import cap from "@/assets/icon/GraduationCap.svg";

// Assets
import residentImg from "@/assets/admin/img/resident.png";
import manImg from "@/assets/admin/img/man.png";
import cash from "@/assets/admin/cash.svg";
import coin from "@/assets/admin/Coinn.svg";
import value from "@/assets/admin/value.svg";
import pie from "@/assets/admin/ChartPie.svg";
import documentImg from "@/assets/admin/img/document.png";

export default function DashboardContent() {
  return (
    <div className="space-y-6 md:space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
          Dashboard
        </h1>
        <button className="flex items-center gap-2 rounded-md border bg-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-muted-foreground shadow-sm hover:bg-gray-50">
          <Calendar className="h-3 w-3 md:h-4 md:w-4" />
          This Month
          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 rotate-90" />
        </button>
      </div>

      {/* Portfolio Card */}
      <div className="relative overflow-hidden rounded-xl bg-[#0D2926] p-6 md:p-8 text-white shadow-lg">
        {/* Background Pattern (Abstract) */}
        <Image
          src={bg}
          alt="RiChei Blog"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#1A332F]/90 rounded-xl" />

        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-white">
              <div className="flex items-center gap-2">
                <Image
                  src={money}
                  alt="Money"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
                Total Portfolio value
              </div>
              <div className="flex items-center gap-2 rounded-full px-2 py-1 text-white">
                <BadgeCheck
                  className="h-4 w-4 md:h-5 md:w-5 text-primary"
                  fill="white"
                />
                Verified investor (Tier 3)
              </div>
            </div>
            <div className="flex flex-wrap items-baseline gap-2 md:gap-4">
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                ₦6,850,000<span className="text-gray-400">.00</span>
              </h2>
              <span className="text-xs text-gray-100 md:text-sm">
                10%+ Since last week
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 transition-colors">
              <Plus className="h-5 w-5 font-medium text-white bg-gray-500 rounded-full p-1" />
              Invest Now
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-white bg-white px-6 py-3 text-sm font-medium hover:bg-gray-100 text-gray-500 transition-colors">
              <Download className="h-4 w-4" />
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* My Projects Section */}
        <div className="rounded-2xl bg-[#F8F9FB] p-4 shadow-xs md:col-span-2 md:p-6">
          <div className="mb-4 flex items-center justify-between md:mb-6">
            <h3 className="text-lg font-semibold text-primary/80 md:text-xl">
              My projects
            </h3>
            <div className="flex items-center gap-2 text-base font-semibold text-muted-foreground md:text-lg">
              <span>1 of 3</span>
              <button className="rounded-full p-1 hover:bg-gray-100">
                <ArrowRight className="h-5 w-5 bg-primary text-white rounded-full p-1 md:h-6 md:w-6" />
              </button>
            </div>
          </div>

          <div>
            <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl md:h-64">
              <Image
                src={residentImg}
                alt="Enugu Residential Estate"
                className="object-cover transition-transform duration-500 hover:scale-105"
                fill
              />
              <div className="absolute right-3 top-3 flex items-center gap-2 rounded-lg bg-white px-2 py-1 text-[10px] font-semibold text-[#0D2926] shadow-md md:right-4 md:top-4 md:px-3 md:py-1.5 md:text-xs">
                <AlertCircle
                  className="h-3 w-3 text-white bg-yellow-500 rounded-full md:h-4 md:w-4"
                  fill="#F59E0B"
                />
                Under Construction
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-2 md:mb-5 md:flex-row md:items-center md:justify-between md:gap-4">
              <div>
                <h4 className="text-base font-semibold text-[#626262] md:text-lg">
                  Enugu Residential Estate (Phase 1)
                </h4>
              </div>
              <div className="text-sm font-semibold text-gray-800 md:text-base">
                ID: <span className="text-primary/60">#RIC-EN-001</span>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              <h5 className="text-sm font-bold text-gray-500 md:text-base">
                Progress tracker
              </h5>
              <div className="flex flex-wrap items-center gap-y-3 gap-x-4 text-xs md:gap-8 md:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Land Clearing</span>
                  <span className="flex items-center gap-1 rounded px-2 py-0.5 font-semibold text-green-600">
                    Done{" "}
                    <Check className="w-3 h-3 text-white bg-green-600 rounded-full p-0.5" />
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Perimeter Fencing</span>
                  <span className="font-semibold text-orange-500">Pending</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Internal Road Network</span>
                  <span className="font-bold text-gray-600">70% Done</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academy Section */}
        <div className="flex flex-col justify-end">
          <div className="flex h-full flex-col rounded-2xl bg-[#F8F9FB] p-4 shadow-xs md:h-[80%] md:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Image
                src={cap}
                alt="Academy"
                className="object-cover w-5 md:w-6"
              />
              <h3 className="text-sm font-semibold text-[#0D2926] md:text-base">
                RicHei Academy:
              </h3>
            </div>

            <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl md:h-48">
              <Image src={manImg} alt="Academy" className="object-cover" fill />
            </div>

            <div className="mt-auto space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-gray-600">Land verification:</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-[#1B413E]/90"
                    style={{ width: "50%" }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-[#0D2926]/80 md:text-2xl">
                  50%
                </span>
                <button className="flex items-center gap-2 rounded-md border px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors md:px-4 md:text-sm">
                  Continue
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stat card */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Stake */}
        <div className="flex flex-col justify-between rounded-md bg-[#F8F9FB] p-4 shadow-xs">
          <div className="mb-3">
            <Image src={cash} alt="cash" className="w-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#0D2926]">Total Stake</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#0D2926]">₦500K</span>
              <span className="text-xs font-medium text-[#0D2926]/60">
                Initial stake
              </span>
            </div>
          </div>
        </div>

        {/* Token Balance */}
        <div className="flex flex-col justify-between rounded-md bg-[#F8F9FB] p-4 shadow-xs">
          <div className="mb-3">
            <Image src={coin} alt="cash" className="w-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#0D2926]">
              Token Balance
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-[#0D2926]">100</span>
              <span className="text-sm font-bold text-[#0D2926]/40">REPH1</span>
              <span className="ml-1 text-xs font-medium text-[#0D2926]/60">
                (Cost: ₦5k/ea)
              </span>
            </div>
          </div>
        </div>

        {/* Current Value */}
        <div className="flex flex-col justify-between rounded-md bg-[#F8F9FB] p-4 shadow-xs">
          <div className="mb-3">
            <Image src={value} alt="cash" className="w-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#0D2926]">
              Current Value
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#0D2926]">₦571K</span>
              <span className="text-xs font-medium text-[#0D2926]/60">
                (Appreciated)
              </span>
            </div>
          </div>
        </div>

        {/* Total ROI */}
        <div className="flex flex-col justify-between rounded-md bg-[#F8F9FB] p-4 shadow-xs">
          <div className="mb-3">
            <Image src={pie} alt="cash" className="w-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#0D2926]">Total ROI</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#0D2926]">₦71,000</span>
              <span className="text-xs font-bold text-[#0D2926]/60">
                +14.2%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#626262]">Documents</h2>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-[#626262]">
            <BadgeCheck
              className="h-5 w-5 text-white"
              fill="#626262"
            />
            IPFS Secured
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 bg-[#F8F9FB]">
          {/* Survey Plan */}
          <div className="overflow-hidden p-4 ">
            <h3 className="mb-3 text-base font-bold text-[#626262] text-opacity-80">
              Survey Plan
            </h3>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={documentImg}
                alt="Survey Plan"
                className="object-contain p-2"
                fill
              />
            </div>
            <div className="flex items-start gap-2 ">
              <BadgeCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-white"
                fill="#204440"
              />
              <p className="text-sm font-semibold text-[#204440]">Verified by:</p>
              
            </div>
            <p className="text-sm font-medium text-[#204440] mb-4">
                
                Enugu State Ministry of Lands.
              </p>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#204440] py-2.5 text-sm font-medium text-white hover:bg-[#0D2926]/90 transition-colors">
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>

          {/* Digital Deed */}
          <div className="overflow-hidden p-4 ">
            <h3 className="mb-3 text-base font-bold text-[#626262] text-opacity-80">
              Digital Deed
            </h3>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={documentImg}
                alt="Digital Deed"
                className="object-contain p-2"
                fill
              />
            </div>
            <p className="text-sm font-medium text-[#204440] min-h-[44px] mb-4">
              The Digital Deed on the <br />
              Ethereum network.
            </p>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#204440] py-2.5 text-sm font-medium text-white hover:bg-[#0D2926]/90 transition-colors">
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>

          {/* Allocation Letter */}
          <div className="overflow-hidden p-4 ">
            <h3 className="mb-3 text-base font-bold text-[#626262] text-opacity-80">
              Allocation Letter
            </h3>
            <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={documentImg}
                alt="Allocation Letter"
                className="object-contain p-2"
                fill
              />
            </div>
            <p className="text-sm font-medium text-[#204440] min-h-[44px] mb-4">
              Personal proof of plot <br />
              assignment.
            </p>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#204440] py-2.5 text-sm font-medium text-white hover:bg-[#0D2926]/90 transition-colors">
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
