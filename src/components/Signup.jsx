import React from 'react'

import "../styles/signUp.css"
function Signup() {
    return (
        <div class="container1">
            <div class="title">Registration</div>
            <div class="content">
                <form action="/signup" method="POST">
                    <div class="user-details">
                        <div class="input-box">
                            <span class="details">Full Name</span>
                            <input type="text" name="fullname" placeholder="Enter your name" required />
                        </div>
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input type="text" name="email" placeholder="Enter your email" required />
                        </div>
                        <div class="input-box">
                            <span class="details">Password</span>
                            <input type="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div class="input-box">
                            <span class="details">Confirm Password</span>
                            <input type="password" name="confirmpassword" placeholder="Confirm your password" required />
                        </div>
                    </div>
                    <div>
                        already a member?<a href="/login.html">login</a>
                    </div>
                    <div class="button">
                        <a href="/submit.html"><input type="submit" /></a>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Signup