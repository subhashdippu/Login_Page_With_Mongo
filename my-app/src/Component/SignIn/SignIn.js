import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import '../SignIn/SignIn.css'
import Nav from 'react-bootstrap/Nav';
const SignIn = () => {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid Credintials")
        }
        // else if (res.status != 400 ) {
        //     window.alert("Invalid ")
        // }
        else {
            window.alert("Login Succeful")
            history.push("/")
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
                <h1>Sign in</h1>
                <form method="POST">
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <button onClick={loginUser} type="submit" className="login_signInButton">
                        Sign In
                    </button>
                </form>
                <p>
                    We feel good about ourselves, we send out good vibes to those around us. I feel that this metal gives off good vibes and translated, in a sense, a specific side of my personality.
                </p>
                <button className="login_registerButton">
                    <Nav.Link className='imge-link' href="/signup">Create an Account</Nav.Link>
                    {/* <NavLink to="/signup" className='imge-link'>Create an Account</NavLink> */}
                </button>
            </div>
        </div>
    )
}

export default SignIn