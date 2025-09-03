import '../styles/login.css'

export default function LoginPage() {
  return (
    <div>
      <form>
        <h3>Login</h3>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder='Enter username' required/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='Enter password' required/>
        <input type="submit" value="Login" />
        <input type="submit" value="SignUp" />
      </form>
    </div>
  )
}
