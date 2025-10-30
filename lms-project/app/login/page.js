"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import Navbar from '../../components/Navbar'

export default function LoginPage() {
  const router = useRouter()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [dbStatus, setDbStatus] = useState({ connected: false, message: 'Checking connection...' })

  useEffect(() => {
    // Check MongoDB connection
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setDbStatus({ connected: true, message: `Connected to ${data.host}` })
      })
      .catch(() => {
        setDbStatus({ connected: false, message: 'Database connection failed' })
      })
  }, [])

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      toast.error('Email and password are required.')
      return
    }
    setLoading(true)
    const loadingToast = toast.loading('Signing you in...', { duration: Infinity })
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) {
        toast.dismiss(loadingToast)
        toast.error(data.error || 'Invalid credentials')
        setLoading(false)
        return
      }

      toast.dismiss(loadingToast)
      toast.success('Login successful! Redirecting...')
      setTimeout(() => {
        router.push(data.redirect || '/')
      }, 300)
    } catch (err) {
      toast.dismiss(loadingToast)
      toast.error('An unexpected error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-md mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <p className="mb-4">Sign in with your email and password.</p>

        <div className={`text-sm mb-4 flex items-center gap-2 ${
          dbStatus.connected ? 'text-green-600' : 'text-amber-600'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            dbStatus.connected ? 'bg-green-600' : 'bg-amber-600'
          }`} />
          {dbStatus.message}
        </div>

        <div className="border p-6 rounded bg-white">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col">
              <span className="text-sm font-medium">Email</span>
              <input value={form.email} onChange={handleChange} type="email" name="email" className="mt-1 px-3 py-2 border rounded" />
            </label>
            <label className="flex flex-col">
              <span className="text-sm font-medium">Password</span>
              <input value={form.password} onChange={handleChange} type="password" name="password" className="mt-1 px-3 py-2 border rounded" />
            </label>
            <button disabled={loading} type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
