import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItems from "./SongItems"


const DisplayHome = () => {
  return (
    <>
      <div className="flex items-center gap-2 mt-16 px-6">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">ALL</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
      </div>
      <div className="mb-4 px-6">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto content">
          {
            albumsData.map((item, index) =>
              (<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />)
            )
          }
        </div>
      </div>
      <div className="mb-4 px-6">
        <h1 className="my-5 font-bold text-2xl">Today&apos;s  biggest hits</h1>
        <div className="flex overflow-auto content">
          {
            songsData.map((item, index) =>
              (<SongItems key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />)
            )
          }
        </div>
      </div>
    </>
  )
}
export default DisplayHome