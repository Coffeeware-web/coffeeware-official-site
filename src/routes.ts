import { type RouteConfig, index, route } from '@react-router/dev/routes'

// Keep in sync with `prerender` in react-router.config.ts: every path listed
// there must resolve to a route here, or the build fails.
export default [
  index('components/pages/HomePage.tsx'),
  route('servizi', 'components/pages/ServicesPage.tsx'),
  route('team', 'components/pages/TeamPage.tsx'),
  route('contatti', 'components/pages/ContactPage.tsx'),
  route('prenota', 'components/pages/BookingPage.tsx'),
  route('privacy', 'components/pages/PrivacyPage.tsx'),
] satisfies RouteConfig
