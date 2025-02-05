import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e6d02] to-[#152c16] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Build<span className="text-[hsl(120,100%,70%)]">Fair</span>
        </h1>
        <p className="text-2xl text-center max-w-2xl">
          A smart contract solution for transparent and secure construction agreements
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/create-contract"
          >
            <h3 className="text-2xl font-bold">Create Contract →</h3>
            <div className="text-lg">
              Start a new construction agreement with milestone-based payments and jury protection
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/manage-contract"
          >
            <h3 className="text-2xl font-bold">Manage Contract →</h3>
            <div className="text-lg">
              Track milestones, approve work, and handle payments for your existing contracts
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/documentation"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn how BuildFair works, from smart contracts to dispute resolution
            </div>
          </Link>
        </div>
        <div className="mt-8 flex gap-4">
          <Link
            href="/whitepaper"
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white hover:bg-white/20"
          >
            Read Whitepaper
          </Link>
          <Link
            href="https://github.com/yourusername/buildfair"
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white hover:bg-white/20"
            target="_blank"
          >
            View on GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}
