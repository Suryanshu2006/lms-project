import { getSession } from "next-auth/react"
import Navbar from '../../components/Navbar'

export default async function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="mb-4">Sign in using NextAuth providers configured in your environment.</p>
        <div className="border p-4 rounded bg-white">
          <p className="text-sm text-gray-600">Provider buttons will appear here once NextAuth is configured.</p>
        </div>
      </div>
    </main>
  )
}
