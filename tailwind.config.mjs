import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        serif: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // 双强调色系统（CSS 变量 → 明暗自适应，见 global.css）
        accent: "rgb(var(--accent) / <alpha-value>)",   // 主：紫罗兰
        accent2: "rgb(var(--accent2) / <alpha-value>)",  // 次：青，用于区分 Research
        ink: "rgb(var(--bg) / <alpha-value>)",           // 页面底色
        surface: "rgb(var(--surface) / <alpha-value>)",  // 卡片面
      },
      maxWidth: {
        "8xl": "88rem", // 1408px 宽版心，横向填充
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -3%) scale(1.05)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-3%, 2%) scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        float: "float 14s ease-in-out infinite",
        "float-slow": "floatSlow 20s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        bob: "bob 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
