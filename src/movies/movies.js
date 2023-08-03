import React, { useContext, useState } from 'react'
import './movies.css'
import {useNavigate} from "react-router-dom"
import { Context } from '../reduce'

export var Movie=[
    {
        name:"Adipurush",
        id:"1",
        img:"https://assetscdn1.paytm.com/images/cinema/Adhipurush-705x750-Recovered-c80a43c0-08db-11ee-8cb2-05fdd2ea0ec1.jpg",
        img1:"https://assetscdn1.paytm.com/images/cinema/Adipurush---563a7460-dae9-11ed-a2db-d3cf14842e45.jpg?format=webp",
        lan:"U - Tamil",
        gen:["Drama"],
        rating:"72%",
        new:"New Release"
    },
    {
        name:"Por Thozil",
        id:"2",
        img:"https://assetscdn1.paytm.com/images/cinema/Por-Thozhil---705x750-b52e5010-ffb8-11ed-b5de-e554beac74a9.jpg",
        img1:"https://assetscdn1.paytm.com/images/cinema/Por-Thozhil2-c23a2810-ffb8-11ed-b5de-e554beac74a9.jpg",
        gen:["Action","Thriller"],
        lan:"U/A - Tamil",
        rating:"93%",
        new:"New Release"
    },
    {
        name:"Takker",
        id:"3",
        img:"https://assetscdn1.paytm.com/images/cinema/Takkar---705x750-d7d93130-df4b-11ed-b7c0-853cfd7b4853.jpg",
        img1:"https://assetscdn1.paytm.com/images/cinema/Takkar--de885010-df4b-11ed-b0fc-2b29ccc4e089.jpg?format=webp",
        gen:["Comedy","Drama","Romance"],
        lan:"U/A - Tamil",
        rating:"73%",
        new:"New Release"
    },
    {
        name:"Transformer",
        id:"4",
        img:"https://assetscdn1.paytm.com/images/cinema/Transformers--Rise-of-the-Beasts---705x750-d47c48d0-05d2-11ee-8639-3309e00ebad5.jpg",
        img1:"https://assetscdn1.paytm.com/images/cinema/Transformers--Rise-of-the-Beasts2-1ec4a3a0-0093-11ee-b221-773c6b27b809.jpg?format=webp",
        gen:["Action"],
        lan:"U/A - Tamil,English",
        rating:"83%",
        new:"New Release"
    },
    {
        name:"Veeran",
        id:"5",
        img:"https://assetscdn1.paytm.com/images/cinema/Veeran-705x750-cc50ad80-fd4a-11ed-ac38-b147650354e7.jpg",
        img1:"https://assetscdn1.paytm.com/images/cinema/Veeran1-f0283ed0-fd4a-11ed-ac38-b147650354e7.jpg?format=webp",
        gen:["Action","Comedy","Drama"],
        lan:"U - Tamil",
        rating:"94%",
        new:""
    },
    {
        name:"Spiderman",
        id:"6",
        img:"https://assetscdn1.paytm.com/images/cinema/spiderman__705x750-c3cc4770-fb9f-11ed-ac38-b147650354e7.jpg",
        img1:"https://assetscdn1.paytm.com/images/cinema/spiderman_-cce0cd90-fb9f-11ed-ac38-b147650354e7.jpg?format=webp",
        gen:["Adventure","Comedy","Drama"],
        lan:"U/A - Tamil,English",
        rating:"87%",
        new:""
    },
    {
        name:"The Flash",
        id:"7",
        img:"https://assetscdn1.paytm.com/images/cinema/The-Flash--705x750-e901c270-0560-11ee-8639-3309e00ebad5.jpg",
        img1:"https://assetscdn1.paytm.com/images/cinema/The-Flash-(including-IMAX)--2-f2360590-0560-11ee-8639-3309e00ebad5.jpg?format=webp",
        gen:["Action","Adventure","Thriller"],
        lan:"U/A - Tamil,English",
        rating:"",
        new:"New Release"
    },
    {
        name:"Good Night",
        id:"8",
        img:"https://assetscdn1.paytm.com/images/cinema/Good-Night-705x750-f19f4f20-ed8b-11ed-8b83-8735af6d695b.jpg",
        img1:"https://assetscdn1.paytm.com/images/cinema/Good-Night-f6f34ad0-ed8b-11ed-8b83-8735af6d695b.jpg?format=webp",
        gen:["Comedy","Drama"],
        lan:"U - Tamil",
        rating:"88%",
        new:""
    },
]
function Movies() {
    var nav=useNavigate();

    let {state,dispatch}=useContext(Context);
    let [lan,setLan]=useState("");
    let [fill,setFill]=useState([]);
    
    let movieDetails=(e)=>{
        var mid=e.currentTarget.querySelector(".hide").innerText;
        var mname=e.currentTarget.querySelector(".movieName").innerText;
        nav(`/movieDetails/?id=${mid}&mname=${mname}`);
    }

    let select=(x)=>{
        setLan(x.target.value);
    }
    let check=()=>{
        var a=[];
        let language=document.querySelectorAll(".gen");
        language.forEach(function(x){
            if(x.checked){
                a.push(x.value);
            }
        })
        setFill(a);
        console.log(fill);
    }

    let click=(e)=>{
        let icon=e.currentTarget.querySelectorAll("i");
        let list=e.currentTarget.parentNode.querySelector("ul");
        icon[0].classList.toggle("hide2");
        icon[1].classList.toggle("hide2");
        list.classList.toggle("hide1");
        console.log(e.currentTarget);
        console.log(e.target);

    }
  return (
    <div id='movie-list'>
        <div className='container'>
        <div id='filter'>
            <div className='filter-row'>
                <h4>Filters :</h4>
            <div className='filter-col'>
            <div className='lan-filter'>
                <div onClick={click} className='lan-head'><h3>Language</h3><i class="bi bi-chevron-up lan-up"></i><i class="bi bi-chevron-down lan-down hide2"></i></div> 
                <ul className='hide1'>
                    <li><input onClick={select} type='radio' name='language' className='lan' value={""}/>All</li>
                    <li><input onClick={select} type='radio' name='language' className='lan' value={"Tamil"}/>Tamil</li>
                    <li><input onClick={select} type='radio' name='language' className='lan' value={"English"}/>English</li>
                    <li><input onClick={select} type='radio' name='language' className='lan' value={"Telugu"}/>Telugu</li>
                    <li><input onClick={select} type='radio' name='language' className='lan' value={"Hindi"}/>Hindi</li>
                    <li><input onClick={select} type='radio' name='language' className='lan' value={"Kannadam"}/>Kannadam</li>
                </ul>
            </div>
            <div className='gen-filter'>
            <div onClick={click} className='gen-head'><h3>Genres</h3><i class="bi bi-chevron-up gen-up"></i><i class="bi bi-chevron-down hide2 gen-down"></i></div> 
                <ul className='hide1'>
                    <li><input onClick={check} type='checkbox' className='gen' value={"Action"}/>Action</li>
                    <li><input onClick={check} type='checkbox' className='gen' value={"Adventure"}/>Adventure</li>
                    <li><input onClick={check} type='checkbox' className='gen' value={"Comedy"}/>Comedy</li>
                    <li><input onClick={check} type='checkbox' className='gen' value={"Drama"}/>Drama</li>
                    <li><input onClick={check} type='checkbox' className='gen' value={"Thriller"}/>Thriller</li>
                    <li><input onClick={check} type='checkbox' className='gen' value={"Romance"}/>Romance</li>
                </ul>
            </div>
            </div>
            </div>
        </div>

        <div id="movies">
                <div className='movies-row'>
                    <h1>Movies</h1>
                    <div className='movies-col'>
                        {Movie.map((x)=>{
                            if(state.search){
                                if(x.name.toLocaleLowerCase().includes(state.search)){
                                    if(x.lan.includes(lan)){
                                        if(fill.length>0){
                                            var flag1=true;
                                    return(
                                        fill.map(function(g){
                                            let go=x.gen.includes(g);
                                            if(go && flag1){
                                                flag1=false;
                                                return(
                                                    <div onClick={movieDetails} className='movies-card'>
                                                        <span className='hide'>{x.id}</span>
                                                        <div className='card-img'>
                                                            <img className='card-img-pc' src={x.img}/>
                                                            <img className='card-img-mobile' src={x.img1}/>
                                                            {x.rating && <span className='rate'><i class="ri-heart-fill"></i>{x.rating}</span>}
                                                            {x.new && <span className='new'>{x.new}</span>}
                                                        </div>
                                                        <div className='card-book'>
                                                            <div className='card-details'>
                                                                <h3 className='movieName'>{x.name}</h3>
                                                                <p>{x.lan}</p>
                                                            </div>
                                                            <div className='card-bt'>
                                                                <a>Book Ticket</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                
                                            }
                                        })
                                    )
                                        }
                                            else{
                                                return(
                                                    <div onClick={movieDetails} className='movies-card'>
                                                        <span className='hide'>{x.id}</span>
                                                        <div className='card-img'>
                                                            <img className='card-img-pc' src={x.img}/>
                                                            <img className='card-img-mobile' src={x.img1}/>
                                                            {x.rating && <span className='rate'><i class="ri-heart-fill"></i>{x.rating}</span>}
                                                            {x.new && <span className='new'>{x.new}</span>}
                                                        </div>
                                                        <div className='card-book'>
                                                            <div className='card-details'>
                                                                <h3 className='movieName'>{x.name}</h3>
                                                                <p>{x.lan}</p>
                                                            </div>
                                                            <div className='card-bt'>
                                                                <a>Book Ticket</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                    }
                                }
                            }
                            else{
                                if(x.lan.includes(lan)){
                                    if(fill.length>0){
                                        var flag1=true;
                                        return(
                                            fill.map(function(g){
                                                let go=x.gen.includes(g);
                                                if(go && flag1){
                                                    flag1=false;
                                                    return(
                                                        <div onClick={movieDetails} className='movies-card'>
                                                            <span className='hide'>{x.id}</span>
                                                            <div className='card-img'>
                                                                <img className='card-img-pc' src={x.img}/>
                                                                <img className='card-img-mobile' src={x.img1}/>
                                                                {x.rating && <span className='rate'><i class="ri-heart-fill"></i>{x.rating}</span>}
                                                                {x.new && <span className='new'>{x.new}</span>}
                                                            </div>
                                                            <div className='card-book'>
                                                                <div className='card-details'>
                                                                    <h3 className='movieName'>{x.name}</h3>
                                                                    <p>{x.lan}</p>
                                                                </div>
                                                                <div className='card-bt'>
                                                                    <a>Book Ticket</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                    
                                                }
                                            })
                                        )
                                    }
                                    else{
                                        return(
                                            <div onClick={movieDetails} className='movies-card'>
                                                <span className='hide'>{x.id}</span>
                                                <div className='card-img'>
                                                    <img className='card-img-pc' src={x.img}/>
                                                    <img className='card-img-mobile' src={x.img1}/>
                                                    {x.rating && <span className='rate'><i class="ri-heart-fill"></i>{x.rating}</span>}
                                                    {x.new && <span className='new'>{x.new}</span>}
                                                </div>
                                                <div className='card-book'>
                                                    <div className='card-details'>
                                                        <h3 className='movieName'>{x.name}</h3>
                                                        <p>{x.lan}</p>
                                                    </div>
                                                    <div className='card-bt'>
                                                        <a>Book Ticket</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            }
                        }
                        
                        )}
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Movies