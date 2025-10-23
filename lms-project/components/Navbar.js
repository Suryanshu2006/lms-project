import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold">LMS</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700">Home</Link>
          <Link href="/dashboard" className="text-gray-700">Dashboard</Link>
          <Link href="/login" className="text-gray-700">Login</Link>
        </div>
      </div>
    </nav>
  )
}
