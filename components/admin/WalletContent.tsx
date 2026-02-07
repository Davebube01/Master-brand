import {
  ArrowDownCircle,
  ArrowUpCircle,
  BadgeCheck,
  Calendar,
  ChevronRight,
  Copy,
  Download,
  Plus,
} from "lucide-react";
import Image from "next/image";

// assets
import bg from "@/assets/bg.png";
import money from "@/assets/admin/money.svg";
import moneyWavy from "@/assets/admin/img/MoneyWavy.png";

// Sample data for recent transactions
const recentTransactions = [
  {
    id: 1,
    type: "deposit",
    title: "Money Deposit",
    time: "Today 12:45 AM",
    amount: 500.0,
  },
  {
    id: 2,
    type: "withdrawal",
    title: "Money Withdrawal",
    time: "Today 12:45 AM",
    amount: -500.0,
  },
  {
    id: 3,
    type: "deposit",
    title: "Money Deposit",
    time: "Today 12:45 AM",
    amount: 500.0,
  },
  {
    id: 4,
    type: "withdrawal",
    title: "Money Withdrawal",
    time: "Today 12:45 AM",
    amount: -500.0,
  },
  {
    id: 5,
    type: "deposit",
    title: "Money Deposit",
    time: "Today 12:45 AM",
    amount: 500.0,
  },
];

// Sample data for referrals
const referrals = [
  {
    id: 1,
    name: "Frank Gruillo",
    time: "Today 12:45 AM",
    amount: 20.0,
  },
  {
    id: 2,
    name: "Sarah Connors",
    time: "Today 1:15 AM",
    amount: 20.0,
  },
  {
    id: 3,
    name: "John Doe",
    time: "Today 2:30 AM",
    amount: 20.0,
  },
  {
    id: 4,
    name: "Alice Smith",
    time: "Today 3:00 AM",
    amount: 20.0,
  },
  {
    id: 5,
    name: "Alice Smith",
    time: "Today 3:00 AM",
    amount: 20.0,
  },
];

export default function WalletContent() {
  return (
    <div className="space-y-6 md:space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="space-y-4 col-span-1 md:col-span-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              Wallet overview
            </h1>
            <button className="flex items-center gap-2 rounded-sm border bg-white px-3 py-1.5 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-muted-foreground shadow-sm hover:bg-gray-50">
              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
              This Month
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 rotate-90" />
            </button>
          </div>

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

            <div className="relative z-10 flex flex-col justify-between gap-6 ">
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
                    My balance
                  </div>
                </div>
                <div className=" items-baseline gap-2 md:gap-4">
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
        </div>

        {/* Referrals Card */}
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            Referrals
          </h1>
          <div className="bg-[#DCE1E1] rounded-xl p-8 space-y-4 h-[247px] flex items-center relative overflow-hidden">
            <div className="space-y-3 w-[60%] z-10">
              <h3 className="text-2xl md:text-2xl font-semibold text-gray-800">
                Earn free $20 on each referral you make
              </h3>
              <button className="flex items-center gap-2 bg-[#1D3E3A] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1A332F] transition-colors">
                <Plus className="h-4 w-4" />
                Copy code
              </button>
            </div>
            <div className="absolute right-0 bottom-0 w-[45%] h-full">
              <Image
                src={moneyWavy}
                alt="Money illustration"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Recent Transactions and Recents */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-1 md:col-span-3 space-y-4">
          {/* Recent Transactions Section */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">
              Recent Transactions
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        transaction.type === "deposit"
                          ? "bg-green-50"
                          : "bg-red-50"
                      }`}
                    >
                      {transaction.type === "deposit" ? (
                        <ArrowUpCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowDownCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">
                        {transaction.title}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500">
                        {transaction.time}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`font-semibold text-sm md:text-base ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}₦
                    {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recents Section - Right Column */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">Recents</h2>
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 space-y-4">
              {referrals.map((referral) => (
                <div
                  key={referral.id}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                >
                  <div>
                    <p className="font-medium text-sm md:text-base">
                      Referred &quot;{referral.name}&quot;
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {referral.time}
                    </p>
                  </div>
                  <p className="font-semibold text-sm md:text-base text-green-600">
                    +${referral.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
