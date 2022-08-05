import React,{useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/userportal.css";

function UserPortal(){


    let navigate = useNavigate();
    
    const NAME = document.cookie
    .split('; ')
    .find((row) => row.startsWith('name='))
    ?.split('=')[1];
    const USERNAME = document.cookie
    .split('; ')
    .find((row) => row.startsWith('username='))
    ?.split('=')[1];
    const EMAIL = document.cookie
    .split('; ')
    .find((row) => row.startsWith('email='))
    ?.split('=')[1];

    function handleLogout(){
        document.cookie = "name=";
        document.cookie = "username=";
        document.cookie = "email=";
        document.cookie = "password=";
        navigate("/signin");
    }

    function handleEmptyCart(){
        alert('BACKEND WORK');
    }

    function handleShopping(){
        navigate("/service");
    }


    const [name, setName] = useState(NAME);
    const [username, setUserName] = useState(USERNAME);
    const [email, setEmail] = useState(EMAIL);
    

    return(
        <div className='portal-section'>

        <div className='cart-section'>
        <h1 className="section-title">Your Cart</h1>
        </div>

        <div className='user-details-section'>
        <h2 className='name'>{name}</h2>
        <p className='username'>Username: {username}</p>
        <p className='email'>Email: {email}</p>
        <hr></hr>
        <p className='totalAmt'>Total Products: 3</p>
        <p className='totalAmt'>Total Amount: Rs 10000</p>
        <p className='dis'>Discount: Rs 2000</p>
        <h2 className='netAmt'>Net Amount: Rs 8000</h2>
        <button className='buy-btn'>Buy Now</button>
        </div>
        <div className='user-account-section'>
        <button className='logout-btn clear-btn' onClick={handleEmptyCart}>Empty Cart</button>
        </div>
        <div className='user-account-section'>
        <button className='logout-btn shop-btn' onClick={handleShopping}>Continue shopping</button>
        </div>
        <div className='user-account-section'>
        <button className='logout-btn' onClick={handleLogout}>Log out</button>
        </div>

        <div>

        </div>

        </div>
    );
    
}

export default UserPortal;