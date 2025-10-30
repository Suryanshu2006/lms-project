import { NextResponse } from 'next/server'
import { connectToDatabase } from '../../../lib/dbConnect'
import User from '../../../models/User'

export async function GET() {
  try {
    const conn = await connectToDatabase()
    const modelExists = !!User?.schema

    return NextResponse.json({
      dbConnected: conn.connection.readyState === 1,
      dbHost: conn.connection.host,
      modelLoaded: modelExists,
      modelFields: modelExists ? Object.keys(User.schema.paths) : []
    })
  } catch (error) {
    return NextResponse.json({
      error: error.message
    }, { status: 500 })
  }
}