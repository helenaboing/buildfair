"use client";

import { motion } from "framer-motion";

export default function AnimatedTitle() {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      <motion.span
        animate={{
          rotate: [0, -20, 0, 20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ display: "inline-block", transformOrigin: "bottom center" }}
      >
        🛠️
      </motion.span>{" "}
      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Build
      </span>
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Fair
      </span>{" "}
      🏗️
    </h1>
  );
}
