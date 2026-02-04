import Image from "next/image";
import Link from "next/link";
import logo from "@/public/svgs/richie-logo.svg";
import bottom from "@/public/bottom.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-0">
      <div className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src={logo} alt="RiChei Group" width={100} height={40} />
            </Link>
            <p className="text-[#1A332F] text-base font-medium leading-relaxed max-w-[170px]">
              RiChei Assets empowers African real estate investment.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="md:col-span-1">
            <h4 className="text-[#1A332F] font-bold text-xl mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-[#1A332F] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-500 hover:text-[#1A332F] transition-colors"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="md:col-span-1">
            <h4 className="text-[#1A332F] font-bold text-xl mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-[#1A332F] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-[#1A332F] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-500 hover:text-[#1A332F] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="md:col-span-1">
            <h4 className="text-[#1A332F] font-bold text-xl mb-4">Legal</h4>
              <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-[#1A332F] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-[#1A332F] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="w-full relative h-[100px] md:h-[140px] lg:h-[140px]">
        <Image
          src={bottom}
          alt="RiChei Footer"
          fill
          className="object-cover object-top"
          quality={100}
        />
      </div>
    </footer>
  );
}
