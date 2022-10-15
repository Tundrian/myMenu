import { NavLink} from "react-router-dom";

function Navbar( ) {
  return (
    <div className="sticky top-0 z-50"> 
      <nav>
        <ul className="flex justify-around flex-row border border-b-slate-900 mb-10 py-2">
          <li><NavLink to={`home`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500" : "border-b border-b-gray-800"}>Home</NavLink></li>
          <li><NavLink to={`login`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500" : "border-b border-b-gray-800"}>Login</NavLink></li>
          <li><NavLink to={`register`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500" : "border-b border-b-gray-800"}>Register</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
