import Head from "next/head"
import { useRouter } from "next/router"
import { BaseHeadProps } from "@/models/Interfaces"

export default function BaseHead({ title, description, img }: BaseHeadProps) {
  const router = useRouter()
  const SITE_TITLE = "Art & Biro"
  const INDEX_TITLE = "Art & Biro Index"
  const INDEX_DESC = "Index desc"
  const GLOBAL_TITLE = `${title} | ${SITE_TITLE}`
  const tags = ["test", "op", "yeet"]
  return (
    <Head>
      <title>{router.pathname == "/" ? INDEX_TITLE : GLOBAL_TITLE}</title>
      <link rel="canonical" href={`https://localhost:3000${router.asPath}`} />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content={router.pathname == "/" ? INDEX_DESC : description}
      />
      <meta name="keywords" content={tags?.join(", ")} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://localhost:3000${router.asPath}`}
      />
      <meta property="og:image" content={img} />
      <meta
        property="og:title"
        content={router.pathname === "/" ? INDEX_TITLE : GLOBAL_TITLE}
      />
      <meta
        property="og:description"
        content={router.pathname === "/" ? INDEX_DESC : description}
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={router.pathname === "/" ? INDEX_TITLE : GLOBAL_TITLE}
      />
      <meta
        name="twitter:url"
        content={`https://localhost:3000${router.asPath}`}
      />
      <meta
        name="twitter:description"
        content={router.pathname === "/" ? INDEX_DESC : description}
      />
      <meta name="twitter:image" content={img} />
    </Head>
  )
}
