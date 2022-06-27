import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@/styles/globals.scss"
import DefaultLayout from "@/components/layouts/Layout"

config.autoAddCss = false

type NextPageLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsLayout = AppProps & {
  Component: NextPageLayout
}

export default function ArtAndBiro({ Component, pageProps }: AppPropsLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return getLayout(<Component {...pageProps} />)
}
