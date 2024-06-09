import { Link, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { GoBell } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { useContext, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Menu = ({ setLoggedIn }) => {
  return (
    <div className="bg-zinc-800 absolute right-0 top-12 rounded-md">
      <nav className="flex flex-col text-[14px] font-semibold py-1 px-2">
        <Link className="hover:bg-zinc-700 px-2 py-2 flex items-center justify-between">
          Account <BiLinkExternal className="text-lg" />
        </Link>
        <Link className="hover:bg-zinc-700 px-2 py-2">Profile</Link>
        <Link className="hover:bg-zinc-700 px-2 py-2 flex items-center justify-between gap-4">
          Upgrade to Premium <BiLinkExternal className="text-lg" />
        </Link>
        <Link className="hover:bg-zinc-700 px-2 py-2">Settings</Link>
        <hr className="border-t border-zinc-700" />
        <Link className="hover:bg-zinc-700 px-2 py-2" onClick={() => setLoggedIn(false)}>
          Log Out
        </Link>
      </nav>
    </div>
  );
};

const NavBar = () => {
  const nav = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { loggedIn, setLoggedIn } = useContext(PlayerContext)

  const handlemenu = () => {
    setShowMenu((prev) => !prev);
  }
  return (
    <>
      <div className="">
        <div className=" fixed w-[100%] lg:w-[74.6%] z-10 flex justify-between items-center
    font-semibold bg-zinc-900 px-4 py-3">
          <div className="flex items-center gap-2">
            <img onClick={() => nav(-1)} src={assets.arrow_left} alt="" className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
            <img onClick={() => nav(1)} src={assets.arrow_right} alt="" className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
          </div>
          <div className="">
            {
              loggedIn ?
                <div className="flex items-center gap-2 z-30">
                  <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-auto">Explore premium</p>
                  <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">Install App</p>
                  <p className="bg-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer text-[17px]"><GoBell /></p>
                  <p className="bg-green-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer" onClick={handlemenu}>D</p>
                  {showMenu && <Menu setLoggedIn={setLoggedIn} />}
                </div> :
                <div className="flex gap-6 text-[16px] items-center">
                  <p className="text-zinc-400 cursor-pointer hover:scale-110" onClick={() => nav('/signup')}>Sign Up</p>
                  <p className="bg-white text-black py-2 px-6 rounded-full cursor-pointer hover:scale-110" onClick={() => nav('/login')}>Log In</p>
                </div>
            }
          </div>
        </div>
      </div>
      {
        loggedIn ?
          <div className="flex items-center gap-2 mt-4">
            <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">ALL</p>
            <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
            <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
          </div> :
          ''
      }
    </>
  )
}
export default NavBar