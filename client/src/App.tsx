import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from './components/Footer';
function App() {

  const [page, setPage] = useState<string>('/')

  

  return (
    <div >
      <Navbar updatePage={setPage}/>
      {page === '/' ? (
        <Home />
      ) : page === 'login' ? ( 
        <Login />
      ) : page === 'register' ? (
        <Register />
      ) : ''}
      <Footer />
    </div>
  );
}

export default App;
