import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { GoBell } from "react-icons/go";

const NavBar = ({ loggedIn }) => {
  const nav = useNavigate()
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
                  <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">D</p>
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