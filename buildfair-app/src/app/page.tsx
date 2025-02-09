import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  FileText,
  BookOpen,
  GraduationCap,
  Github,
} from "lucide-react";
import AnimatedTitle from "./components/AnimatedTitle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <AnimatedTitle />
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A decentralized Ethereum protocol that automates payments and
              ensures fair construction agreements between buyers and sellers.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://github.com/helenaboing/buildfair"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Smart Contract Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for secure construction agreements
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Buyer Feature */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  👩‍💼 Buyer Protection
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Fund projects securely and approve work completion. Your
                    funds are held safely until work is verified.
                  </p>
                </dd>
              </div>
              {/* Seller Feature */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  👷 Seller Assurance
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Submit work evidence and receive guaranteed payment upon
                    buyer approval. No more payment uncertainty.
                  </p>
                </dd>
              </div>
              {/* Smart Contract Feature */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  ⚡ Smart Contract
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Automated payments, transparent transactions, and immutable
                    records on the Ethereum blockchain.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Video Demo Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Video Demo
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Watch BuildFair in Action
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how to deploy and interact with the BuildFair smart contract.
            </p>
          </div>
          <div className="mx-auto mt-16 flex justify-center">
            <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl">
              <iframe
                src="https://www.youtube.com/embed/3LFcuid21XA"
                title="BuildFair Demo & Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* User Flows Diagram */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              User Flows
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Users Interact with BuildFair
            </p>
          </div>
          <div className="mx-auto mt-16 flex justify-center">
            <Image
              src="/userflows.png"
              alt="BuildFair User Flows Diagram"
              width={1200}
              height={800}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Process
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How BuildFair Works
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <div className="grid gap-8">
              {/* Step 1 */}
              <div className="relative flex gap-x-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 text-white">
                  1
                </div>
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Project Creation
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Buyer creates a new project with project details and assigns
                    a seller.
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative flex gap-x-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 text-white">
                  2
                </div>
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Project Funding
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Buyer funds the project with ETH, which is securely held in
                    the smart contract.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative flex gap-x-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 text-white">
                  3
                </div>
                <div className="flex-auto">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    Work & Payment
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Seller completes work, buyer approves, and payment is
                    automatically released.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link
              href="https://github.com/helenaboing/buildfair"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2025 BuildFair. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
