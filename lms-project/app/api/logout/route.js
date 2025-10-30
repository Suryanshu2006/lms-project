import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = NextResponse.json({ message: 'Logged out' })

    // Clear cookies by setting expiry in the past
    response.cookies.set('session', '', { maxAge: 0 })
    response.cookies.set('sessionRole', '', { maxAge: 0 })

    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 })
  }
}
