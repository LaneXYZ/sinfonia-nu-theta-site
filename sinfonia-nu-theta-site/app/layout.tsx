
import './globals.css'

export const metadata = {
  title: 'Phi Mu Alpha Sinfonia – Nu Theta',
  description: 'Nu Theta Chapter at Kennesaw State University'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
