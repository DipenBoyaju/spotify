import { Link, useLocation, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { GoBell } from "react-icons/go";
import { BiLinkExternal } from "react-icons/bi";
import { useContext, useEffect, useRef, useState } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Menu = ({ setLoggedIn }) => {
  return (
    <div className="bg-zinc-800 absolute right-0 top-12 rounded-md">
      <nav className="flex flex-col text-[14px] font-semibold py-1 px-2">
        <Link className="hover:bg-zinc-700 px-2 py-2 flex items-center justify-between">
          Account <BiLinkExternal className="text-lg" />
        </Link>
        <Link to='/user' className="hover:bg-zinc-700 px-2 py-2" >Profile</Link>
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
  const searchInputRef = useRef(null)
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const { loggedIn, setLoggedIn } = useContext(PlayerContext)

  const handlemenu = () => {
    setShowMenu((prev) => !prev);
  }

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  })
  return (
    <>
      <div className="">
        <div className=" fixed w-[100%] lg:w-[74.6%] z-20 flex justify-between items-center
    font-semibold bg-zinc-900 bg-opacity-30 px-4 py-3">
          <div className="flex items-center gap-2">
            <img onClick={() => nav(-1)} src={assets.arrow_left} alt="" className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
            <img onClick={() => nav(1)} src={assets.arrow_right} alt="" className="w-8 bg-black p-2 rounded-2xl cursor-pointer" />
          </div>
          <div className="">
            {
              location.pathname === '/search' &&
              <input ref={searchInputRef} type="text" placeholder="What do you want to play?" className="searchInput h-[44px] w-[30vw] rounded-full bg-zinc-800 border-2 focus:border-2 focus:border-zinc-100 border-transparent px-4 focus:outline-none" />
            }
          </div>
          <div className="">
            {
              loggedIn ?
                <div className="flex items-center gap-2 z-30">
                  <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:scale-105">Explore premium</p>
                  <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer hover:scale-105">Install App</p>
                  <p className="bg-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer text-[17px]"><GoBell /></p>
                  <p className="bg-green-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border-[3px] border-black" onClick={handlemenu}>D</p>
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
    </>
  )
}
export default NavBar