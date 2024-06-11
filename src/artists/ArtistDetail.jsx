import { Link, useParams } from "react-router-dom"
import { artists, assets, albumsData } from "../assets/assets"
import { MdPlayArrow, MdOutlineReport } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { BiLinkExternal } from "react-icons/bi";
import { SlUserFollow } from "react-icons/sl";
import { IoRadioOutline, IoShareOutline } from "react-icons/io5";
import { PiSpotifyLogoLight } from "react-icons/pi";


const ArtistMenu = () => {
  return (
    <div className='bg-zinc-800 w-[15vw] absolute rounded'>
      <nav className="flex flex-col text-[14px] font-semibold py-1 px-2">
        <Link className="hover:bg-zinc-700 px-2 py-2 flex gap-3 items-center">
          <SlUserFollow className="text-zinc-400 text-[16px]" />Follow
        </Link>
        <Link className="hover:bg-zinc-700 px-2 py-2  flex gap-3 items-center"><IoRadioOutline className="text-zinc-400 text-[16px]" /> Go to artist radio</Link>
        <Link className="hover:bg-zinc-700 px-2 py-2 flex items-center gap-3">
          <MdOutlineReport className="text-zinc-400 text-[16px]" /> <span className="flex justify-between items-center w-full">
            Report <BiLinkExternal className="text-lg" />
          </span>
        </Link>
        <Link className="hover:bg-zinc-700 px-2 py-2 flex items-center gap-3"><IoShareOutline className="text-zinc-400 text-[16px]" />
          <span className="flex justify-between items-center w-full">
            Share <MdPlayArrow className="text-lg ml-auto" />
          </span>
        </Link>
        <hr className="border-t border-zinc-700" />
        <Link className="hover:bg-zinc-700 px-2 py-2 flex gap-3 items-center">
          <PiSpotifyLogoLight className="text-zinc-400 text-[16px]" /> Open in Desktop app
        </Link>
      </nav>
    </div>
  )
}

const ArtistDetail = () => {

  const { id } = useParams();
  const artist = artists[id]
  const { playWithId, showArtistMenu, setShowArtistMenu, setShowArtistTag } = useContext(PlayerContext)

  const handleClick = () => {
    setShowArtistMenu((prev) => !prev)
  }

  return (
    <div className="" >
      <div className="">
        <div className="h-[40vh] flex flex-col gap-2 bg-cover bg-no-repeat w-full py-6 pt-14 px-4 relative" style={{ backgroundImage: `url(${artist.bg})` }}>
          <span className="bg-black bg-opacity-30 absolute h-[40vh] w-full top-0 left-0 z-5"></span>
          <div className="z-10">
            <div className="flex gap-1 pt-5">
              <img src={assets.verified} alt="" className="w-6" />
              <p>Verified Artist</p>
            </div>
            <h1 className="text-3xl lg:text-7xl font-bold tracking-wide">{artist.name}</h1>
            <p className="pt-3">36,423,488 monthly listeners</p>
          </div>
        </div>
        <div className="">

          <div className="px-4 py-2 bg-gradient-to-b from-red-950 via-[#121212] to-[#121212]">
            <div className="flex gap-6 items-center py-3">
              <span className=" bg-green-500 p-2 rounded-full hover:scale-105 cursor-pointer">
                <MdPlayArrow className="text-black text-4xl" />
              </span>
              <p className="border border-zinc-400 px-5 rounded-full py-1 text-sm text-white hover:scale-105 cursor-pointer hover:border-zinc-100">Follow</p>
              <div className="relative">
                <div className="">
                  <p className="text-zinc-300 text-2xl hover:scale-110 cursor-pointer relative" onClick={handleClick}><HiOutlineDotsHorizontal /></p>
                  {showArtistMenu && <ArtistMenu />}
                </div>
              </div>
            </div>
            <p className="font-bold text-2xl">Popular</p>
            <div className=" py-5">
              {
                albumsData.slice(0, 5).map((item, index) => (
                  <div onClick={() => playWithId(item.id)} key={index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer group">
                    <p className="text-white">
                      <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                      <img className="inline w-10 mr-5" src={item.image} alt="" />
                      {item.name}
                    </p>
                    <p className=""></p>
                    <p className="text-[15px] hidden sm:block">122,558,245</p>
                    <p className="text-[15px] text-center">3:22</p>
                  </div>
                ))
              }
              <p className="px-2 text-zinc-400 pt-2">See more</p>
            </div>
          </div>
          <div className="px-6">
            <p className="font-bold text-2xl">About</p>
            <div className="bg-zinc-800 flex justify-between p-6 rounded-lg mt-4 hover:scale-[1.02] transition-all duration-500" onClick={() => setShowArtistTag(true)}>
              <div className="flex flex-col gap-4 ">
                <div className=" rounded-[100%]">
                  <img src={artist.image} alt="" className="rounded-[100%] w-[15vw] h-[15vw]" />
                </div>
                <p className="font-bold">36,423,488 monthly listeners</p>
              </div>
              <div className="">
                <p className="bg-blue-600 rounded-full text-sm h-24 w-24 text-center items-center flex justify-center flex-col"><span className="text-2xl font-bold">#104</span> <br /> in the world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
export default ArtistDetail