import { PrismaPg } from "@prisma/adapter-pg";
import { attachDatabasePool } from "@vercel/functions";
import { Pool } from "pg";
import { PrismaClient } from "@/lib/generated/prisma/client";

declare global {
  var __evamorePrisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set.");
  }

  const pool = new Pool({
    connectionString,
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });

  attachDatabasePool(pool);

  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

export function getPrisma(): PrismaClient {
  if (!globalThis.__evamorePrisma) {
    globalThis.__evamorePrisma = createPrismaClient();
  }
  return globalThis.__evamorePrisma;
}
