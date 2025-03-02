import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import BlogHome from './Pages/BlogHome.tsx'
import BlogPost from './Pages/BlogPost.tsx'
import AboutHome from './Pages/AboutHome.tsx'
import ContactHome from './Pages/ContactHome.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="blogs">
          <Route index element={<BlogHome />}></Route>
          <Route path=":title" element={<BlogPost />}></Route>
        </Route>

        <Route path="about">
          <Route index element={<AboutHome />}></Route>
        </Route>

        <Route path="contact">
          <Route index element={<ContactHome />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
