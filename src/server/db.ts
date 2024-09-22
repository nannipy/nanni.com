import { PrismaClient } from "@prisma/client";
import { env } from "../env.js";

// Definiamo un tipo per env
type Env = {
  NODE_ENV: 'development' | 'production' | 'test';
  // Aggiungi qui altre variabili d'ambiente se necessario
};

// Asseriamo che env sia di tipo Env
const typedEnv = env as Env;

const createPrismaClient = () =>
  new PrismaClient({
    log:
      typedEnv.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (typedEnv.NODE_ENV !== "production") globalForPrisma.prisma = db;
