import React from 'react'
import "../styles/login.css"
function Login() {
    return (
        <div className='wrapper'>
            <div className='title'>Login</div>

            <form action="/login" method="post">
                <div class="field">
                    <input type="text" name="username" required />
                    <label>Username </label>
                </div>
                <div class="field">
                    <input type="password" name="password" required />
                    <label>Password</label>
                </div>
                <div class="content">
                    <div class="checkbox">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </div>
                    <div class="pass-link">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <div class="field">
                    <input type="submit" value="Login" />
                </div>
                <div class="signup-link">
                    Not a member? <a href="/signup">Signup now</a>
                </div>
            </form>

        </div>
    )
}

export default Login