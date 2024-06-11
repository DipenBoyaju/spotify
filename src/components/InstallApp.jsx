import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const InstallApp = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-6 mt-20">
      <img src={assets.download} alt="" className="w-[40vw]" />
      <b className="text-3xl w-2/3 text-center">Seamlessly listen to music you love. Download the Spotify app for your computer.</b>
      <Link to='https://www.spotify.com/np-en/download/windows/' target="_blank" className="bg-green-500 py-4 px-14 font-bold text-black rounded-full hover:scale-105 hover:underline">Get our free app</Link>
    </div>
  )
}
export default InstallApp