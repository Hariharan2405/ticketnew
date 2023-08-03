import React, { useState,useContext } from 'react'
import "./seat.css"
import {useNavigate} from "react-router-dom"
import { Context } from '../reduce'

function Seat() {
    var a=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"]
    var num1=["01","02","03","04","05","06","07"];
    var num2=["08","09","10","11","12","13","14","15"];
    var num3=["16","17","18","19","20","21","22"];
    var numA1=["01","02","03","04","05","06","07","08","09"];
    var numA3=["10","11","12","13","14","15","16","17","18"];
    var numB3=["08","09","10","11","12","13","14"];
    var numV=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18",
    "19","20","21","22","23","24","25","26","27","28"];

    let [numArray,setArray]=useState([]);
    let [payment,setPayment]=useState([]);

    let seatSelect=(e)=>{
        if(numArray.length<=10 && !e.target.classList.contains("bookedSeat")){
            let sn=e.target.dataset.seatnum;
            if(numArray.length<10 && !e.target.classList.contains("selectedSeat")){
                e.target.classList.add("selectedSeat")
                numArray.push(sn);
                numArray.sort();
                let selectedSeats=document.querySelectorAll(".selectedSeat");
                selectedSeats.forEach(function(x,y){
                    x.innerText=y+1;
                })
            }
            else{
                if(e.target.classList.contains("selectedSeat")){
                    numArray.splice(numArray.indexOf(sn),1);
                    setArray(numArray);
                    e.target.innerText="";
                    e.target.classList.remove("selectedSeat");
                    let selectedSeats=document.querySelectorAll(".selectedSeat");
                    selectedSeats.forEach(function(x,y){
                        x.innerText=y+1;
                    })
                }
            }
            var pay=0;
            numArray.map(function(x){
                if(x.includes("V") || x.includes("W")){
                    pay=pay+60
                }
                else{
                    pay=pay+150
                }
            })
            setPayment(pay);
        }
        if(numArray.length==0){
            document.querySelector(".ticketBook").classList.add("hide")
        }
        else{
            document.querySelector(".ticketBook").classList.remove("hide")

        }
    }

    var nav=useNavigate();
    let {state,dispatch}=useContext(Context);
    let goto=(e)=>{
        nav("/checkout");
        let currentEle=e.currentTarget;
        var obj={
            amount:payment,
            seats:numArray
        }
        dispatch({type:"ticketDetails",payload:{obj}})
        setArray([])
    }

    let load=()=>{
        if(state.theater.obj.movie){
        var a=JSON.parse(localStorage.getItem("ticketnew")).array;
        a.map(function(x){
            if(x.name==state.theater.obj.movie && x.theater==state.theater.obj.theater && x.month==state.theater.obj.month && x.date==state.theater.obj.date && x.time==state.theater.obj.time){
                var ele=document.querySelectorAll(".chair");
                ele.forEach(function(y){
                    if(x.array.includes(y.dataset.seatnum)){
                        y.classList.add("bookedSeat");
                    }
                })
            }
        })
        }
        else{
            nav("/ticketnew")
        }
    }

  return (
    <div onLoad={load} id='seat' data-value="a5">
        <div className='seat-container'>
            <div className='seat-row'>
                {a.map(function(seatChar){
                    if(seatChar=="A"){
                        return(
                            <div>
                                <p>QUARTZ: <i class="bi bi-currency-rupee"></i>150</p>
                                <div className='seat-col'>
                                    <div className='seat-char'>{seatChar}</div>
                                    <div className={`seat-col-row1 row1${seatChar}`}>
                                        {numA1.map(function(seatNumber){
                                            return(<div data-seatnum={seatChar+seatNumber} className='chair bookedSeat'></div>)
                                        })}
                                    </div>
                                    <div className={`seat-col-row3 row3${seatChar}`}>
                                        {numA3.map(function(seatNumber){
                                            return(<div data-seatnum={seatChar+seatNumber} className='chair bookedSeat'></div>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else if(seatChar=="B"){
                        return(
                            <div className='seat-col'>
                                <div className='seat-char'>{seatChar}</div>
                                <div className={`seat-col-row1 row1${seatChar}`}>
                                    {num1.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                                <div className={`seat-col-row3 row3${seatChar}`}>
                                    {numB3.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                            </div>
                        )
                    }
                    else if(seatChar=="V"){
                        return(
                            <div>
                                <p>ZIRCON: <i class="bi bi-currency-rupee"></i>60</p>
                                <div className={`seat-col seat-col${seatChar}`}>
                                    <div className="seat-char">{seatChar}</div>
                                    <div className={`seat-col-row1 row1${seatChar}`}>
                                        {numV.map(function(seatNumber){
                                            return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    else if(seatChar=="W"){
                        return(
                            <div className={`seat-col seat-col${seatChar}`}>
                                <div className="seat-char">{seatChar}</div>
                                <div className={`seat-col-row1 row1${seatChar}`}>
                                    {numV.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                            </div>
                        )
                    }
                    else if(seatChar=="I"){
                        return(
                            <div className={`seat-col seat-col${seatChar}`}>
                                <div className="seat-char">{seatChar}</div>
                                <div className='seat-col-row1'>
                                    {num1.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                                <div className='seat-col-row2'>
                                    {num2.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                                <div className='seat-col-row3'>
                                    {num3.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className='seat-col'>
                                <div className='seat-char'>{seatChar}</div>
                                <div className='seat-col-row1'>
                                    {num1.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                                <div className='seat-col-row2'>
                                    {num2.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                                <div className='seat-col-row3'>
                                    {num3.map(function(seatNumber){
                                        return(<div onClick={seatSelect} data-seatnum={seatChar+seatNumber} className='chair'></div>)
                                    })}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>

            <div className='seat-row-screen'>
                <div className='screen'>
                    <div className='screen-img'>
                        <img src='https://assetscdn1.paytm.com/movies_new/_next/static/media/screen-icon.8dd7f126.svg'/>
                    </div>
                </div>
                <div className='ticketBook hide'>
                    <div className='amount'>
                        <p>Total Amount: <i class="bi bi-currency-rupee"></i><span className='total-amount'>{payment}</span></p>
                        <p >Selected Seats: <span className='all-selected'>{numArray.toString()}</span></p>
                    </div>
                    <div onClick={goto} className='bookTicket'>
                        <h3>Book Tickets</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seat