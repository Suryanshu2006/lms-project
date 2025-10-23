import Navbar from '../../components/Navbar'
import Footer from '../../components/layout/Footer'

export const metadata = {
  title: 'Dashboard - LMS'
}

export default function DashboardLayout({ children }){
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1 bg-white p-4 rounded shadow">Sidebar (navigation)</aside>
          <main className="lg:col-span-3">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
