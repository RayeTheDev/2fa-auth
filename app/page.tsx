"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  console.log("Where am i ");
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-blue-800">
      <div className="space-y-6">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          Auth{" "}
        </h1>
        <p className="text-white text-lg">A simple authentications service</p>

        <div>
          <Button variant="secondary" size="lg">Sign In</Button>
        </div>
      </div>
    </main>
  );
}
