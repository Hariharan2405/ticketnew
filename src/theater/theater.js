import React, { createContext, useContext } from 'react'
import "./theater.css"
import { useSearchParams } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import { Context } from '../reduce';

let theaters=[
    {
        id:["1","4","7","8"],
        tname:"Sakthi Cinemas - Thiruvannamalai",
        fec1:"Sofa ",
        fec2:"RGP Laser",
        fec3:"4k",
        time:["11:30 AM","03:00 PM","06:30 PM","10:00 PM"]
    },
    {
        id:["2","5","3","6"],
        tname:"Sakthi Cinemas - Gudiyatham",
        fec1:"Parking",
        fec2:"Mobile Ticket",
        fec3:"Recliners",
        time:["11:25 AM","03:10 PM","06:45 PM","10:30 PM"]
    },
    {
        id:["3","4","6","8"],
        tname:"Sree Shivaji Sree Vijay Cinemas",
        fec1:"Parking",
        fec2:"4k",
        fec3:"Food & Beverage",
        time:["11:00 AM","02:30 PM","06:00 PM","09:30 PM"]
    },
    {
        id:["1","2","7","3"],
        tname:"Chembakassery Cinemas - Irinjalakuda",
        fec1:"Parking",
        fec2:"Online Food",
        fec3:"Paytm Accepted",
        time:["11:30 AM","03:00 PM","06:30 PM","10:00 PM"]
    },
    {
        id:["1","5","2","6"],
        tname:"VAB Theatre - Cheyyar",
        fec1:"Food & Beverage",
        fec2:"RGP Laser",
        fec3:"4k",
        time:["11:30 AM","03:00 PM","06:30 PM","10:00 PM"]
    },
    {
        id:["1","2","3","8","6"],
        tname:"Devi Chembakassery Cinemas - Cherpulassery",
        fec1:"Sofa ",
        fec2:"Paytm Accepted",
        fec3:"Metro train",
        time:["11:00 AM","02:30 PM","06:00 PM","09:30 PM"]
    },
    {
        id:["1","2","7","8"],
        tname:"Chembakassery Rimi Cinemas - Melattur",
        fec1:"Mobile Ticket",
        fec2:"RGP Laser",
        fec3:"4k",
        time:["11:30 AM","03:00 PM","06:30 PM","10:00 PM"]
    },
    {
        id:["4","2","6","7"],
        tname:"City Chembakassery Cinemas - Kodakara",
        fec1:"Paytm Accepted",
        fec2:"",
        fec3:"4k",
        time:["09:30 AM","01:00 PM","04:00 PM","07:00 PM"]
    },
    {
        id:["2","4","5","7","8"],
        tname:"Vettri Meenakshi - Tindivanam",
        fec1:"Parking",
        fec2:"RGP Laser",
        fec3:"4k",
        time:["01:00 PM","04:30 PM","08:00 PM","11:30 PM"]
    },
    {
        id:["1","4","6","3"],
        tname:"Chembakassery Vettukattil Cinema - Muvattupuzha",
        fec1:"Paytm Accepted",
        fec2:"",
        fec3:"",
        time:["11:25 AM","03:10 PM","06:45 PM","10:30 PM"]
    },
    {
        id:["1","2","5","7"],
        tname:"Okaz Chembakassery - Mannarkkad",
        fec1:"",
        fec2:"Food & Beverage",
        fec3:"Mobile Ticket",
        time:["11:00 AM","02:45 PM","06:00 PM","09:25 PM"]
    },
];

let cast=[
    {
        id:"1",
        name:["Prabhas","Saif Ali Khan","Kriti Shanon"],
        img:["https://assetscdn1.paytm.com/images/cinema/MovieIcons/Prabhas.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/Stills/Chef/Cast/saif-ali-khan.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/kri-0fea9940-8eae-11ed-bd95-b7350954b20c.jpg?format=webp"]
    },
    {
        id:"2",
        name:["Ashok Selvan","Sarath Kumar","Nikhila Vimal"],
        img:["https://assetscdn1.paytm.com/images/cinema/ashok-selvan-3d9cd350-7da0-11ec-ba75-4d90d4f34404.jpg",
        "https://assetscdn1.paytm.com/images/cinema/Sarath-Kumar-d9ff3ef0-7141-11ed-a12a-51beeefc8add.jpg",
        "https://assetscdn1.paytm.com/images/cinema/Nikhila-Vimal-0a8f6aa3-4b4d-4831-a224-d4a894729e66.jpg"]
    },
    {
        id:"4",
        name:["Anthony Ramos","Lauren Velez","Ron Perlman"],
        img:["https://assetscdn1.paytm.com/images/cinema/ant-13f6b020-9979-11ed-8092-a9deecfa7463.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/Laura-9cc10340-d87d-11ed-9404-ff39c929294c.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/ron-perlman-6501-24-03-2017-12-44-10-370ac1d0-f3e7-46d1-9b32-8b5204893533.jpg?format=webp"]
    },
    {
        id:"3",
        name:["Siddarth","Divyansha","Yogi Babu"],
        img:["https://assetscdn1.paytm.com/images/cinema/Stills/The-house-next-door/Cast/Siddharth-Suryanarayan.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/divy-d7fb3bd0-5077-11ed-9b3e-edc965e39985.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/Yogi_Babu-9fca5e40-9cca-11ed-9aaa-6b13a667e668.jpg?format=webp"]
    },
    {
        id:"5",
        name:["HipHop Tamizha","Vinay Rai","Kaali Venkat"],
        img:["https://assetscdn1.paytm.com/images/cinema/Hiphop-Tamizha-73154f6d-ea5f-4f15-93bf-b19d6368fafd.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/vinay-a7459060-1e25-11ec-9e80-77f1678e4a16.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/Kaali-Venkat3-33324bb0-fe01-11ed-ac38-b147650354e7.jpg?format=webp"]
    },
    {
        id:"6",
        name:["Hailee Steinfeld","Shameik Mooree","Oscar Isecc"],
        img:["https://assetscdn1.paytm.com/images/cinema/hailee-steinfeld-bbba4500-8599-11ec-80fb-d3d3aff8cde7.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/MovieIcons/Cast/Shameik-Moore.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/Stills/Star-Wars-The-Last-Jedi/cast/Oscar-Isaac.jpg?format=webp"]
    },
    {
        id:"7",
        name:["Ezra Miller","Micheal Keaton","Shasa Calle","Ben Affleck"],
        img:["https://assetscdn1.paytm.com/images/cinema/MovieIcons/Cast/Ezra-Miller.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/michaelKitton-0b2897a0-e411-11ed-82e8-cf24b6293ec4.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/sasa-3505aa80-ab5f-11ed-8714-8f9f331a403a.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/Stills/Justice-League/cast/ben-affleck.jpg?format=webp"
        ]
    },
    {
        id:"8",
        name:["Meetha Ragu","Ramesh Thilak","K.Manikandan"],
        img:["https://assetscdn1.paytm.com/images/cinema/meetha-479f1880-e5ba-11ed-8b83-8735af6d695b.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/MovieIcons/Cast/Ramesh-Thilak.jpg?format=webp",
        "https://assetscdn1.paytm.com/images/cinema/Manikandan-1-65e72bc0-e5ba-11ed-82e8-cf24b6293ec4.jpg?format=webp"]
    },
]

