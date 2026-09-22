import { useEffect } from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'react-router'
import type { LinksFunction } from 'react-router'
import { ContactProvider } from './components/contact/ContactContext'
import './index.css'

// Replaces the old index.html <head>. Font loading keeps the same
// preconnect-then-non-blocking strategy it had there.
export const links: LinksFunction = () => [
  { rel: 'icon', href: '/img/cwicon1.ico', type: 'image/x-icon' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@500;600;700;800&display=swap',
  },
]

// On every route change land at the top of the page. Skip when navigating to
// an in-page anchor (#hash), so those still scroll to their section.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Coffeeware" />
        <meta name="theme-color" content="#2e5b68" />
        <Meta />
        <Links />
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HX04QY8N36"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HX04QY8N36');`,
          }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return (
    <ContactProvider>
      <ScrollToTop />
      <Outlet />
    </ContactProvider>
  )
}
