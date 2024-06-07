import { MdPlayArrow } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const PopularRadio = ({ name, id, tag, image }) => {
  const nav = useNavigate()
  return (
    <div onClick={() => nav(`/album/${id}`)} className=" p-2 px-3 w-full h-auto rounded cursor-pointer hover:bg-[#ffffff26] relative group">
      <span className=" bg-green-500 p-2 rounded-full right-6 absolute bottom-14 transition-all duration-500 opacity-0 group-hover:opacity-100">
        <MdPlayArrow className="text-black text-4xl" />
      </span>
      <div className="rounded-full ">
        <img className="rounded" src={image} alt="" />
      </div>
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{tag}</p>
    </div>
  )
}
export default PopularRadio