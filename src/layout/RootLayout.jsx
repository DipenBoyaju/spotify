import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Player from "./Player"
import Display from "../components/Display"
import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"
import Preview from "./Preview"
import LoginPopup from "../components/LoginPopup"

const RootLayout = () => {

  const { audioRef, track, showLoginPopup, setShowLoginPopup, loggedIn } = useContext(PlayerContext)
  return (
    <div className="h-screen flex flex-col">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
      {
        loggedIn ?
          <>
            <Player className="h-[10%]" />
            <audio ref={audioRef} src={track.file} preload="auto"></audio>
          </> :
          <Preview className="h-[10%]" />
      }
      {showLoginPopup ? <LoginPopup onclose={() => setShowLoginPopup(false)} /> : ''}
      {/* <LoginPopup /> */}
    </div>
  )
}
export default RootLayout