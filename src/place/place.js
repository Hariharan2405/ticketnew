import React, { useContext, useState } from 'react'
import './place.css'
import { Context } from '../reduce';

function Place() {
    // let [value,update]=useState("");
    let {state,dispatch}=useContext(Context);
    let change=(e)=>{
        // update(e.target.value);
        dispatch({type:"search",payload:e.target.value.toLowerCase()})
    }
  return (
    <div id='place'>
        <div className='container'>
            <div className='place-row'>
                <div className='place-col'>
                    <div className='place-shows'>
                        <span className='ns'>Now Showing</span>
                        <span className='cs'>Comming Soon</span>
                    </div>
                    <div className='place-search'>
                    <i class="ri-search-line"></i>
                    <input onChange={change} type='search' placeholder='Search for Movie' value={state.search}/>
                    </div>
                </div>

                <div className='place-col1'>
                    <i class="ri-map-pin-line"></i>
                    <select>
                        <option>Chennai</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Place