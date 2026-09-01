import Home from "./pages/Home"
import ContentPage from "./pages/ContentPage"
import ContactPage from "./pages/ContactPage"
import { useEffect } from "react"
import { Navigate, Routes, Route, useLocation } from "react-router-dom"

function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return undefined

    const animationFrame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      target?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      })
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [hash, pathname])

  return null
}

export default function App() {
  return (
    <main className="main-content">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/quote" element={<Navigate to="/#quote" replace />}/>
        <Route path="*" element={<ContentPage/>}/>
      </Routes>
    </main>
  )
}
