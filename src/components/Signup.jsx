import React from 'react'

import "../styles/signUp.css"
function Signup() {





    return (
        <div className="container1">
            <div className="title">Registration</div>
            <div className="content">
                <form action="/signup" method="POST">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" name="fullname" placeholder="Enter your name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="password" name="password" placeholder="Enter your password" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="password" name="confirmpassword" placeholder="Confirm your password" required />
                        </div>
                    </div>
                    <div>
                        already a member?<a href="/login.html">login</a>
                    </div>
                    <div className="button">
                      <button type="submit" >Sign Up</button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default Signup