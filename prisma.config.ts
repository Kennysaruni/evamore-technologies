import { defineConfig, env } from "prisma/config";

try {
  process.loadEnvFile(".env");
} catch {
  // .env is optional in CI/Vercel where env vars are injected
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL_UNPOOLED"),
  },
});