function Theater() {
    let [id]=useSearchParams()
    let movieId=id.get("id")
    let movieName=id.get("mname")

    let cal=new Date();
    let date=cal.getDate();
    let day=cal.getDay();
    let hr=cal.getHours();
    let month=cal.getMonth();
    let cal1=new Date();
    cal1.setDate(`${cal.getDate()+1}`)
    let cal2=new Date();
    cal2.setDate(`${cal.getDate()+2}`)
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat",];

    var nav=useNavigate();
    let {state,dispatch}=useContext(Context);
    let goto=(e)=>{
        nav("/select");
        let currentEle=e.currentTarget;
        var obj={
            id:movieId,
            movie:movieName,
            theater:currentEle.parentNode.parentNode.querySelector("h3").innerText,
            date:date,
            day:days[day],
            month:months[month],
            time:currentEle.querySelector("h4").innerText
        }
        dispatch({type:"theaterDetails",payload:{obj}})
    }

  return (
    <div id='theater'>
        <div className='date'>
            <div className='container'>
                <div className='date-row'>
                    <div className='month'>
                        <p>{months[month]}</p>
                    </div>

                    <div className='day selected'>
                        <p>{days[day]}</p>
                        <h4>{date}</h4>
                    </div>
                    <div className='day'>
                        <p>{days[cal1.getDay()]}</p>
                        <h4>{cal1.getDate()}</h4>
                    </div>
                    <div className='day'>
                        <p>{days[cal2.getDay()]}</p>
                        <h4>{cal2.getDate()}</h4>
                    </div>
                </div>

                <div className='theater-row'>
                    {theaters.map(function(t){
                    if(t.id.includes(`${movieId}`)){
                        return(
                            <div className='theater-list'>
                                <div className='theater-name'>
                                    <h3>{t.tname}</h3>
                                    <div className='theater-dir'>
                                        <div className='dir'>
                                        <i class="ri-direction-line"></i>
                                            <p>Get Direction</p>
                                        </div>
                                        <div className='dir'>
                                            <i class="ri-information-line"></i>
                                            <p>More Info</p>
                                        </div>
                                    </div>
                                    <div className='theater-fec'>
                                        <p>
                                            {t.fec1 && <span><i class="ri-check-line"></i>{t.fec1}</span>}
                                            {t.fec2 && <span><i class="ri-check-line"></i>{t.fec2}</span>}
                                            {t.fec3 && <span><i class="ri-check-line"></i>{t.fec3}</span>}
                                        </p>
                                    </div>
                                </div>
                                <div className='theater-time'>
                                    {t.time.map(function(x){
                                        if(x.includes("AM")){
                                            if(hr<parseInt(x)){
                                                return(
                                                    <div onClick={goto} className='show-time'>
                                                        <h4>{x}</h4>
                                                        <p>2D</p>
                                                    </div>
                                                )
                                            }
                                        }
                                        else{
                                            if(hr-12<parseInt(x)){
                                                return(
                                                    <div onClick={goto} className='show-time'>
                                                        <h4>{x}</h4>
                                                        <p>2D</p>
                                                    </div>
                                                )
                                            }
                                        }
                                    })}
                                </div>
                            </div>
                        )
                    }
                    })}

                    <div className='movie-cast'>
                        <h2>Movie Cast</h2>
                        <div className='cast-row'>
                        {cast.map(function(x){
                            if(x.id==movieId){
                                return(
                                    x.img.map(function(a,b){
                                        return(
                                            <div>
                                                <div className='cast-img'><img src={a}/></div>
                                                <p>{x.name[b]}</p>
                                            </div>
                                        )
                                    })
                                )
                            }
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Theater