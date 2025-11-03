import Link from "next/link";
import React from "react";
import Badge from "./Badge";
import { Brand } from "./Brand";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center bg-black text-white text-sm pb-60 pt-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg')] bg-top bg-no-repeat">
      <nav className="flex items-center border mx-4 w-full max-w-4xl justify-between border-slate-700 px-4 py-2.5 rounded-full text-white">
        {/* Logo */}
        <a href="/">
          <b className="text-2xl">BagIt</b>
        </a>

        {/* Menu */}
        <div className="flex items-center gap-2">
          <a
            className="px-4 py-2 border border-white/10 bg-white/10 font-medium rounded-full"
            href="#"
          >
            Home
          </a>
          <a className="px-4 py-2" href="#">
            Products
          </a>
          <a className="px-4 py-2" href="#">
            Stories
          </a>
          <a className="px-4 py-2" href="#">
            Pricing
          </a>
          <a className="px-4 py-2" href="#">
            Docs
          </a>
        </div>

        {/* CTA */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition">
          Contact Us
        </button>
      </nav>

      {/* Hero Content */}
      <div className="mt-20 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold max-w-4xl mx-auto bg-linear-to-r from-white to-[#748298] text-transparent bg-clip-text">
          Unlock Growth with Proven Business Solutions
        </h1>
        <p className="text-slate-300 md:text-base max-w-2xl mx-auto mt-3">
          Unlock potential with tailored strategies designed for success.
          Simplify challenges, maximize results, and stay ahead in the
          competitive market.
        </p>

        <div className="flex flex-col items-center gap-4 mt-8 text-sm">
          {/* Buttons (side by side) */}
          <div className="flex justify-center gap-2">
            <Link
              href="/auth"
              className="px-6 py-2.5 bg-green-600 hover:bg-green-700 transition rounded-full"
            >
              Get Started
            </Link>
            <button className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 py-2.5">
              <span>Learn More</span>
              <svg
                className="mt-0.5"
                width="6"
                height="8"
                viewBox="0 0 6 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25.5 4.75 4l-3.5 3.5"
                  stroke="currentColor"
                  strokeOpacity=".4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Badge below buttons */}
          <div className="mt-2">
            <Badge />
          </div>

          {/* Brand below badge */}
          <div className="mt-8">
            <Brand />
          </div>
        </div>
      </div>
    </section>
  );
}
