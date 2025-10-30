'use client'
import { useEffect } from 'react'

export default function ModelVerification() {
  useEffect(() => {
    // Check model status when component mounts
    fetch('/api/model-check')
      .then(res => res.json())
      .then(data => {
        console.log('✅ MongoDB connected to:', data.dbHost)
        console.log('✅ User model loaded successfully:', data.modelLoaded)
        if (data.modelFields.length > 0) {
          console.log('📋 User model fields:', data.modelFields.join(', '))
        }
      })
      .catch(error => {
        console.error('❌ Error checking model:', error)
      })
  }, [])

  return null
}