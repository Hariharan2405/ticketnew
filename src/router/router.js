import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "../home/home"
import MovieDetails from '../movieDetails/movieDetails'
import Select from '../select/select'
import { Context } from '../reduce'
import { Initial } from '../reduce'
import { Reduce } from '../reduce'
import { useReducer } from 'react'
import Checkout from '../checkout/checkout'

function Router() {
  let [state,dispatch]=useReducer(Reduce,Initial)
  return (
    <Context.Provider value={{state,dispatch}}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/movieDetails' element={<MovieDetails/>}></Route>
            <Route path='/select' element={<Select/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
    </BrowserRouter>
    </Context.Provider>
  )
}

//localStorage.setItem("ticketnew",JSON.stringify({array:[]}))

export default Router