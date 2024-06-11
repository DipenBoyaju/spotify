import { Route, Routes, useLocation } from "react-router-dom"
import NavBar from "../layout/NavBar"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { useContext, useEffect, useRef } from "react"
import { albumsData } from "../assets/assets"
import Home from "../pages/Home"
import Artists from "../artists/Artists"
import Albums from "./Albums"
import Radio from "./Radio"
import { PlayerContext } from "../context/PlayerContext"
import Footer from "../layout/Footer"
import ArtistDetail from "../artists/ArtistDetail"
import Search from "../pages/Search"
import ScrollToTop from "./ScrollToTop"
import Profile from "../profile/Profile"

const Display = () => {
  const displayRef = useRef('')
  const location = useLocation()
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.slice(-1) : ""
  const bgColor = albumsData[Number(albumId)].bgColor;
  const { loggedIn } = useContext(PlayerContext)

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    } else {
      displayRef.current.style.background = '#121212'
    }
  }, [isAlbum, bgColor])

  return (
    <>
      <ScrollToTop />
      <div ref={displayRef} className="w-[100%] m-2 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
        <NavBar />
        <div className="">
          <Routes>
            {
              loggedIn ?
                <>
                  <Route path='/' element={<DisplayHome />} />
                  <Route path='/user' element={<Profile />} />
                </> :
                <>
                  <Route path='/' element={<Home />} />
                </>
            }
            <Route path='/artists' element={<Artists />} />
            <Route path='/albums' element={<Albums />} />
            <Route path="/radios" element={<Radio />} />
            <Route path='/album/:id' element={<DisplayAlbum />} />
            <Route path="/artist/:id" element={<ArtistDetail />} />
            <Route path="/search" element={<Search />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Display