import Image from "next/image";
import Link from "next/link";
import type React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-[#1F1F1F] dark:to-[#2D2D2D]">
      <div className="w-full flex items-center px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Go to homepage">
          <Image src="/logo.png" alt="Logo" width={64} height={64} />
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md p-6">{children}</div>
      </div>
    </div>
  );
}
