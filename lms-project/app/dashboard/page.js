import Navbar from '../../components/Navbar'
import CourseCard from '../../components/CourseCard'

export default function DashboardPage() {
  const sampleCourses = [
    { id: 'c1', title: 'Intro to Programming', instructor: 'Jane Doe' },
    { id: 'c2', title: 'Web Development Basics', instructor: 'John Smith' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sampleCourses.map(c => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </main>
  )
}
