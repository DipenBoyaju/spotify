import { SlUser } from "react-icons/sl";
import { RxDotsHorizontal } from "react-icons/rx";
import { Link } from "react-router-dom";
import { BsCopy } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { useState } from "react";

const ProfileMenu = () => {
  return (
    <div className='bg-zinc-800 left-6 top-16 absolute rounded'>
      <nav className="flex flex-col text-[14px] font-semibold py-1 px-2">
        <Link className="hover:bg-zinc-700 px-2 py-2 flex gap-3 items-center">
          <FiEdit2 className="text-zinc-400 text-[16px]" />Edit Profile
        </Link>
        <Link className="hover:bg-zinc-700 px-2 py-2  flex gap-3 items-center"><BsCopy className="text-zinc-400 text-[16px]" /> Copy link to Profile</Link>
      </nav>
    </div>
  )
}

const Profile = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const handleClick = () => {
    setShowProfileMenu((prev) => !prev)
  }
  return (
    <>
      <div className="bg-gradient-to-b from-zinc-600 to-zinc-900 p-6 flex flex-row items-center pt-20 gap-6">
        <div className="flex justify-center items-center">
          <div className="w-44 h-44 bg-zinc-800 border border-zinc-700 shadow-2xl rounded-full items-center place-items-center justify-center flex">
            <SlUser className="text-6xl text-zinc-500" />
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <p className="font-semibold">Profile</p>
          <h1 className="text-[5.2rem] font-bold leading-none">Dipendra Boyaju</h1>
          <p className="font-semibold pt-6 text-sm">2 Public Playlist</p>
        </div>
      </div>
      <div className="px-6 py-6 relative">
        <div className="">
          <RxDotsHorizontal className="text-2xl hover:scale-110 cursor-pointer" onClick={handleClick} />
          {showProfileMenu && < ProfileMenu />}
        </div>

      </div>
      <div className="px-6 pt-4">
        <b className="text-2xl">Top artist this month</b>
        <p className="text-sm text-zinc-600 font-semibold">Only visible to you</p>
      </div>
      <div className="px-6 pt-10">
        <b className="text-2xl">Top tracks this month</b>
        <p className="text-sm text-zinc-600 font-semibold">Only visible to you</p>
      </div>
      <div className="px-6 pt-10">
        <b className="text-2xl">Public Playlists</b>
      </div>
    </>
  )
}
export default Profile
