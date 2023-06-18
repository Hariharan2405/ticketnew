import React from 'react'
import Header from '../header/header'
import Footer from "../footer/footer"
import Poster from "../poster/poster"
import Theater from "../theater/theater"

function MovieDetails() {
  return (
    <div>
        <Header/>
        <Poster/>
        <Theater/>
        <Footer/>
    </div>
  )
}

export default MovieDetails