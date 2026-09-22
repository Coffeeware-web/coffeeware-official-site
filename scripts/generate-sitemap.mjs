// Builds sitemap.xml from the HTML the React Router prerender actually wrote,
// so the sitemap can never drift from the pages that exist. Runs after
// `react-router build`; vite-plugin-sitemap could not be used here because it
// fires while build/client is still being rebuilt by the second Vite pass.
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const HOSTNAME = 'https://coffeewaredesigns.com'
const CLIENT_DIR = 'build/client'

// The SPA fallback is not a page and must stay out of the sitemap.
const EXCLUDED = new Set(['__spa-fallback.html'])

function collectRoutes(dir = CLIENT_DIR, prefix = '') {
  const routes = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (entry === 'assets') continue
      routes.push(...collectRoutes(full, `${prefix}/${entry}`))
    } else if (entry === 'index.html' && !EXCLUDED.has(entry)) {
      routes.push(prefix === '' ? '/' : prefix)
    }
  }
  return routes
}

const lastmod = new Date().toISOString().slice(0, 10)
const urls = collectRoutes()
  .sort()
  .map(
    (path) =>
      `  <url>\n    <loc>${HOSTNAME}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join('\n')

writeFileSync(
  join(CLIENT_DIR, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

console.log(`sitemap.xml: ${collectRoutes().length} pagine`)
