function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form className="flex flex-col border border-slate-900" action="">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
export default Login