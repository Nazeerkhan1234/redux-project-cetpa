import {configureStore} from '@reduxjs/toolkit'
import adminSlice from './admin.slice'
import cardSlice from './card.slice'
const store = configureStore({ 
reducer:{
  admin:adminSlice ,
  card:cardSlice
}
})
export default store