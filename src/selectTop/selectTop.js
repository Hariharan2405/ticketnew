import React from 'react'
import "./selectTop.css"
import { useContext } from 'react';
import { Context } from '../reduce';

function SelectTop() {
    let {state,dis}=useContext(Context);
    let details=state.theater.obj;
  return (
    <div id='selectTop'>
        <div className='container'>
            <div className='selectTop-row'>
                <div className='selectTop-col'>
                    <h2>{details.movie}</h2>
                    <p>Today, {details.date} {details.month}, {details.time} at {details.theater} 2D A/C Dolby 7.1</p>
                </div>

                <div className='selectTop-col1'>
                    <div className='select-time'>
                        <div className='selected-cal'>
                            <p className='selected-day'>{details.day}</p>
                            <p className='selected-date'>{details.date} {details.month}</p>
                        </div>
                        <div className='selected-time'>
                            <h4>{details.time}</h4>
                            <p>2D</p>
                        </div>
                    </div>
                    <div className='available'>
                        <div className='seat-avail'>
                            <span className='available-seat'></span><span>Available</span>
                        </div>
                        <div className='seat-avail'>
                            <span className='booked-seat'></span><span>Booked</span>
                        </div>
                        <div className='seat-avail'>
                            <span className='selected-seat'></span><span>Selected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectTop