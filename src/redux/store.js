import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slice";

export const store=configureStore({
    reducer:{
        xyz:userSlice,
        
    }
})

//reducer is a function replacement of useState
//we have three whatever in redux
//1)state 
//2)actions 
//3)reducer
