import React, { useContext, useState } from 'react'
import './header.css'
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import {auth} from "../firebase"
import { Context } from '../reduce';
import { useNavigate } from 'react-router-dom';

function Header() {

    let {state,dispatch}=useContext(Context);
    let nav=useNavigate();

function captcha(){
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          onSignInSubmit();
        }
      }, auth);
}

    let toggle=(e)=>{
        e.currentTarget.querySelector("ul").classList.toggle("menu-toggle")
        console.log(e.currentTarget.querySelector("ul"));
    }

    let [num,setNum]=useState("");
    let [otp,setOtp]=useState("");

    let login=()=>{
        if(!state.isLoged){
            document.querySelector(".back").classList.remove("hide");
            setNum("");
            setOtp("");
        }
        else{
            document.querySelector(".logout").classList.toggle("hide");
        }
    }

    let mNumber=(e)=>{
        setNum(e.target.value);
        if(num.length==10){
            e.target.style.border="2px solid #000"
            document.querySelector(".numberMsg").classList.add("hide");
        }
    }
    let mOtp=(e)=>{
        setOtp(e.target.value);
    }

    function onSignInSubmit(e){
        if(num.length==10){
            captcha();
            const phoneNumber = "+91"+num;
            const appVerifier = window.recaptchaVerifier;

            const auth = getAuth();
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                document.querySelector(".mobileNumber").classList.add("hide");
                document.querySelector(".otp").classList.remove("hide");
                }).catch((error) => {
                console.log("not sended");
                });
        }
        else{
            document.querySelector(".msg").classList.remove("hide");
            e.target.parentNode.querySelector("input").style.border="2px solid red"
        }
    }

    function otpVerify(e){
        const code = otp;
        window.confirmationResult.confirm(code)
        
        .then((result) => {
        const user = result.user;
        dispatch({type:"loged",payload:true});
        document.querySelector(".back").classList.add("hide");
        document.querySelector(".mobileNumber").classList.remove("hide");
        document.querySelector(".otp").classList.add("hide");
        dispatch({type:"login",payload:`Hi, ${num}`});
        alert("Successfully Logged In");
        })
        
        .catch((error) => {
            e.target.parentNode.querySelector("input").style.border="2px solid red"
            document.querySelector(".otpMsg").classList.remove("hide");
        });

        
    }

    let closeClick=()=>{
        document.querySelector(".back").classList.add("hide");
        document.querySelector(".mobileNumber").classList.remove("hide");
        document.querySelector(".otp").classList.add("hide");
    }

    let logout=()=>{
        document.querySelector(".logout").classList.add("hide");
        dispatch({type:"login",payload:"Log in/ Signup"});
        dispatch({type:"loged",payload:false});
    }

    let click=()=>{
        nav("/ticketnew")
    }
  return (
    <header>
        <div className='container'>
            <div className='header-row'>
                <div className='header-left'>
                    <a onClick={click} href='#'><img src='https://assetscdn1.paytm.com/movies_new/_next/static/media/tpmc-logo.6a0114d4.png' alt=''/></a>
                    <ul>
                        <li onClick={click}>Home</li>
                        <li onClick={click}>Movies</li>
                        <li onClick={click}>Cinema</li>
                        <li onClick={click}>Orders</li>
                    </ul>
                </div>
                <div onClick={login} className='login loginCopy'>
                        <p>{state.user}</p>
                        <i class="ri-user-fill"></i>
                    </div>
                <div className='header-right'>
                    <div onClick={login} className='login'>
                        <p>{state.user}</p>
                        <i class="ri-user-fill"></i>
                    </div>
                    <div onClick={logout} className='logout hide'>Logout</div>
                    <div className='header-icons'>
                        <div className='play'><i class="ri-google-play-fill"></i></div>
                        <div><i class="ri-apple-fill"></i></div>
                    </div>
                    <div onClick={toggle} className='header-menu'>
                        <div className='menu-icon'><i class="ri-menu-line"></i></div>
                        <ul>
                            <li>Home</li>
                            <li>Movies</li>
                            <li>Cinema</li>
                            <li>Orders</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='back hide'>
        <div className='log-box'>
            <div className='log-head'>
                <img src='https://assetscdn1.paytm.com/movies_new/_next/static/media/tn-paytm-logo-seat-layout.b4b6edde.png'/>
                <span onClick={closeClick} className='log-close'>X</span>
            </div>
            <div className='mobileNumber'>
                <p>Loggin with mobile number</p>
                <input onChange={mNumber} type='text' placeholder='Enter mobile number' value={num}/>
                <p className='msg hide'>*Please Enter valid mobile number</p>
                <div id='sign-in-button'></div>
                <div onClick={()=>onSignInSubmit()} className='log-btn motp' >Get OTP</div>
            </div>
            <div className='otp hide'>
                <p>Enter OTP</p>
                <input onChange={mOtp} type='text' placeholder='Enter OTP' value={otp}/>
                <p className='otpMsg hide'>*OTP number is wrong</p>
                <div onClick={()=>otpVerify()} className='log-btn verify'>Verify</div>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header