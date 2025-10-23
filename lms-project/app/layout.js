import '../styles/globals.css'
import { Providers } from '../lib/providers'

export const metadata = {
  title: 'LMS Project',
  description: 'Learning Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
