import { useEffect } from 'react'

function Home() {

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async() => {
    const fetchUser = await fetch(`http://localhost:8000/login/`)
    const data = await fetchUser.json()
    console.log('login: ', data)
  }

  return (
    <div className="bg-[url('splash.jpg')] h-screen bg-cover">
      {/* <img src="splash.jpg" alt="placeholder splash image" /> */}
      <div className="w-full h-2/3 text-center flex justify-center flex-col align-middle mx-10 text-slate-800">
        <h1 className="text-7xl mb-5">Home</h1>
        <p className="max-w-md mx-auto text-slate-900 text-xl bg-white bg-opacity-60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repudiandae a amet itaque, sit officia quis nobis ex aperiam recusandae.</p>
        <button className="py-1 px-2 rounded-md bg-green-600 bg-opacity-80 text-white text-xl w-fit mx-auto mt-5">Call to Action</button>
      </div>
        
    </div>
  )
}
export default Home