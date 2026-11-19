import { defineConfig } from "prisma/config";

try {
  process.loadEnvFile(".env");
} catch {
  // .env is optional in CI/Vercel where env vars are injected
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url:
      process.env.DATABASE_URL_UNPOOLED ||
      process.env.DATABASE_URL ||
      "postgresql://placeholder:placeholder@localhost:5432/placeholder",
  },
});
