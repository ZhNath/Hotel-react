import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Gallery from './components/Gallery.jsx'
import Booking from './components/Booking.jsx'
import '../style/style.css'
import {BasicProvider} from './context/BasicContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="gallery" element={<Gallery />} />
            <Route path="booking" element={<Booking />} />
            {/* <Route path="/:id/:id" element={<App />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </BasicProvider>
  </StrictMode>
)
