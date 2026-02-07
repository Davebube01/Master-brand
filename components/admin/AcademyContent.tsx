"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";
import manInSuit from "@/assets/admin/img/manInSuit.png";
import woman from "@/assets/admin/img/woman.png";

interface CourseCard {
  id: string;
  title: string;
  progress: number;
  status: "In Process" | "Completed" | "Continue";
  image: any;
  dimensions?: string;
}

export default function AcademyContent() {
  const recentCourses: CourseCard[] = [
    {
      id: "1",
      title: "Property appraisal:",
      progress: 75,
      status: "In Process",
      image: woman,
    },
    {
      id: "2",
      title: "Final inspection:",
      progress: 100,
      status: "Completed",
      image: manInSuit,
      dimensions: "309.71 Fill × 179",
    },
    {
      id: "3",
      title: "Land verification:",
      progress: 50,
      status: "Continue",
      image: manInSuit,
    },
  ];

  const recommendedCourses: CourseCard[] = [
    {
      id: "4",
      title: "Property appraisal:",
      progress: 75,
      status: "In Process",
      image: manInSuit,
    },
    {
      id: "5",
      title: "Final inspection:",
      progress: 100,
      status: "Completed",
      image: manInSuit,
    },
    {
      id: "6",
      title: "Land verification:",
      progress: 50,
      status: "Continue",
      image: manInSuit,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Process":
        return "text-gray-600";
      case "Completed":
        return "text-gray-600";
      case "Continue":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              Start Learning
            </h1>
            <button className="flex items-center gap-2 rounded-sm border bg-white px-3 py-1.5 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-muted-foreground shadow-sm hover:bg-gray-50">
              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
              This Month
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 rotate-90" />
            </button>
          </div>
      </div>

      {/* Hero Banner */}
      <div className="relative mb-8 rounded-2xl overflow-hidden bg-linear-to-r from-[#1E403C] via-[#1E403C]/80 md:to-white to-[#1E403C] h-[200px] md:h-[250px]">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full md:w-1/2 px-6 md:px-12 z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Welcome back!
            </h2>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Professional real estate and
              <br />
              investment literacy for the next
              <br />
              generation of agents.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
            <Image
              src={manInSuit}
              alt="Professional instructor"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Recents Section */}
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Recents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#F8F9FB] rounded-xl overflow-hidden hover:shadow-xs p-4 transition-shadow "
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {course.dimensions && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    {course.dimensions}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-600 mb-3">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#204440] h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-semibold text-primary">
                        {course.progress}%
                      </span>
                      <button
                        className={`flex text-primary items-center border px-2 rounded gap-1 text-sm font-medium ${getStatusColor(
                          course.status,
                        )} hover:underline`}
                      >
                        {course.status}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
          Recommended for you
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#F8F9FB] rounded-xl overflow-hidden hover:shadow-xs p-4 transition-shadow "
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-600 mb-3">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#204440] h-2 rounded-full transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-semibold text-primary">
                        {course.progress}%
                      </span>
                      <button
                        className={`flex items-center gap-1 text-sm font-medium  border px-2 rounded ${getStatusColor(
                          course.status,
                        )} hover:underline`}
                      >
                        {course.status}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
