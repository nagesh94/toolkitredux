import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"users",
    initialState:{
        value:[],
        
    },
    reducers:{
        addUser:(state,{payload})=>{
            state.value=payload
        }
    }

})

export const {addUser}=userSlice.actions
export default userSlice.reducer