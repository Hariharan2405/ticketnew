import { createContext } from "react";

export let Initial={
    search:"",
    theater:{
        obj:{
            movie:"",
            theater:"",
            date:"",
            day:"",
            month:"",
            time:""
        }
    },
    ticket:{
        obj:{
            amount:"",
            seats:""
        }
    }
};

export const Context=createContext();

export function Reduce(state,action) {
    switch(action.type){
        case "theaterDetails":return{
            ...state,
            theater:action.payload
        };
        case "ticketDetails":return{
            ...state,
            ticket:action.payload
        }
        case "search":return{
            ...state,
            search:action.payload
        }
    }
}
