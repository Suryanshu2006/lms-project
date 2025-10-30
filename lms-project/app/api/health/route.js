import { NextResponse } from 'next/server'
import connectToDatabase from '../../../utils/mongodb'

export async function GET() {
  try {
    const conn = await connectToDatabase()
    const host = conn.connection.host
    
    return NextResponse.json(
      { 
        status: 'connected',
        host: host
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Database connection failed:', error)
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to connect to database'
      },
      { status: 500 }
    )
  }
}