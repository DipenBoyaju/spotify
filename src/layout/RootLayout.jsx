import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Player from "./Player"
import Display from "../components/Display"
import { useContext, useState } from "react"
import { PlayerContext } from "../context/PlayerContext"
import Preview from "./Preview"

const RootLayout = () => {

  const { audioRef, track } = useContext(PlayerContext)
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="h-screen flex flex-col">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display loggedIn={loggedIn} />
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
    </div>
  )
}
export default RootLayout