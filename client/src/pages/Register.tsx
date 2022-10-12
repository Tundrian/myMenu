function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form className="flex flex-col border border-slate-900" action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
export default Register