import "@/styles/globals.css"
import type { Metadata } from "next"
import { Heebo } from "next/font/google"

const heebo = Heebo({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nate Davis",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}

export default Layout
