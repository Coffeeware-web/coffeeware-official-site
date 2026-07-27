// Per-page metadata. React 19 hoists <title>, <meta> and <link> into <head>
// on its own, so no helmet-style library is needed here.
//
// Keep the hostname in sync with the sitemap plugin in vite.config.ts.
const SITE = 'https://coffeewaredesigns.com'
const DEFAULT_OG_IMAGE = `${SITE}/img/header-coffeeware.png`

type SeoProps = {
  title: string
  description: string
  /** Route path, leading slash included: '/servizi'. */
  path: string
  image?: string
  noindex?: boolean
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
}: SeoProps) {
  const url = `${SITE}${path}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="coffeeware" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  )
}
