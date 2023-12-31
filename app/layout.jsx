import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import Provider from "@/app/provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Provider>
      <body className={inter.className}>
      <Navbar/>
      <div>{children}</div>
      </body>
    </Provider>
    </html>
  )
}
