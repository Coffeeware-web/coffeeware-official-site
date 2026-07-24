import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ContactProvider } from '../components/contact/ContactContext'
import HomePage from '../components/pages/HomePage'
import ServicesPage from '../components/pages/ServicesPage'
import TeamPage from '../components/pages/TeamPage'
import ContactPage from '../components/pages/ContactPage'
import BookingPage from '../components/pages/BookingPage'

// On every route change land at the top of the page. Skip when navigating to
// an in-page anchor (#hash), so those still scroll to their section.
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ContactProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servizi" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="/prenota" element={<BookingPage />} />
        </Routes>
      </ContactProvider>
    </BrowserRouter>
  )
}

export default App
