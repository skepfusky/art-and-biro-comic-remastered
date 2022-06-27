import { ReactElement } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function DefaultLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export function ComicLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}