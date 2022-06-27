import BaseHead from "@/components/layouts/BaseHead"
import HeaderHero from "@/components/home/HeaderHero"
import Characters from "@/components/home/Characters"
import ReadComic from "@/components/home/ReadComic"
import Kickstarter from "@/components/home/kickstarter"
import OtherWorks from "@/components/home/OtherWorks"

export default function Home() {
  return (
    <>
      {/* TODO: import react-spring, react query, next/sanity, and google font stuff */}
      <BaseHead title="" description="" />
      <HeaderHero />
      <Characters />
      <ReadComic />
      <Kickstarter />
      <OtherWorks />
    </>
  )
}
