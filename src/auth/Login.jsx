import { useState } from "react";
import { assets } from "../assets/assets"
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <div className="flex justify-center bg-[#121212] py-10 min-h-screen overflow-auto text-white">
      <div className="bg-zinc-950 lg:w-1/2 flex items-center py-10 flex-col px-20 rounded-lg space-y-5">
        <div className="flex justify-center flex-col  items-center text-center gap-5 mb-3">
          <img onClick={() => nav('/')} src={assets.spotify_logo} alt="" className="text-center items-center self-center cursor-pointer" />
          <h1 className="text-white text-3xl lg:text-4xl font-bold">Log in to Spotify</h1>
        </div>
        <div className=" flex flex-col gap-2 pb-8 pt-2">
          <div className="flex justify-around items-center gap-6 border hover:border-gray-300 border-gray-600 py-2 px-6 rounded-full cursor-pointer">
            <img src={assets.google} alt="" className="w-8" />
            <p className="text-[18px] font-semibold">Continue with Google</p>
          </div>
          <div className="flex justify-around items-center gap-6 border hover:border-gray-300 border-gray-600 py-2 px-6 rounded-full cursor-pointer">
            <img src={assets.facebook} alt="" className="w-7" />
            <p className="text-[18px] font-semibold">Continue with Facebook</p>
          </div>
          <div className="flex justify-around items-center gap-6 border hover:border-gray-300 border-gray-600 py-2 px-6 rounded-full cursor-pointer">
            <img src={assets.apple} alt="" className="w-8" />
            <p className="text-[18px] font-semibold">Continue with Apple</p>
          </div>
        </div>
        <hr className="border-gray-400 w-full" />

        <form action="" className="space-y-5 pt-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-zinc-300 font-bold">Email or username</label>
            <input type="text" className="rounded-md h-[48px] border border-zinc-400 bg-transparent px-4 focus:outline-none focus:border-2 w-[320px] hover:border-zinc-200" placeholder="Email or username" />
          </div>
          <div className="flex flex-col gap-2 pb-4 relative">
            <label htmlFor="password" className="text-zinc-300 font-bold">Password</label>
            <input type={showPassword ? "text" : "password"} id="password" className="rounded-md w-[320px] h-[48px] border border-zinc-400 bg-transparent px-4 focus:outline-none focus:border-2 hover:border-zinc-200 pr-10" placeholder="Password" />
            <span onClick={togglePasswordVisibility} className="absolute right-3 top-11 cursor-pointer text-zinc-400">
              {!showPassword ? <MdVisibilityOff size={24} /> : <MdVisibility size={24} />}
            </span>
          </div>
          <button className="bg-green-500 font-semibold py-3 text-xl w-full rounded-full">Log in</button>
        </form>
        <p className="text-white underline font-semibold py-5 hover:text-green-500 cursor-pointer">Forgot your password?</p>
        <hr className="w-full border-gray-400" />
        <p className=" text-zinc-300 py-10">Dont have an account? <span onClick={() => nav('/signup')} className="text-white font-semibold hover:text-green-500 cursor-pointer underline">Sign up for Spotify</span></p>
      </div>
    </div>
  )
}
export default Login