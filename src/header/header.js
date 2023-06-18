import React from 'react'
import './header.css'

function header() {
    let toggle=(e)=>{
        e.currentTarget.querySelector("ul").classList.toggle("menu-toggle")
        console.log(e.currentTarget.querySelector("ul"));
    }
  return (
    <header>
        <div className='container'>
            <div className='header-row'>
                <div className='header-left'>
                    <a href='#'><img src='https://assetscdn1.paytm.com/movies_new/_next/static/media/tpmc-logo.6a0114d4.png' alt=''/></a>
                    <ul>
                        <li>Home</li>
                        <li>Movies</li>
                        <li>Cinema</li>
                        <li>Orders</li>
                    </ul>
                </div>
                <div className='header-right'>
                    <div className='login'>
                        <p>Log in/ Signup</p>
                        <i class="ri-user-fill"></i>
                    </div>
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
    </header>
  )
}

export default header