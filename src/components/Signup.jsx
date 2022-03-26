import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/signUp.css"
function Signup() {
    return (
        <>
            <div className="title">Registration</div>
            <div className="content">
                <form action="/signup" method="POST">
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Full Name</span>
                            <input type="text" name="fullname" placeholder="Enter your name" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" name="username" placeholder="Enter your username" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Email</span>
                            <input type="text" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <span className="details">Phone Number</span>
                            <input type="text" name="phone" placeholder="Enter your number" required />
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
                        already a member?<a href="/Login.jsx">login</a>
                    </div>
                    <div className="button">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>

    )
}

export default Signup