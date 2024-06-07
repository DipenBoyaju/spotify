import { useNavigate } from "react-router-dom"
import { MdPlayArrow } from "react-icons/md";

const AlbumItem = ({ image, name, desc, id }) => {


  const nav = useNavigate()
  return (
    <div onClick={() => nav(`/album/${id}`)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] relative group">
      <span className=" bg-green-500 p-2 rounded-full right-6 absolute bottom-24 transition-all duration-500 opacity-0 group-hover:opacity-100">
        <MdPlayArrow className="text-black text-2xl" />
      </span>
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  )
}
export default AlbumItem