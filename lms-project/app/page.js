import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the LMS Project</h1>
        <p className="mb-6">A starter full-stack Learning Management System using Next.js, MongoDB, Tailwind CSS and NextAuth.</p>
        <div className="space-x-4">
          <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
          <Link href="/dashboard" className="px-4 py-2 bg-green-600 text-white rounded">Dashboard</Link>
        </div>
      </div>
    </main>
  )
}
