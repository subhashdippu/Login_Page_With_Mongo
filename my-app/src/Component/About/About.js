import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"

// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');
const About = () => {
    const [userData, setUserData] = useState({})
    const history = useHistory()
    const callAboutPage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application"
                },
                credentials: "include"
            });
            const data = await res.json();
            console.log(data)
            setUserData(data)
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);
    return (
        <div className='container'>
            <form method="GET">
                <div className='row1'>
                    <div className='row2'>
                        <h2>Hello this is Subhash</h2>
                        <h1>{userData.name}</h1>
                        <h1>{userData.phone}</h1>
                        <h1>{userData.email}</h1>
                    </div>

                </div>
            </form >
        </div >
    )
}

export default About