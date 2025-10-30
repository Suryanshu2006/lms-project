import '../styles/globals.css'
import { Providers } from '../lib/providers'
import ModelVerification from '../components/ModelVerification'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'LMS Project',
  description: 'Learning Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ModelVerification />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: { background: '#111827', color: '#fff' },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
