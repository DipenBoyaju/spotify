import { MdPlayArrow } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { artists } from "../assets/assets"

const Albums = () => {
  // const nav = useNavigate()
  return (
    <div className="">
      <h1 className="text-white text-3xl font-semibold py-4">Artists</h1>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-5 lg:gap-2">
        {
          artists.map((item, index) => (
            <div key={index} className=" p-2 px-3 w-full h-auto rounded cursor-pointer hover:bg-[#ffffff26] relative group">
              <span className=" bg-green-500 p-2 rounded-full right-4 absolute bottom-20 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <MdPlayArrow className="text-black text-4xl" />
              </span>
              <div className="rounded-full w-full h-[120px] lg:h-[160px] overflow-hidden">
                <img className="rounded-full w-full" src={item.image} alt="" />
              </div>
              <p className="font-bold mt-2 mb-1">{item.name}</p>
              <p className="text-slate-200 text-sm">{item.tag}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Albums