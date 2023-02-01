import { Routes, Route } from 'react-router-dom'
import { APOD } from '../pages/APOD/APOD'
import { Books } from '../pages/Books/Books'
import { About } from '../pages/Books/pages/About'
import { Contentstack } from '../pages/Contentstack/Contentstack'
import { ROUTES } from '../constants/routes'

export const RoutesLinks = () => {
  return (
    <Routes>
      <Route path={ROUTES.Contentstack} element={<Contentstack />} />
      <Route path={ROUTES.Books} element={<Books />} />
      <Route path={ROUTES.APOD} element={<APOD />} />
      <Route path={ROUTES.About} element={<About />} />
    </Routes>
  )
}
