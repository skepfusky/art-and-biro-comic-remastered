import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { NavItems } from "@/models/Content"

export default function Navbar() {
  const router = useRouter()

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300${
        sticky !== true ? " py-[0.33rem]" : " py-0 bg-gray-400 bg-opacity-40"
      }`}
    >
      <div className="wrapper-responsive flex justify-between select-none">
        <div>
          <Link href="/" passHref>
            logo
          </Link>
        </div>
        <nav>
          <ul className="header-links flex gap-x-8 font-mouse-memoirs text-2xl">
            {NavItems.map((items, index) => (
              <li key={index}>
                <Link href={items.route} passHref>
                  <a
                    className={
                      router.pathname === items.route
                        ? "text-orange-400"
                        : "text-black hover:text-orange-400"
                    }
                  >
                    {items.name}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <Link href="#" passHref>
                <a
                  className={`border-2 py-[0.3rem] px-[1rem] rounded-lg hover:text-white ${
                    sticky !== true
                      ? "border-orange-400 hover:bg-orange-400 text-orange-400"
                      : "border-orange-500 hover:bg-orange-500 text-orange-500"
                  }`}
                >
                  Buy
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
