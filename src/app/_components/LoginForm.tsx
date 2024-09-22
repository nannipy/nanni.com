'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { api } from "~/utils/api";  // Decommentare se necessario

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  // const someApiMutation = api.someEndpoint.someMutation.useMutation();  // Esempio di utilizzo TRPC

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    console.log("Tentativo di login con email:", email);
    console.log("Password prima dell'invio (primi 10 caratteri):", password.substring(0, 10));
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/profile"
      });

      console.log("Risposta completa dal server:", JSON.stringify(result, null, 2));

      if (result?.error) {
        console.error("Errore di login:", result.error);
        setError(result.error);
      } else if (result?.ok) {
        console.log("Login riuscito, reindirizzamento al profilo");
        router.push("/profile");
      } else {
        console.error("Risultato del login non valido");
        setError("Si è verificato un errore durante il login");
      }
    } catch (error) {
      console.error("Errore durante il login:", error);
      setError("Si è verificato un errore durante il login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg p-4">
      <div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <label htmlFor="email" className="block mb-2 text-black">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded text-black"
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-black">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded text-black"
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-black text-white rounded hover:bg-blue-600">
        Accedi
      </button>
    </form>
  );
}
