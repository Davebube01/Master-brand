"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import richielogo from "@/assets/richie-logo.png";
import icon from "@/assets/icon/house-icon.svg";
import heroImage from "@/assets/hero.png";
import Link from "next/link";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Property Showcase */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1E403C] relative overflow-hidden">
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Hero Text */}
          <div className="mt-10">
            <h1 className="text-4xl xl:text-5xl font-semibold tracking-wider text-white leading-tight mb-6">
              Your access to
              <br />
              genuine tokenized
              <br />
              real estate
            </h1>
            <p className="text-white/80 text-lg max-w-md">
              Manage your finances with our app that merges saving, investing,
              and planning tools to achieve your goals.
            </p>
          </div>

          {/* Property Cards */}
           <div className="relative flex justify-center w-full px-4 mt-20">
          <div className="relative">
            {/* Main Property Image */}
            <Image
              src={heroImage}
              alt="Real Estate Property"
              className="object-contain rounded-3xl shadow-2xl h-[250px]"
              priority
            />

            {/* Enugu Residential Card - Left */}
            <div className="absolute top-[-15%] -left-[10%] bg-white p-3 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 w-[320px] hidden lg:block animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <Image src={icon} alt="logo" />
                </div>
                <span className="font-semibold text-gray-900">
                  Enugu Residential
                </span>
              </div>

              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <p className="text-xs font-semibold text-gray-800 ">
                    Status:
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">
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
                    <p className="text-md font-bold text-gray-700">500</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Current Value
                    </p>
                    <p className="text-md font-bold text-gray-700">
                      ₦2,750,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lagos Residential Card - Right */}
            <div className="absolute bottom-[-10%] -right-[5%] bg-white p-3 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 w-[320px] hidden lg:block animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <Image src={icon} alt="logo" />
                </div>
                <span className="font-semibold text-gray-900">
                  Enugu Residential
                </span>
              </div>

              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <p className="text-xs font-semibold text-gray-800 ">
                    Status:
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">
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
                    <p className="text-md font-bold text-gray-700">500</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">
                      Current Value
                    </p>
                    <p className="text-md font-bold text-gray-700">
                      ₦2,750,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-12 flex justify-center lg:justify-start">
            <Image
              src={richielogo}
              alt="RicHei Group"
              width={100}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary ">
              Welcome Back!
            </h2>
            <p className="text-gray-600">
              Log in to effectively Manage your portfolio.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@gg.com"
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-[#1E403C]/60 focus:border-transparent outline-none transition-all"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-500">i</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-[#1E403C]/60 focus:border-transparent outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Link href="/admin/dashboard">
            <button
              type="submit"
              className="w-full bg-[#1E403C] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#2a5550] transition-colors flex items-center justify-center gap-2 group"
              
            >
             
                   Login
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
             
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
