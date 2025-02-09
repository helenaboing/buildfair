import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        background: "#0F242A",
      },
    },
  },
  plugins: [aspectRatio],
} satisfies Config;
