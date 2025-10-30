'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '../../components/layout/main-layout';
import Sidebar from '../../components/layout/sidebar';
import Navbar from '../../components/layout/navbar';

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session status
    const checkSession = async () => {
      try {
        const response = await fetch('/api/check-session');
        const data = await response.json();

        if (!response.ok || !data.user || data.user.role !== 'student') {
          console.log('❌ Unauthorized access attempt to student dashboard');
          router.replace('/login');
          return;
        }

        console.log('✅ Student session verified:', {
          id: data.user.id,
          email: data.user.email,
          role: data.user.role
        });
        setUser(data.user);
      } catch (error) {
        console.error('❌ Session verification failed:', error);
        router.replace('/login');
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <MainLayout sidebar={<Sidebar role="student" />} navbar={<Navbar />}>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Student Dashboard</h1>
            {user && (
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="text-sm text-gray-500">Welcome back,</div>
                  <div className="mt-1 text-lg font-semibold">{user.name}</div>
                  <div className="mt-3 text-sm text-gray-600">{user.email}</div>
                  <div className="mt-1 text-sm text-gray-600">Role: {user.role}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}