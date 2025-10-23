export default function Footer(){
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="max-w-5xl mx-auto p-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} LMS Project. All rights reserved.
      </div>
    </footer>
  )
}
