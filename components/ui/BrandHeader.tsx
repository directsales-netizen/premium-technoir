"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function BrandHeader() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-transparent">
      <Link href="/" className="flex items-center gap-3">
        <div className="w-14 h-14 relative">
          <Image
            src="/brand/logo.png"
            alt="Premium TechNoir logo"
            fill
            sizes="56px"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <span className="hidden md:inline-block font-semibold text-lg">Premium TechNoir</span>
      </Link>
    </header>
  );
}
