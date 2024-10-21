import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://www.dyama.net",
  trailingSlash: "always",
  compressHTML: false,
  markdown: {
    syntaxHighlight: false,
  },
})
