import React from 'react'
import './footer.css'

function footer() {
  return (
    <footer>
        <div className='container'>
            <div className='footer-row'>
                <div className='footer-col'>
                    <div className='download'>
                        <h3>Download Paytm Ticketnew App</h3>
                        <div className='download-icons'>
                            <a><img src='https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png'/></a>
                            <a className='apple'><img src='https://icon-library.com/images/app-store-icon-png/app-store-icon-png-14.jpg'/></a>
                        </div>
                    </div>
                    <div className='care'>
                        <div className='care-col'>
                            <div className='care-icon'><i class="ri-phone-fill"></i></div>
                            <p>Customer Care</p>
                        </div>
                        <div className='care-col'>
                            <div className='care-icon'><i class="ri-question-answer-fill"></i></div>
                            <p>FAQ</p>
                        </div>
                    </div>
                </div>

                <div className='footer-col1'>
                    <div id='browseall'>
                        <h3>Browse All</h3>
                        <ul>
                            <li>Now Showing</li>
                            <li>Comming Soon</li>
                            <li>Movies</li>
                            <li>Cinemas</li>
                        </ul>
                    </div>
                    
                    <div id='links'>
                        <h3>Links</h3>
                        <ul>
                            <li>Gegister</li>
                            <li>Login</li>
                            <li>Order</li>
                            <li>Help</li>
                        </ul>
                    </div>

                    <div id='cinemas'>
                        <h3>Cinemas</h3>
                        <div className='cinemas'>
                        <ul>
                            <li>Sakthi Cinemas - Thiruvannamalai</li>
                            <li>Sakthi Cinemas - Gudiyatham</li>
                            <li>Sree Shivaji Sree Vijay Cinemas</li>
                            <li>Chembakassery Cinemas - Irinjalakuda</li>
                            <li>VAB Theatre - Cheyyar</li>
                            <li>Devi Chembakassery Cinemas - Cherpulassery</li>
                        </ul>
                        <ul>
                            <li>Chembakassery Rimi Cinemas - Melattur</li>
                            <li>City Chembakassery Cinemas - Kodakara</li>
                            <li>Vettri Meenakshi - Tindivanam</li>
                            <li>Chembakassery Vettukattil Cinema - Muvattupuzha</li>
                            <li>Okaz Chembakassery - Mannarkkad</li>
                        </ul>
                        </div>
                    </div>

                    <div id='enquiry'>
                        <h3>Enquiry</h3>
                        <ul>
                            <li>Support Service<br/>(24x7)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default footer