'use client'

import { useRouter } from 'next/navigation'

export default function LoginButton() {
  const router = useRouter()

  const handleLogin = () => {
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Accedi
    </button>
  )
}