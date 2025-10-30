"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = ({ children }) => (
  <nav className="w-full bg-blue-700 text-white px-4 py-3 flex items-center justify-between shadow">
    <div className="font-bold text-lg">LMS</div>

    <div className="hidden sm:flex space-x-4">
      <Link href="/" className="text-white">Home</Link>
      <Link href="/dashboard" className="text-white">Dashboard</Link>
      <Link href="/login" className="text-white">Login</Link>
    </div>

    {children}
  </nav>
)

export default Navbar
