import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"
import { artists } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const LoginPopup = () => {

  const nav = useNavigate()
  const { setShowLoginPopup, currentId } = useContext(PlayerContext)
  const artist = artists.find((artist) => artist.id === currentId)
  return (
    <div className="fixed z-30 h-full w-full bg-zinc-900 grid bg-opacity-30 backdrop-blur-sm">
      <div className="place-self-center items-center justify-center flex flex-col bg-gradient-to-b from-red-950 to-zinc-800 lg:grid lg:grid-cols-2 rounded-xl lg:w-3/5 p-14">
        <img src={artist?.image} alt="" className="rounded-lg lg:h-auto h-[250px]" />
        <div className="flex justify-center flex-col items-center gap-6 text-center">
          <h2 className="text-xl lg:text-3xl text-white font-bold text-center">Start listening with a free Spotify account</h2>
          <div className="flex flex-col gap-4">
            <p className="bg-green-600 px-8 py-3 font-semibold rounded-full cursor-pointer hover:scale-110" onClick={() => { nav('/signup'); setShowLoginPopup(false) }}>Sign up for free</p>
            <p className="border border-zinc-300 px-8 py-3 font-semibold rounded-full cursor-pointer hover:scale-110 text-zinc-200">Download app</p>
            <p className="text-zinc-400 font-semibold text-sm">Already have an account? <span className="font-bold text-zinc-300 cursor-pointer hover:underline" onClick={() => { nav('/login'); setShowLoginPopup(false) }}>Log in</span></p>
          </div>
        </div>

      </div>
      <div className="text-center">
        <p className="text-white text-lg font-semibold hover:scale-110 cursor-pointer" onClick={() => setShowLoginPopup(false)}>close</p>
      </div>
    </div>
  )
}
export default LoginPopup