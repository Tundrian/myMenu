import React, {useState} from 'react'
import { redirect, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();
  const [user, setuser] = useState<{userName: '', email: string, password: string, confirmPassword: string}>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [err, setErr] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const val = e.target.value
    setuser(values => ({...values, [name]: val}))
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const fetched = await fetch(`http://localhost:8000/signup/`, {
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
      <h1>Register</h1>
      {err && (
        <p className="text-red-500 border border-red-500 text-xl">Invalid form entry. Please try again.</p>
      )}
      <form className="flex flex-col border border-slate-900" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={user.email} onChange={handleChange}/>
        <label htmlFor="userName">Username</label>
        <input type="text" name="userName" id="userName" value={user.userName} onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={user.password} onChange={handleChange} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" value={user.confirmPassword} onChange={handleChange}/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
export default Register