import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { PlayerContext } from "../context/PlayerContext";

const ArtistDetailTag = () => {

  const { setShowArtistTag } = useContext(PlayerContext)

  return (
    // <div className="fixed z-30 h-full w-full bg-zinc-900 grid bg-opacity-30 backdrop-blur-sm">
    <div className="fixed grid items-center z-40 bg-opacity-5 backdrop-blur-sm h-full w-full bg-zinc-900 py-32">
      <div className="place-self-center h-[60vh] overflow-auto relative flex flex-col bg-zinc-900 p-12 rounded-lg w-3/5">
        <span className="flex top-4 absolute place-self-end p-2 bg-zinc-800 rounded-full text-xl hover:bg-zinc-700" onClick={() => setShowArtistTag(false)}><RxCross2 /></span>
        <span className="">
          <p className="bg-blue-600 rounded-full text-sm text-center items-center flex justify-center h-24 w-24 flex-col text-white"><span className="text-2xl font-bold">#104</span> <br /> in the world</p>
        </span>
        <div className="space-y-4 mt-8">
          <p className="text-3xl font-bold text-zinc-200">32,468,177 <span className="text-zinc-400 text-sm flex">Followers</span></p>
          <p className="text-3xl font-bold text-zinc-200">36,423,488 <span className="text-zinc-400 text-sm flex">Monthly Listeners</span></p>
        </div>
        <div className="space-y-4 mt-6">
          <p className="font-bold text-zinc-200 flex flex-col">Mumbai, IN <span className="font-normal text-zinc-400">4,083,727 listeners</span></p>
          <p className="font-bold text-zinc-200 flex flex-col">Delhi, IN <span className="font-normal text-zinc-400">4,061,567 listeners</span></p>
          <p className="font-bold text-zinc-200 flex flex-col">Pune, IN <span className="font-normal text-zinc-400">3,483,727 listeners</span></p>
          <p className="font-bold text-zinc-200 flex flex-col">Bengaluru, IN <span className="font-normal text-zinc-400">2,563,727 listeners</span></p>
          <p className="font-bold text-zinc-200 flex flex-col">Hyderabad, IN <span className="font-normal text-zinc-400">2,300,727 listeners</span></p>
        </div>
      </div>
    </div>
  )
}
export default ArtistDetailTag