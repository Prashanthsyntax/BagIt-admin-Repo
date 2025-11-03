'use client';

import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import HomeFooter from "@/components/HomeFooter";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonial />
      <Subscribe />
      <HomeFooter />
    </div>
  );
}
