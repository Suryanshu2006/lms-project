import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/dbConnect';
import User from '../../../models/User';

// This is a simple session check endpoint
export async function GET(request) {
  try {
    // Get session token from cookie
    const sessionCookie = request.cookies.get('session');
    
    if (!sessionCookie?.value) {
      console.log('❌ No session cookie found');
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Connect to database
    const db = await connectToDatabase();
    console.log('✅ Connected to MongoDB');

    // In a real app, you'd verify the session token
    // For now, we'll just check if the user exists
    const user = await User.findById(sessionCookie.value);

    if (!user) {
      console.log('❌ Invalid session - User not found');
      return NextResponse.json(
        { error: 'Invalid session' },
        { status: 401 }
      );
    }

    console.log('✅ Session verified for user:', {
      id: user._id,
      email: user.email,
      role: user.role
    });

    // Return user data without sensitive information
    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error('❌ Session verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}