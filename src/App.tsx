import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

import { Home } from './pages/home'
import { NotFound } from './pages/not-found'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
