export default function CourseCard({ course }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-semibold text-lg">{course.title}</h3>
      <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
      <div className="mt-3">
        <button className="px-3 py-1 bg-blue-600 text-white rounded">View</button>
      </div>
    </div>
  )
}
