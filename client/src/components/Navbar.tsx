import { NavLink} from "react-router-dom";

function Navbar( ) {

  const handleLogout = async () => {
    const fetched = await fetch(`http://localhost:8000/logout/`)  
    const data = await fetched.json()
    console.log('logged out: ', data)
  }

  return (
    <div className="sticky top-0 z-50 py-2 shadow-lg bg-white"> 
      <nav className="flex mx-5">
        <img className="h-6 aspect-square"  src="logo192.png" />
        <ul className="w-4/5 flex justify-around flex-row">
          <li><NavLink to={`home`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500 bg-slate-500 text-white px-5 rounded-md py-1" : "border-b border-b-gray-800 px-5 py-1"}>Home</NavLink></li>
          <li><NavLink to={`login`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500 bg-slate-500 text-white px-5 rounded-md py-1" : "border-b border-b-gray-800 px-5 py-1"}>Login</NavLink></li>
          <li><NavLink to={`register`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500 bg-slate-500 text-white px-5 rounded-md py-1" : "border-b border-b-gray-800 px-5 py-1"}>Register</NavLink></li>
          <li><NavLink onClick={handleLogout} to={`home`} className="border-b border-b-gray-800 px-5 py-1">Logout</NavLink></li>
          <li><NavLink to={`browse`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500 bg-slate-500 text-white px-5 rounded-md py-1" : "border-b border-b-gray-800 px-5 py-1"}>Browse</NavLink></li>
          <li><NavLink to={`menu`} className={({isActive, isPending}) => isActive ? "border-b border-b-green-500 bg-slate-500 text-white px-5 rounded-md py-1" : "border-b border-b-gray-800 px-5 py-1"}>Menu</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
