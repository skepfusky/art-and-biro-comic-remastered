import { ReactElement } from "react"
import { ComicLayout } from "@/components/layouts/Layout"
import BaseHead from "@/components/layouts/BaseHead"

export default function ComicPage() {
  return (
    <>
      <BaseHead title="Comic" description="Comic page" />
      Comic page
    </>
  )
}

ComicPage.getLayout = (page: ReactElement) => <ComicLayout>{page}</ComicLayout>