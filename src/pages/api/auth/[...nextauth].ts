import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Email o password mancanti");
          throw new Error("Email e password sono richiesti");
        }
        console.log("Credenziali ricevute:", {
          email: credentials.email,
          passwordLength: credentials.password.length,
          passwordStart: credentials.password.substring(0, 10)
        });
        console.log("Cercando l'utente nel database...");
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        if (!user) {
          console.log("Utente non trovato");
          throw new Error("Nessun utente trovato con questa email");
        }
        console.log("Utente trovato, verificando la password...");
        console.log("Password fornita:", credentials.password);
        console.log("Password hashata nel database:", user.password);

        console.log("Confronto diretto:", credentials.password === user.password);
        const isPasswordValid = await compare(credentials.password, user.password);

        console.log("Risultato della verifica della password:", isPasswordValid);

        if (!isPasswordValid) {
          console.log("Password non valida");
          throw new Error("Password non valida");
        }
        console.log("Autenticazione riuscita");
        return { id: user.id.toString(), email: user.email, name: user.name };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);