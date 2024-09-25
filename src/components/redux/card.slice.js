import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addCourse, getAllCards } from "../api/callApi";
import toast from "react-hot-toast";
// Add Course Thunk
export const addCourseThunk=createAsyncThunk("cousre",async (addCourseData,{rejectWithValue})=>{
    try {
        const result = await addCourse(addCourseData);
        if (result){
            toast.success("course add successfully");
            return result;}
      } catch (e) {
           toast.error(e.message); 
           return rejectWithValue(e.message);
      }
})
// Get All Card Thunk
export const getCardThunk=createAsyncThunk("getCard",async ()=>{
    try{
        const result =await getAllCards();
        return result;
    }catch(e){
        toast.error(e.message); 
    }
})
const cardSlice = createSlice({
    name:"card",
    initialState:{
        card:[],
        loading:false
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addCourseThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(addCourseThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.card=action.payload
        })
        .addCase(addCourseThunk.rejected,(state)=>{
            state.loading=true
        })
        // get card builder
        .addCase(getCardThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getCardThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.card=action.payload
        })
        .addCase(getCardThunk.rejected,(state)=>{
            state.loading=true
        })
    }
})
export default cardSlice.reducer;