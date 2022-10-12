type pageProps = {
  updatePage: (link: string) => any
}

function Navbar({updatePage}:pageProps ) {
  return (
    <div className="sticky top-0 z-50"> 
      <nav>
        <ul className="flex justify-around flex-row border border-b-slate-900 mb-10 py-2">
          <li onClick={() => updatePage('/')}>Home</li>
          <li onClick={() => updatePage('login')}>Login</li>
          <li onClick={() => updatePage('register')}>Register</li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
