import { NextResponse } from 'next/server'

// Simple middleware protecting role-based dashboards using session cookies set by our app
export function middleware(req) {
  const { pathname } = req.nextUrl

  // Public routes
  const publicPaths = ['/', '/login', '/register', '/signin', '/api', '/api/register', '/api/model-check']
  const isPublic = publicPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`))

  // Allow public paths
  if (isPublic) return NextResponse.next()

  // Read cookies set by our registration/login flow
  const sessionCookie = req.cookies.get('session')?.value
  const sessionRole = req.cookies.get('sessionRole')?.value

  // If no session, redirect to login
  if (!sessionCookie) {
    console.log(`[MIDDLEWARE] No session found. Redirecting to /login from ${pathname}`)
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(url)
  }

  // If accessing signin/login while authenticated, redirect to appropriate dashboard
  if (pathname.startsWith('/login') || pathname.startsWith('/signin')) {
    let dashboard = '/'
    if (sessionRole === 'admin') dashboard = '/admin_dashboard'
    else if (sessionRole === 'student') dashboard = '/student_dashboard'
    const url = req.nextUrl.clone()
    url.pathname = dashboard
    return NextResponse.redirect(url)
  }

  // Admin-only routes
  if (pathname.startsWith('/admin_dashboard') && sessionRole !== 'admin') {
    console.log(`[MIDDLEWARE] User with role ${sessionRole} tried to access admin dashboard. Redirecting.`)
    const url = req.nextUrl.clone()
    url.pathname = sessionRole === 'student' ? '/student_dashboard' : '/login'
    return NextResponse.redirect(url)
  }

  // Student-only routes
  if (pathname.startsWith('/student_dashboard') && sessionRole !== 'student') {
    console.log(`[MIDDLEWARE] User with role ${sessionRole} tried to access student dashboard. Redirecting.`)
    const url = req.nextUrl.clone()
    url.pathname = sessionRole === 'admin' ? '/admin_dashboard' : '/login'
    return NextResponse.redirect(url)
  }

  // Allow access
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin_dashboard/:path*', '/student_dashboard/:path*', '/login', '/signin']
}
