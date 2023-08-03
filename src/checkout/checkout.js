import React, { useContext,useState } from 'react'
import { Context } from '../reduce';
import { Movie } from '../movies/movies';
import "./checkout.css"
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';

function Checkout() {
    let {state,dispatch}=useContext(Context);
    let [count,update]=useState(0);
    let nav=useNavigate();

    let load=()=>{
        console.log("enter");
        if(state.theater.obj.movie){
        state.ticket.obj.seats.map(function(x){
            if(x.includes("V") || x.includes("V")){
                update(count+1);
            }
        })
        }
        else{
            nav("/ticketnew");
        }
    }
    let toggle=(e)=>{
        e.currentTarget.querySelectorAll("i").forEach(function(x){
            x.classList.toggle("hide")
        })
        document.querySelectorAll(".hidden").forEach(function(x){
            x.classList.toggle("hide")
        })
        console.log(document.querySelectorAll(".hidden"));
    }

    var options = {
        "key": "rzp_test_qVN4QlLNt0HaA5",
        "amount": (parseInt(state.ticket.obj.amount)+((state.ticket.obj.seats.length*25)+((state.ticket.obj.seats.length*25)+parseInt(state.ticket.obj.amount))*0.18))*100,
        "currency": "INR",
        "description": "Ticketnew",
        "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
        "prefill":
        {
          "email": "harichandran33@gmail.com",
          "contact": +918489110888,
        },
        "theme": {
            "color": "#00baf2"
        },
        config: {
          display: {
            blocks: {
              utib: {
                name: "Pay using Axis Bank",
                instruments: [
                  {
                    method: "card",
                    issuers: ["UTIB"]
                  },
                  {
                    method: "netbanking",
                    banks: ["UTIB"]
                  },
                ]
              },
              other: { 
                name: "Other Payment modes",
                instruments: [
                  {
                    method: 'upi',
                  },
                  {
                    method: "card",
                    issuers: ["ICIC"]
                  },
                  {
                    method: 'netbanking',
                  },
                  
                ]
              }
            },
          
            sequence: ["block.utib", "block.other"],
            preferences: {
              show_default_blocks: false
            }
          }
        },
        "handler": function (response) {
          // alert(response.razorpay_payment_id);
          var obj={
            name:state.theater.obj.movie,
            theater:state.theater.obj.theater,
            date:state.theater.obj.date,
            month:state.theater.obj.month,
            time:state.theater.obj.time,
            array:state.ticket.obj.seats
        }
        var a=JSON.parse(localStorage.getItem("ticketnew")).array;
        a.push(obj);
        localStorage.setItem("ticketnew",JSON.stringify({array:a}));
          nav("/ticketnew");
        },
        "modal": {
          "ondismiss": function () {
            if (window.confirm("Are you sure, you want to close the form?")) {
              nav(`/ticketnew`);
            } else {
              nav(`/ticketnew`);
            }
          }
        }
      }; 
      
      var rzp1 = new window.Razorpay(options);
        

    let booked=(e)=>{
       
        if(state.isLoged){
            e.preventDefault();
            rzp1.open();
        }
        else{
            document.querySelector(".back").classList.remove("hide");
        }
    }

    let home=()=>{
        nav("/ticketnew");
    }
    
    
  return (
    <div onLoad={load}>
        <Header/>
        <div id='checkout'>
            <div className='container'>
                <div className='checkout-row'>
                    <div className='checkout-ticket'>
                        <div className='ticket-image'>
                            <img src={Movie[state.theater.obj.id-1]?.img}/>
                        </div>
                        <div className='ticket-details'>
                            <h2>{state.theater.obj.movie}</h2>
                            <div className='ticket-lan'>
                                <span>Tamil</span>
                                <span>2D</span>
                            </div>
                            <h3>{state.theater.obj.theater}</h3>
                            <p>48, Anna Salai, Chennai, Tamil Nadu 600000, India</p>
                            <div className='ticket-ticket'>
                                <div className='ticket-time'>
                                    <h2>{state.theater.obj.day}, {state.theater.obj.date} {state.theater.obj.month}, {state.theater.obj.time}</h2>
                                    <p>MAIN SCREEN - {state.ticket.obj.seats.toString()}</p>
                                </div>
                                <div className='ticket-count'>
                                    <h1>{state.ticket.obj.seats.length}</h1>
                                    <p>TICKETS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='checkout-payment'>
                        <div className='ticket-summary'>
                            <div className='summary-col'>
                                <h3>Booking Summary</h3>
                                <p onClick={toggle} className='summary-col-details'><span>Details</span> <i class="ri-arrow-down-s-line"></i><i class="ri-arrow-up-s-line hide"></i></p>
                            </div>

                            <div className='summary-col'>
                                <h4>{state.ticket.obj.seats.length} Tickets</h4>
                                <h4><i class="bi bi-currency-rupee"></i>{state.ticket.obj.amount}</h4>
                            </div>

                            <div className='summary-col hidden hide'>
                                <p>{state.ticket.obj.seats.length-count} X QUARTZ Ticket @ <i class="bi bi-currency-rupee"></i>150 each</p>
                                <p><i class="bi bi-currency-rupee"></i>{(state.ticket.obj.seats.length-count)*150}</p>
                            </div>

                            {count>0 && <div className='summary-col hidden hide'>
                                <p>{count} X ZIRCON Ticket @ <i class="bi bi-currency-rupee"></i>60 each</p>
                                <p><i class="bi bi-currency-rupee"></i>{count*60}</p>
                            </div>}

                            <div className='summary-col'>
                                <h4>Taxes & Fees</h4>
                                <h4>{(state.ticket.obj.seats.length*25)+((state.ticket.obj.seats.length*25)+parseInt(state.ticket.obj.amount))*0.18}</h4>
                            </div>

                            <div className='summary-col hidden hide'>
                                <p>Service Charge</p>
                                <p><i class="bi bi-currency-rupee"></i>{state.ticket.obj.seats.length*25}</p>
                            </div>

                            <div className='summary-col hidden hide'>
                                <p>Central Goods and Service Tax</p>
                                <p><i class="bi bi-currency-rupee"></i>{((state.ticket.obj.seats.length*25)+parseInt(state.ticket.obj.amount))*0.09}</p>
                            </div>

                            <div className='summary-col hidden hide'>
                                <p>State Goods and Service Tax</p>
                                <p><i class="bi bi-currency-rupee"></i>{((state.ticket.obj.seats.length*25)+parseInt(state.ticket.obj.amount))*0.09}</p>
                            </div>
                        </div>

                        <div className='final-pay'>
                            <div className=' summary-col ticket-total'>
                                <p>Total</p>
                                <p><i class="bi bi-currency-rupee"></i>{parseInt(state.ticket.obj.amount)+((state.ticket.obj.seats.length*25)+((state.ticket.obj.seats.length*25)+parseInt(state.ticket.obj.amount))*0.18)}</p>
                            </div>

                            <div onClick={booked} className='confirm-pay'>
                                <h3>Confirm to Pay <i class="bi bi-currency-rupee"></i>{parseInt(state.ticket.obj.amount)+((state.ticket.obj.seats.length*25)+((state.ticket.obj.seats.length*25)+parseInt(state.ticket.obj.amount))*0.18)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div onClick={home} className='pay-success hide'>
            <div className='pay-success-row'>
                <img src='https://i.stack.imgur.com/YbIni.png'/>
                <a className='homebtn'>Goto Home</a>
            </div>
        </div>
    </div>
  )
}

export default Checkout