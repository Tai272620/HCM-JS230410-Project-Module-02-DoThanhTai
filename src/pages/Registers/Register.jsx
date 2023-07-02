import React, { useState } from 'react';
import { auth } from "../../config/config";
import "./Register.scss";
import { Link } from 'react-router-dom';

export default function Register() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSignup = (e) => {
        e.preventDefault()
        // console.log(fullName, email,password)
    }
    return (
        <div className='register-container'>
            <h1>Sign Up</h1>
            <form action="" className='form-group' onSubmit={handleSignup}>
                <label htmlFor="">Full Name</label>
                <input type="text" className='form-control' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                <br />
                <label htmlFor="">Email</label>
                <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br />
                <label htmlFor="">Password</label>
                <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <div className="btn-box">
                    <span>
                        Already have an account
                        <Link to="/login">Here</Link>
                        <button className='btn btn-success'>SIGN UP</button>
                    </span>
                </div>
            </form>
        </div>
    )
}
