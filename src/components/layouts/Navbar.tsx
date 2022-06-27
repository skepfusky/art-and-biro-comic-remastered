import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { NavItems } from "@/models/Content"

export default function Navbar() {
  const router = useRouter()
  return (
    <header>
      <div className="wrapper-responsive flex justify-between">
        <div>
          <Link href="/" passHref>
            logo
          </Link>
        </div>
        <nav>
          <ul className="header-links flex gap-5">
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
                <a className="border-2 border-orange-400 hover:bg-orange-400 py-[0.45rem] px-[1rem] rounded-lg text-orange-400 hover:text-white">
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
