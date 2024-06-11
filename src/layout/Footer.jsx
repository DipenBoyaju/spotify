import { Link } from "react-router-dom"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col py-20 px-6">
      <div className="grid grid-cols-5">
        <div className="">
          <h3 className="text-zinc-100 font-semibold pb-2">Company</h3>
          <ul className="text-zinc-400 text-[16px] flex flex-col gap-1">
            <Link className="hover:underline hover:text-zinc-100">About</Link>
            <Link className="hover:underline hover:text-zinc-100">Jobs</Link>
            <Link className="hover:underline hover:text-zinc-100">For the Record</Link>
          </ul>
        </div>
        <div className="">
          <h3 className="text-zinc-100 font-semibold pb-2">Communities</h3>
          <ul className="text-zinc-400 text-[16px] flex flex-col gap-1">
            <Link className="hover:underline hover:text-zinc-100">For Artists</Link>
            <Link className="hover:underline hover:text-zinc-100">Developers</Link>
            <Link className="hover:underline hover:text-zinc-100">Advertising</Link>
            <Link className="hover:underline hover:text-zinc-100">Investors</Link>
            <Link className="hover:underline hover:text-zinc-100">Vendors</Link>
          </ul>
        </div>
        <div className="">
          <h3 className="text-zinc-100 font-semibold pb-2">Useful links</h3>
          <ul className="text-zinc-400 text-[16px] flex flex-col gap-1">
            <Link className="hover:underline hover:text-zinc-100">Support</Link>
            <Link className="hover:underline hover:text-zinc-100">Free Mobile App</Link>
          </ul>
        </div>
        <div className="">
          <h3 className="text-zinc-100 font-semibold pb-2">Spotify Plans</h3>
          <ul className="text-zinc-400 text-[16px] flex flex-col gap-1">
            <Link className="hover:underline hover:text-zinc-100">Premium Individual</Link>
            <Link className="hover:underline hover:text-zinc-100">Premium Duo</Link>
            <Link className="hover:underline hover:text-zinc-100">Premium Family</Link>
            <Link className="hover:underline hover:text-zinc-100">Premium Student</Link>
            <Link className="hover:underline hover:text-zinc-100">Spotify Free</Link>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-4 text-lg items-center">
            <Link className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-600"><FaInstagram /></Link>
            <li className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-600"><FaTwitter /></li>
            <li className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-600"><FaFacebook /></li>
          </ul>
        </div>
      </div>
      <hr className="border-t border-zinc-700 mt-8" />
      <div className="text-zinc-400 text-[14px] font-semibold flex justify-between pt-10 items-center">
        <div className="">
          <ul className="flex gap-4">
            <li>Legal</li>
            <li>Safety & Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="">© 2024 Spotify DB</div>
      </div>
    </div>
  )
}
export default Footer