import './globals.css'

export const metadata = {
  title: 'Trackr',
  description: 'Pantry Inventory Management Made Easy ⛈',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
