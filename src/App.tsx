import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'

import { Home } from './pages/home'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
