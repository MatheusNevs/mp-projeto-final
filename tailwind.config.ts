import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'irish-grover': ["'Irish Grover'", ...fontFamily.sans],
      },
      colors: {
        Verde: "#348140",
        Vermelho: "#A43131",
        MarromClarinho: "#E1DFD7",
        Cinza: "#747474",
      },
    },
  },
  plugins: [],
} satisfies Config;
