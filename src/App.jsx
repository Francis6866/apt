import { Route, Routes } from "react-router"
import BlockBtn from "./components/button/BlockBtn"
import OutlineBtn from "./components/button/OutlineBtn"
import TestimonialCard from "./components/card/TestimonialCard"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MainLayout from "./layout/MainLayout"
import AboutPage from "./pages/about/AboutPage"
import ContactPage from "./pages/contact/ContactPage"
import Gallery from "./pages/gallery/GalleryPage"
import HomePage from "./pages/home/HomePage"
import GalleryPage from "./pages/gallery/GalleryPage"


function App() {

  return (
    <>
      {/* <Header /> */}
      {/* <HomePage />     */}
      {/* <Gallery /> */}
      {/* <AboutPage /> */}
      {/* <ContactPage /> */}
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="gallery" element={<GalleryPage />}/>
          <Route path="about" element={<AboutPage />}/>
          <Route path="contact" element={<ContactPage /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App
