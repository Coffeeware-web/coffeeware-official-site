import type { Config } from '@react-router/dev/config'

export default {
  // The app lives in src/, not the default app/.
  appDirectory: 'src',
  // No runtime server: every route below is written to disk as static HTML at
  // build time, which is what makes the pages visible to crawlers that do not
  // execute JavaScript.
  ssr: false,
  prerender: ['/', '/servizi', '/team', '/contatti', '/prenota', '/privacy'],
} satisfies Config
