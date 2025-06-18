"use client";

import { ModeToggle } from "@/components/mode-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-5 right-10">
        <ModeToggle />
      </div>
      <div className="w-full flex h-svh flex-col items-center justify-content-center">
        <div className="w-full max-w-xl p-6">{children}</div>
      </div>
    </div>
  );
}
