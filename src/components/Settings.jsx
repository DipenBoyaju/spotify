import { useState } from "react";
import { LuSearch } from "react-icons/lu";

const Settings = () => {

  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle(newState);
  };

  return (
    <div className=" mt-28 px-10">
      <div className="flex justify-between items-center">
        <b className="text-3xl">Settings</b>
        <button className="text-xl hover:bg-zinc-800 p-2 rounded-full"><LuSearch /></button>
      </div>

      <div className="py-10 flex flex-col gap-10">
        <div className="">
          <b>Language</b>
          <div className="pt-2 lg:flex justify-between items-center">
            <p className="text-zinc-400">Choose language- Changes will be applied after restarting the app</p>
            <select name="" id="" className="bg-zinc-700 py-1 px-2 mt-4 lg:mt-0">
              <option value="">English (United kingdom)</option>
              <option value="">English (English)</option>
              <option value="">Netherland (Dutch)</option>
              <option value="">Hindi</option>
            </select>
          </div>
        </div>
        <div className="">
          <b>Language</b>
          <div className="pt-2 lg:flex justify-between">
            <p className="text-zinc-400">Show the now-playing panel on click of play</p>
            <button
              className={`relative w-14 h-8 rounded-full bg-gray-300 p-1 transition-colors duration-300 ${isOn ? 'bg-green-400' : 'bg-gray-300'} mt-4 lg:mt-0`}
              onClick={handleClick}
            >
              <span
                className={`block w-6 h-6 rounded-full shadow-lg transform ${isOn ? 'translate-x-6 bg-white' : 'translate-x-0 bg-white'}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Settings