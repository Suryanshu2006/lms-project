"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    const doLogout = async () => {
      const loading = toast.loading('Logging out...', { duration: Infinity })
      try {
        const res = await fetch('/api/logout')
        if (!res.ok) throw new Error('Logout failed')
        toast.dismiss(loading)
        toast.success('Logged out successfully')
        setTimeout(() => router.push('/login'), 300)
      } catch (err) {
        toast.dismiss(loading)
        toast.error('Logout failed. Please try again.')
        console.error(err)
        router.push('/login')
      }
    }

    doLogout()
  }, [router])

  return null
}
