import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://k-k.kobe-kosen.org",
  trailingSlash: "always",
  compressHTML: false,
  markdown: {
    syntaxHighlight: false,
  },
})
