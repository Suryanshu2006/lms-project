"use client"
import React from 'react'
import MainLayout from '../layout/main-layout'
import Sidebar from '../layout/sidebar'
import Navbar from '../layout/navbar'
import Card from '../global/card'

const StudentDashboardPage = () => (
  <MainLayout sidebar={<Sidebar role="student" />} navbar={<Navbar />}>
    <div className="py-6">
      <h1 className="text-3xl font-bold mb-6 text-black">Student Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h2 className="text-xl text-black font-semibold mb-2">Welcome!</h2>
          <p className="text-black">
            This is your student dashboard. Here you can find your enrolled courses,
            grades, and profile information.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl text-black font-semibold mb-2">Your Courses</h2>
          <div className="space-y-2">
            <p className="text-black">Enrolled courses: 3</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Web Development Basics</li>
              <li>JavaScript Fundamentals</li>
              <li>React Essentials</li>
            </ul>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl text-black font-semibold mb-2">Grades Overview</h2>
          <div className="space-y-2">
            <p className="text-black">Current GPA: 3.8</p>
            <div className="mt-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Web Development</span>
                <span>A</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>JavaScript</span>
                <span>A-</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>React</span>
                <span>B+</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl text-black font-semibold mb-2">Upcoming Deadlines</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">JavaScript Quiz</span>
              <span className="text-red-600">Tomorrow</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">React Project</span>
              <span className="text-amber-600">3 days</span>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-xl text-black font-semibold mb-2">Recent Activity</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Completed Web Development Quiz - Score: 92%</p>
            <p>Submitted JavaScript Assignment #3</p>
            <p>Started React Module 2</p>
          </div>
        </Card>
      </div>
    </div>
  </MainLayout>
)

export default StudentDashboardPage