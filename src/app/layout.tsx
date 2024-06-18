import "@/styles/globals.css"
import type { Metadata } from "next"
import Nav from "./Nav"

export const metadata: Metadata = {
  title: "Nate Davis",
  description:
    "I'm Nate, a software engineer based in Addis Ababa, Ethiopia. I work mostly with TypeScript and Rust though I experiment with various other technologies. As of right now, I'm focused on projects implementing AI.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="mx-auto my-8 w-3/5">{children}</main>
      </body>
    </html>
  )
}
