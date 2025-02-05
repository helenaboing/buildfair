import Link from "next/link";
import {
  Building2,
  FileText,
  BookOpen,
  GraduationCap,
  Github,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e6d02] to-[#152c16] text-white">
      {/* Hero Section */}
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center gap-2 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="animate-in fade-in slide-in-from-bottom-3 duration-1000">
              🛠️
            </span>
            <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Build<span className="text-[hsl(120,100%,70%)]">Fair</span>
            </h1>
            <span className="animate-in fade-in slide-in-from-bottom-3 duration-1000">
              🏗️
            </span>
          </div>
          <p className="animate-in fade-in slide-in-from-bottom-5 max-w-2xl text-center text-2xl text-gray-200 duration-1000">
            A smart contract solution for transparent and secure construction
            agreements
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-6 mt-8 flex gap-4 duration-1000">
            <Link
              href="/create-contract"
              className="rounded-full bg-[hsl(120,100%,70%)] px-8 py-3 font-semibold text-black transition-colors hover:bg-[hsl(120,100%,75%)]"
            >
              Get Started →
            </Link>
            <Link
              href="/documentation"
              className="rounded-full bg-white/10 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="animate-in fade-in slide-in-from-bottom-8 grid grid-cols-1 gap-6 duration-1000 sm:grid-cols-3 md:gap-8">
          <Link
            className="group flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-6 text-white transition-all hover:scale-105 hover:bg-white/20"
            href="/create-contract"
          >
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-[hsl(120,100%,70%)]" />
              <h3 className="text-2xl font-bold">Create Contract</h3>
            </div>
            <div className="text-lg text-gray-200">
              Start a new construction agreement with milestone-based payments
              and jury protection
            </div>
          </Link>
          <Link
            className="group flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-6 text-white transition-all hover:scale-105 hover:bg-white/20"
            href="/manage-contract"
          >
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-[hsl(120,100%,70%)]" />
              <h3 className="text-2xl font-bold">Manage Contract</h3>
            </div>
            <div className="text-lg text-gray-200">
              Track milestones, approve work, and handle payments for your
              existing contracts
            </div>
          </Link>
          <Link
            className="group flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-6 text-white transition-all hover:scale-105 hover:bg-white/20"
            href="/documentation"
          >
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-[hsl(120,100%,70%)]" />
              <h3 className="text-2xl font-bold">Documentation</h3>
            </div>
            <div className="text-lg text-gray-200">
              Learn how BuildFair works, from smart contracts to dispute
              resolution
            </div>
          </Link>
        </div>

        {/* Bottom Links */}
        <div className="animate-in fade-in slide-in-from-bottom-10 mt-12 flex flex-wrap justify-center gap-4 duration-1000">
          <Link
            href="/whitepaper"
            className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20"
          >
            <GraduationCap className="h-5 w-5" />
            Read Whitepaper
          </Link>
          <Link
            href="https://github.com/helenaboing/buildfair"
            className="flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/20"
            target="_blank"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
