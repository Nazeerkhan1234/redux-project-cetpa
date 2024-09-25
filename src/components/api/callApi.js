import axios from 'axios'
const createApi='http://localhost:8000/api/v1/create';
const loginApi="http://localhost:8000/api/v1/login"
const emailApi="http://localhost:8000/api/v1/checkMail"
const addCardApi="http://localhost:8000/api/v1/addCard"
const getCardApi="http://localhost:8000/api/v1/cards"

async function create(formData) {
   try{
    const response=await axios.post(createApi,formData);
    return response.data;
   }catch(e){
    throw new Error(e.response.data.message);
   }
}
// Login Api
export async function login(data) {
    try{
        const response=await axios.post(loginApi,data);
        if(response.data){
            localStorage.setItem("token",response.data.token)
            return response.data;
        }
       }catch(e){
        throw new Error(e.response.data.message);
       }
}
// Check Email
export async function checkEmail(formData){
    try{
        const response=await axios.post(emailApi,{email:formData.get("email")})
        if(response.status===200){
            return await create(formData)
        }
    }catch(e){
       throw new Error(e.response.data.message); // Throw an error to be caught in createThunk
    }
}
// Add course
export async function addCourse(addCourseData) {
    try{
        const response = await axios.post(addCardApi,addCourseData);
        return response.data
    }catch(e){
        throw new Error(e.response.data.message); 
    } 
}
// get All Card
export async function getAllCards() {
    try{
        const response=await axios.get(getCardApi)
        return response.data.cards;
    }catch(e){
        throw new Error(e.response.data.message); 
    }
    
}