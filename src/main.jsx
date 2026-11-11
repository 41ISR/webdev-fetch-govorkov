import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Main from "./pages/Main"
import Book from "./pages/Book"
import Search from "./pages/Search"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path='book/:id' element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
