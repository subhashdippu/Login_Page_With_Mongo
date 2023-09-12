import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import Image from '../Image/Image.jpg'
import '../Home/Home.css'
const Home = () => {
    const [userName, setUserName] = useState('')
    const [show, setShow] = useState(false)
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
            setUserName(data)
            setShow(true)
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err)
            history.push('/login')
        }
    }
    useEffect(() => {
        callAboutPage();
    }, []);
    return (
        <div className='FirstOne'>
            <img className='SecondOne' src={Image} />
            <h1 className='Word'>Welcome to the club<h2>{show ? <h2>{userName.name}</h2> : 'Happy to see you'}</h2></h1>
        </div>
    )
}

export default Home