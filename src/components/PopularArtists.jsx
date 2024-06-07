import { useNavigate } from "react-router-dom"
import { MdPlayArrow } from "react-icons/md";

const PopularArtists = ({ image, name, id, tag }) => {
  const nav = useNavigate();
  return (
    <div onClick={() => nav(`/album/${id}`)} className=" p-2 px-3 w-full h-auto rounded cursor-pointer hover:bg-[#ffffff26] relative group">
      <span className=" bg-green-500 p-2 rounded-full right-4 absolute bottom-20 transition-all duration-500 opacity-0 group-hover:opacity-100">
        <MdPlayArrow className="text-black text-4xl" />
      </span>
      <div className="rounded-full w-full h-[200px] overflow-hidden">
        <img className="rounded-full w-full" src={image} alt="" />
      </div>
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{tag}</p>
    </div>
  )
}
export default PopularArtists