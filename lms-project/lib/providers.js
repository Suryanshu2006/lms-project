'use client'
import React from 'react'

// Simple passthrough Providers component. If you add auth later, replace this
// with the appropriate provider (e.g., SessionProvider from next-auth).
export function Providers({ children }) {
  return <>{children}</>
}
