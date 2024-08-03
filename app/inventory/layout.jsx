import '@/app/globals.css'

export const metadata = {
  title: 'Trackr',
  description: 'Pantry Inventory Management Made Easy ⛈',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-[#1A1A1A] grid w-full overflow-hidden' style={{height:'100vh'}}>{children}</body>
    </html>
  )
}
