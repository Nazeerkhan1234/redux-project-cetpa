import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkEmail, login} from "../api/callApi";
import {toast} from "react-hot-toast";

export const createThunk = createAsyncThunk("create", async (formData, { rejectWithValue }) => {
    try {
      const result = await checkEmail(formData);
      if (result){
         toast.success("Data sent successfully");
         return result;
        } 
    } catch (e){
        toast.error(e.message); 
        return rejectWithValue(e.message);
    }
  });

//   login Thunk 
export const loginThunk=createAsyncThunk("login",async (data,{rejectWithValue})=>{
    try {
        const result = await login(data);
        if (result){
            toast.success("login successfully");
            return result;}
      } catch (e) {
           toast.error(e.message); 
           return rejectWithValue(e.message);
      }
})

const adminSlice=createSlice({
    name:"admin",
    initialState:{
        users:[],
        loading:false 
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(createThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
        })
        .addCase(createThunk.rejected,(state)=>{
            state.loading=true
        })
        // Login Builder
        builder.addCase(loginThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(loginThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.users=action.payload
        })
        .addCase(loginThunk.rejected,(state)=>{
            state.loading=true
        })
    }
})
export default adminSlice.reducer;