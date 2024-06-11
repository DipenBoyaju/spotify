import { Link } from "react-router-dom"
import { TiTick } from "react-icons/ti";
import { assets } from "../assets/assets";

const Premium = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-6 bg-gradient-to-r from-pink-800 to-blue-900 py-10 pt-24 px-6">
        <b className="text-3xl w-2/3 text-center">Listen without limits. Try 1 month of Premium individual for free.</b>
        <p className="font-semibold">Only US$2.99/month after. Cancel anytime.</p>
        <div className="flex gap-4 py-4">
          <Link className="text-black py-3 px-10 rounded-full font-semibold hover:scale-105 bg-white">Try free for 1 month</Link>
          <Link className="py-3 px-10 rounded-full font-semibold hover:scale-105 border border-zinc-100 text-white">View all plans</Link>
        </div>
        <p className="text-sm">Free for 1 month, then US$2.99 per month after. Offer only available if you haven&apos;t tried Premium before. <span className="underline">Terms apply.</span></p>
      </div>

      <div className="px-6 flex justify-center flex-col items-center text-center py-10">
        <b className="text-3xl">Affordable plans for any situation</b>
        <p className="font-semibold w-2/3">Choose a Premuim plan and listen to ad-free music without limits on your phone, speaker and other devices. Pay in various ways. Cancel anytime.</p>
        <div className="pt-10">
          <ul className="flex justify-center items-center gap-2">
            <li className="bg-zinc-100 rounded-md">
              <img src={assets.paypal} className="w-14 px-1 h-10" alt="" />
            </li>
            <li className="bg-zinc-100 rounded-md">
              <img src={assets.visa} className="w-14 px-1 h-10" alt="" />
            </li>
            <li className="bg-zinc-100 rounded-md">
              <img src={assets.mastercard} className="w-14 px-1 h-10" alt="" />
            </li>
            <li className="bg-zinc-100 rounded-md">
              <img src={assets.amex} className="w-14 px-1 h-10" alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-8 items-center py-10">
        <b className="text-3xl">All Premium plans include</b>
        <div className="">
          <ul>
            <li className="flex items-center gap-1 text-lg"><TiTick className="text-2xl" /> Ad-free music listening</li>
            <li className="flex items-center gap-1 text-lg"><TiTick className="text-2xl" /> Download to listen offline</li>
            <li className="flex items-center gap-1 text-lg"><TiTick className="text-2xl" /> Play songs in any order</li>
            <li className="flex items-center gap-1 text-lg"><TiTick className="text-2xl" /> High audio quality</li>
            <li className="flex items-center gap-1 text-lg"><TiTick className="text-2xl" /> Listen with friends in real time</li>
            <li className="flex items-center gap-1 text-lg"><TiTick className="text-2xl" /> Organise listening queue</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 w-4/5 px-6 mx-auto py-14 gap-10 items-stretch">
        <div className="bg-zinc-800 p-6 rounded-lg relative">
          <span className="font-bold text-lg text-black bg-pink-200 py-2 px-4 rounded-tl-lg rounded-br-lg absolute top-0 left-0">Free for 1 Month</span>
          <div className="flex gap-1 py-5 pt-8">
            <img src="" alt="" />
            <p className="font-bold text-lg">Premium</p>
          </div>
          <b className="text-3xl text-pink-200">Individual</b>
          <div className="py-6 flex flex-col">
            <p className="font-semibold">Free for 1 month</p>
            <p className="text-zinc-400 font-semibold">US$2.99/month after</p>
          </div>
          <hr className="border-t border-zinc-600" />
          <div className="flex flex-col py-5">
            <b className="text-md">• 1 Premium account</b>
            <b className="text-md">• Cancel anytime</b>
          </div>
          <div className="items-center text-center">
            <button className="bg-pink-200 font-bold text-lg py-3 px-10 rounded-full text-black hover:bg-pink-100 mt-4 mb-2 text-center items-center">Try free for 1 month</button>
          </div>
          <p className="text-xs text-zinc-400 text-center">Free for 1 month, then US$2.99 per month after. Offer only available if you haven&apos;t tried Premium before. <span className="underline">Terms apply.</span></p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-lg relative">
          <span className="font-bold text-lg text-black bg-purple-300 py-2 px-4 rounded-tl-lg rounded-br-lg absolute top-0 left-0">Free for 1 Month</span>
          <div className="flex gap-1 py-5 pt-8">
            <img src="" alt="" />
            <p className="font-bold text-lg">Student</p>
          </div>
          <b className="text-3xl text-purple-300">Individual</b>
          <div className="py-6 flex flex-col">
            <p className="font-semibold">Free for 1 month</p>
            <p className="text-zinc-400 font-semibold">US$1.49/month after</p>
          </div>
          <hr className="border-t border-zinc-600" />
          <div className="flex flex-col py-5">
            <b className="text-md">• 1 verified Premium account</b>
            <b className="text-md">• Discount for eligible students</b>
            <b className="text-md">• Cancel anytime</b>
          </div>
          <div className="items-center text-center">
            <button className="bg-purple-300 font-bold text-lg py-3 px-10 rounded-full text-black hover:bg-purple-200 mt-4 mb-2 text-center items-center">Try free for 1 month</button>
          </div>
          <p className="text-xs text-zinc-400 text-center">Free for 1 month, then US$1.49 per month after. Offer available only to students at an accredited higher education institution and if you haven’t tried Premium before <span className="underline">Terms apply.</span></p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-lg relative">
          <div className="flex gap-1 py-5 pt-8">
            <img src="" alt="" />
            <p className="font-bold text-lg">Premium</p>
          </div>
          <b className="text-3xl text-pink-200">Individual</b>
          <div className="py-6 flex flex-col">
            <p className="font-semibold">Duo</p>
            <p className="text-zinc-400 font-semibold">US$3.99/month after</p>
          </div>
          <hr className="border-t border-zinc-600" />
          <div className="flex flex-col py-5">
            <b className="text-md">• 2 Premium account</b>
            <b className="text-md">• Cancel anytime</b>
          </div>
          <div className="items-center text-center">
            <button className="bg-yellow-300 font-bold text-lg py-3 px-10 rounded-full text-black hover:bg-yellow-200 mt-4 mb-2 text-center items-center">Get Premium Duo</button>
          </div>
          <p className="text-xs text-zinc-400 text-center">For couples who reside at the same address <span className="underline">Terms apply.</span></p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-lg relative">
          <div className="flex gap-1 py-5 pt-8">
            <img src="" alt="" />
            <p className="font-bold text-lg">Student</p>
          </div>
          <b className="text-3xl text-blue-300">Individual</b>
          <div className="py-6 flex flex-col">
            <p className="font-semibold">Free for 1 month</p>
            <p className="text-zinc-400 font-semibold">US$4.99/month after</p>
          </div>
          <hr className="border-t border-zinc-600" />
          <div className="flex flex-col py-5">
            <b className="text-md">• Up to 6 Premium accounts</b>
            <b className="text-md">• Control content marked as explicit</b>
            <b className="text-md">• Cancel anytime</b>
          </div>
          <div className="items-center text-center">
            <button className="bg-blue-300 font-bold text-lg py-3 px-10 rounded-full text-black hover:bg-blue-200 mt-4 mb-2 text-center items-center">Get Premium Family</button>
          </div>
          <p className="text-xs text-zinc-400 text-center">For up to 6 family members residing at the same address. <span className="underline">Terms apply.</span></p>
        </div>
      </div>

      <div className="px-6 flex items-center justify-center flex-col py-8">
        <b className="text-3xl">Experience the difference</b>
        <p className="font-semibold"> Go premium and enjoy full control of your listening. Cancel anytime.</p>
      </div>
    </div>
  )
}
export default Premium