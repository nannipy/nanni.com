'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "../_components/LogoutButton";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Caricamento...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-4">Profilo Utente</h1>
      {session?.user && (
        <div>
          <p>Nome: {session.user.name}</p>
          <p>Email: {session.user.email}</p>
          <div className="mt-4">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}