import React from 'react'
import Header from '../header/header'
import Banner from '../banner/banner'
import Movies from "../movies/movies"
import Footer from "../footer/footer"
import Place from "../place/place"

function Home() {
  return (
    <div id='home'>
        <Header/>
        <Banner/>
        <Place/>
        <Movies/>
        <Footer/>
    </div>
  )
}

export default Home