import React, { useState } from 'react'
import { NavLink, useHistory, Link } from 'react-router-dom';
import '../SignUp/SignUp'
const SignUp = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });
    let name, value;
    const handleInput = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const Postdata = async (e) => {
        e.preventDefault();
        const { name, email, phone, work, password, cpassword } = user;
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });
        const data = await res.json()
        if (data.status === 422 || !data) {
            window.alert("Invalid registration")
            console.alert("Invaliddf")
        }
        else {
            window.alert("register")
            console.log("Successful")
            history.push("/login")
        }
    }
    return (
        <div className="page">
            {/* <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link> */}
            <div className="login_container">
                <h2>Create Account</h2>
                <form method="POST" >

                    <h5>Your Name</h5>
                    <input type='text' name='name' id='name'
                        value={user.name}
                        onChange={handleInput}
                        placeholder='First and last name' />



                    <h5>Mobile number</h5>
                    <input type='number' name='phone' id='phone' autoComplete='off'
                        value={user.phone}
                        onChange={handleInput}
                        placeholder='Mobile number' />


                    <h5>Email (optional)</h5>
                    <input type='email' name='email' id='email' autoComplete='off'
                        value={user.email}
                        onChange={handleInput}
                        placeholder='Email'
                    />

                    <h5>Address</h5>
                    <input type='text' name='work' id='work' autoComplete='off'
                        value={user.work}
                        onChange={handleInput}
                        placeholder='Address' />



                    <h5>Password</h5>
                    <input type='password' name='password' id='password' autoComplete='off'
                        value={user.password}
                        onChange={handleInput}
                        placeholder='At least 6 characters' />
                    {/* <p>Passwords must be at least 6 characters.</p> */}

                    <h5>Confirm  password</h5>
                    <input type='password' name='cpassword' id='cpassword' autoComplete='off'
                        value={user.cpassword}
                        onChange={handleInput}
                        placeholder='Confirm Password' />

                    <button onClick={Postdata} type="submit" className="login_signInButton">
                        Continue
                    </button>

                </form>

                <div className='sighup-image'>

                    <p>Already have an account?
                        <NavLink to="/signin" className='signup-image-link'>SignIn</NavLink>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default SignUp