import React, {useState} from 'react'
import { redirect, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();
  const [user, setuser] = useState<{email: string, password: string}>({
    email: '',
    password: ''
  })
  const [err, setErr] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const val = e.target.value
    setuser(values => ({...values, [name]: val}))
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const fetched = await fetch(`http://localhost:8000/login/`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {"Content-Type": "application/json"}
    })  
    if(!fetched.ok){
      setErr(true)
      return 
    }
    setErr(false)

    
    // return navigate(`/home`)
    navigate('/home')
    
  }
  return (
    <div>
      <h1>Login</h1>
      <form className="flex flex-col border border-slate-900" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={user.email} onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={user.password} onChange={handleChange}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login