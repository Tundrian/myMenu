import { NavLink} from "react-router-dom";

function Navbar( ) {
  return (
    <div className="sticky top-0 z-50 py-2 shadow-lg"> 
      <nav className="flex mx-5">
        <img className="h-6 aspect-square"  src="logo192.png" />
        <ul className="w-4/5 flex justify-around flex-row">
          <li><NavLink to={`home`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500 bg-slate-500 text-white px-5 rounded-md py-1" : "border-b border-b-gray-800 px-5 py-1"}>Home</NavLink></li>
          <li><NavLink to={`login`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500 bg-slate-500 text-white px-5 rounded-md py-1" : "border-b border-b-gray-800 px-5 py-1"}>Login</NavLink></li>
          <li><NavLink to={`register`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500 bg-slate-500 text-white px-5 rounded-md py-1" : "border-b border-b-gray-800 px-5 py-1"}>Register</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
