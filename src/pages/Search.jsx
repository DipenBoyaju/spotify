import { assets } from "../assets/assets"

const Search = () => {
  return (
    <div className="pt-14 px-6">
      <h1 className="text-2xl font-bold py-4">Browse all</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-pink-600 h-[20vh] overflow-hidden rounded-xl p-4 flex relative cursor-pointer">
          <p className="font-bold text-lg lg:text-2xl">Music</p>
          <img src={assets.search1} alt="" className="w-20 ml-14 lg:w-28 rotate-[30deg] mt-5 lg:ml-28  absolute" />
        </div>
        <div className="bg-green-800 h-[20vh] overflow-hidden rounded-xl p-4 flex relative cursor-pointer">
          <p className="font-bold text-lg lg:text-2xl z-10">Podcasts</p>
          <img src={assets.search2} alt="" className="w-20 ml-14 lg:w-28 rotate-[30deg] mt-5 lg:ml-28  absolute z-5" />
        </div>
        <div className="bg-purple-800 h-[20vh] overflow-hidden rounded-xl p-4 flex relative cursor-pointer">
          <p className="font-bold text-lg lg:text-2xl z-10">Live Events</p>
          <img src={assets.search3} alt="" className="w-20 ml-14 lg:w-28 rotate-[30deg] mt-5 lg:ml-28  absolute" />
        </div>
        <div className="bg-blue-900 h-[20vh] overflow-hidden rounded-xl p-4 flex relative cursor-pointer">
          <p className="font-bold text-lg lg:text-2xl z-10">Made For you</p>
          <img src={assets.search4} alt="" className="w-20 ml-14 lg:w-28 rotate-[30deg] mt-5 lg:ml-28  absolute z-5" />
        </div>
        <div className="bg-orange-600 h-[20vh] overflow-hidden rounded-xl p-4 flex relative cursor-pointer">
          <p className="font-bold text-lg lg:text-2xl z-10">New Releases</p>
          <img src={assets.search5} alt="" className="w-20 ml-14 lg:w-28 rotate-[30deg] mt-5 lg:ml-28  absolute" />
        </div>
        <div className="bg-fuchsia-950 h-[20vh] overflow-hidden rounded-xl p-4 flex relative cursor-pointer">
          <p className="font-bold text-lg lg:text-2xl z-10">Pop</p>
          <img src={assets.search2} alt="" className="w-20 ml-14 lg:w-28 rotate-[30deg] mt-5 lg:ml-28  absolute z-5" />
        </div>
      </div>
    </div>
  )
}
export default Search