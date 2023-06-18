import React from 'react'
import "./poster.css"
import { useSearchParams } from 'react-router-dom'

let posters=[
    {
        id:"1",
        name:"Adipurush",
        img:"https://assetscdn1.paytm.com/images/cinema/Adipurush---563a7460-dae9-11ed-a2db-d3cf14842e45.jpg?format=webp",
        like:"72%",
        lan:"U - 2h 59m - Epic,Drama - Tamil,Telugu,Hindi"
    },
    {
        id:"2",
        name:"Por Thozil",
        img:"https://assetscdn1.paytm.com/images/cinema/Por-Thozhil2-c23a2810-ffb8-11ed-b5de-e554beac74a9.jpg",
        like:"94%",
        lan:"U/A - 2h 27m - Crime,Thriller - Tamil"
    },
    {
        id:"3",
        name:"Takker",
        img:"https://assetscdn1.paytm.com/images/cinema/Takkar--de885010-df4b-11ed-b0fc-2b29ccc4e089.jpg?format=webp",
        like:"72%",
        lan:"U/A - 2h 19m - Action,Thriller - Tamil,Telugu"
    },
    {
        id:"4",
        name:"Transformer",
        img:"https://assetscdn1.paytm.com/images/cinema/Transformers--Rise-of-the-Beasts2-1ec4a3a0-0093-11ee-b221-773c6b27b809.jpg?format=webp",
        like:"83%",
        lan:"U/A - 2h 8m - Action,Si-Fi - Tamil,English"
    },
    {
        id:"5",
        name:"Veeran",
        img:"https://assetscdn1.paytm.com/images/cinema/Veeran1-f0283ed0-fd4a-11ed-ac38-b147650354e7.jpg?format=webp",
        like:"93%",
        lan:"U - 2h 35m - Drama - Tamil"
    },
    {
        id:"6",
        name:"Spiderman: Across The Spider-Verse",
        img:"https://assetscdn1.paytm.com/images/cinema/spiderman_-cce0cd90-fb9f-11ed-ac38-b147650354e7.jpg?format=webp",
        like:"88%",
        lan:"U/A - 2h 20m - Action,Si-Fi,Superhero - Tamil,English"
    },
    {
        id:"7",
        name:"The Flash",
        img:"https://assetscdn1.paytm.com/images/cinema/The-Flash-(including-IMAX)--2-f2360590-0560-11ee-8639-3309e00ebad5.jpg?format=webp",
        like:"",
        lan:"U/A - 2h 24m - Action,Si-Fi,Superhero - Tamil,English"
    },
    {
        id:"8",
        name:"Good Night",
        img:"https://assetscdn1.paytm.com/images/cinema/Good-Night-f6f34ad0-ed8b-11ed-8b83-8735af6d695b.jpg?format=webp",
        like:"88%",
        lan:"U - 2h 24m - Comedy,Drama,Family - Tamil"
    },
]

function Poster() {

    let [id]=useSearchParams()
    let movieId=id.get("id")

    let toggle=(e)=>{
        var re=e.currentTarget.parentNode.querySelectorAll(".chan");
        e.currentTarget.classList.toggle("like-black");
        e.currentTarget.querySelector(".heart").classList.toggle("hide");
        e.currentTarget.querySelector(".heartfill").classList.toggle("hide");
        if(re[0]==e.currentTarget){
            re[1].classList.remove("like-black");
            re[1].querySelector(".heart").classList.remove("hide");
            re[1].querySelector(".heartfill").classList.add("hide");
        }
        else{
            re[0].classList.remove("like-black");
            re[0].querySelector(".heart").classList.remove("hide");
            re[0].querySelector(".heartfill").classList.add("hide");
        }
    }

    
  return (
    <div id='poster'>
        <div className='poster-row'>
            <div className='poster-img'>
                <img src={posters[movieId-1].img}/>
            </div>
            <div className='poster-details'>
                <div className='poster-movie'>
                    {posters[movieId-1].like && <span><i class="ri-heart-fill"></i><span className='poster-rate'> {posters[movieId-1].like} </span> liked this movie</span>}
                    <h1>{posters[movieId-1].name}</h1>
                    <p>{posters[movieId-1].lan}</p>
                </div>
            </div>
        </div>

        <div className='poster-row1'>
            <div className='showlist'>
                <p className='under'>Showlist</p>
                <p>About Movie</p>
            </div>
            {posters[movieId-1].like && <div className='like-dislike'>
                <div className='like-rate'>
                    <i class="ri-heart-fill"></i>
                    <div className='like-details'>
                        <h3>{posters[movieId-1].like}</h3>
                        <p>liked this movie</p>
                    </div>
                </div>

                <div className='like-click'>
                    <div onClick={toggle} className='like chan'>
                        <i class="bi bi-heart heart"></i><i class="bi bi-heart-fill heartfill red hide"></i>
                        <span>Like</span>
                    </div>
                    <div onClick={toggle} className='dislike chan'>
                        <i class="bi bi-heartbreak heart"></i><i class="bi bi-heartbreak-fill heartfill black hide"></i>
                        <span>Dislike</span>
                    </div>
                </div>
            </div>}
        </div>
    </div>
  )
}

export default Poster