import { useNavigate } from "react-router-dom"
import { artists, albumsData } from "../assets/assets"
import PopularAlbums from "../components/PopularAlbums"
import PopularArtists from "../components/PopularArtists"

const Home = () => {
  const nav = useNavigate()
  return (
    <>
      <div className="mb-4 pt-14 px-6">
        <div className="flex justify-between items-center">
          <h1 className="my-5 font-bold text-2xl">Popular artists</h1>
          <p onClick={() => nav('/artists')} className="text-zinc-400 font-bold text-sm cursor-pointer hover:underline">show all</p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-2">
          {
            artists.slice(0, 4).map((item, index) =>
              (<PopularArtists key={index} name={item.name} tag={item.tag} image={item.image} id={item.id} />)
            )
          }
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h1 className="my-5 font-bold text-2xl">Popular albums</h1>
          <p onClick={() => nav('/albums')} className="text-zinc-400 font-bold text-sm cursor-pointer hover:underline">show all</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-1">
          {
            albumsData.slice(0, 4).map((item, index) =>
              (<PopularAlbums key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />)
            )
          }
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h1 className="my-5 font-bold text-2xl">Popular Radio</h1>
          <p onClick={() => nav('/radios')} className="text-zinc-400 font-bold text-sm cursor-pointer hover:underline">show all</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-1">
          {
            albumsData.slice().reverse().slice(0, 4).map((item, index) =>
              (<PopularAlbums key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />)
            )
          }
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h1 className="my-5 font-bold text-2xl">Popular Charts</h1>
          <p className="text-zinc-400 font-bold text-sm cursor-pointer hover:underline">show all</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-1">
          {
            albumsData.slice(1, 5).map((item, index) =>
              (<PopularAlbums key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />)
            )
          }
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h1 className="my-5 font-bold text-2xl">Popular Playlists</h1>
          <p className="text-zinc-400 font-bold text-sm cursor-pointer hover:underline">show all</p>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-1">
          {
            albumsData.slice().reverse().slice(0, 4).map((item, index) =>
              (<PopularAlbums key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />)
            )
          }
        </div>
      </div>
    </>
  )
}
export default Home