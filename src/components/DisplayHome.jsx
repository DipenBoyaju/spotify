import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItems from "./SongItems"


const DisplayHome = () => {
  return (
    <>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto content">
          {
            albumsData.map((item, index) =>
              (<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />)
            )
          }
        </div>
      </div>
      <div className="mb-4">
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