import { useNavigate } from "react-router-dom"

const Preview = () => {
  const nav = useNavigate()
  return (
    <div onClick={() => nav('/signup')} className="flex justify-between items-center py-2 px-6 bg-gradient-to-r from-[#af2896] to-[#509bf5] cursor-pointer">
      <div className="text-white">
        <h5 className="font-bold text-[14px]">Preview of Spotify</h5>
        <p className="text-sm lg:text-[16px] font-semibold">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
      </div>
      <p onClick={() => nav('/signup')} className="bg-white text-black py-2 px-8 rounded-full font-semibold cursor-pointer hidden lg:block">Sign up for free</p >
    </div>
  )
}
export default Preview