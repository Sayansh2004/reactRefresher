import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export default function Header() {
    const userIsOnline=useOnlineStatus();
  return (
    <div className='flex justify-between bg-white shadow-md'>
        <div className="px-6 py-3">
            <img src="https://plus.unsplash.com/premium_photo-1739212976961-ff87739e2a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2QlMjBjYXJ0b29ufGVufDB8fDB8fHww" alt=" restaurant image" className="h-16 w-16 rounded-xl object-cover"/>
        </div>
        <div>
            <ul className='flex gap-4 px-6 py-3'>
                <li>{userIsOnline ? "✅ ": "❌"}</li>
                <li className="hover:text-blue-600 cursor-pointer font-medium"><Link to="/">Home</Link></li>
                <li className="hover:text-blue-600 cursor-pointer font-medium"><Link to="/about">About Us</Link></li>
                <li className="hover:text-blue-600 cursor-pointer font-medium"><Link to="/contact">Contact Us</Link></li>
                <li className="hover:text-blue-600 cursor-pointer font-medium">Cart</li>
            </ul>
        </div>
    </div>
  )
}
