import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: ["./src/tests/setup.ts"],
    coverage: {
      provider: "v8",
      all: true,
      include: ["**/*.ts", "**/*.tsx"],
      exclude: [
        "**/*.spec.ts",
        "**/*.spec.tsx",
        ".next/*",
        "**/*.d.ts",
        "**/tailwind.config.ts",
        "**/mocks",
      ],
    },
  },
});
