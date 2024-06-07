import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const SignUp = () => {
  const nav = useNavigate()
  return (
    <div className="flex justify-center bg-[#121212] py-10 min-h-screen overflow-auto text-white">
      <div className=" lg:w-1/2 flex items-center py-10 flex-col px-20 rounded-lg space-y-5">
        <div className="flex justify-center flex-col  items-center text-center gap-5 mb-3">
          <img src={assets.spotify_logo} alt="" className="text-center items-center self-center cursor-pointer" onClick={() => nav('/')} />
          <h1 className="text-white text-3xl lg:text-4xl font-bold">Sign up to start listening</h1>
        </div>

        <form action="" className="space-y-5 pt-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-zinc-300 font-bold">Email address</label>
            <input type="text" className="rounded-md h-[48px] border border-zinc-400 bg-transparent px-4 focus:outline-none focus:border-2 w-[320px] hover:border-zinc-200" placeholder="name@domain.com" />
          </div>
          <button className="bg-green-500 font-semibold py-3 text-xl w-full rounded-full text-black">Next</button>
        </form>

        <hr className="border-gray-400 w-full relative" />
        {/* <span className="bg-[#121212] py-1 px-6 rounded-full bottom-0 -mt-10 absolute">or</span> */}
        <div className=" flex flex-col gap-2 py-6">
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
        <hr className="w-full border-gray-400" />
        <p className=" text-zinc-300 py-10">Already have an account? <span onClick={() => nav('/login')} className="text-white font-semibold hover:text-green-500 cursor-pointer underlline">Log in here.</span></p>
      </div>
    </div>
  )
}
export default SignUp