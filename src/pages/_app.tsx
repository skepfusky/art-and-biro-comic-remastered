import type { AppProps } from "next/app"
import { config } from "@fortawesome/fontawesome-svg-core"
import Layout from "@/components/layouts/Layout"
import "@/styles/globals.scss"

config.autoAddCss = false

export default function ArtAndBiro({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
