import { TiDeleteOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCardThunk } from "../redux/card.slice";

const Card = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const result=useSelector((state)=>state.card.card)
  useEffect(()=>{
   dispatch(getCardThunk())
  },[])

  function showPdf(pdf){
    window.open(`http://localhost:8000/cards/${pdf}`)
  }
  return (
    <>
    {result && result.length>0?(result.map((res,idx)=>(
      <div className="card lg:w-[250px] md:w-[250px] sm:w-[250px] xs:w-[350px] p-2 shadow-md shadow-white text-white flex flex-col gap-2" key={idx}>
        <div className="img w-full rounded-xl">
          <Link
            to=""
            className="absolute text-3xl left-2 top-2 text-black rounded-full">
            <MdEdit />
          </Link>
          <Link className="absolute text-3xl right-2 top-2 text-black">
            <TiDeleteOutline />
          </Link>
          <img
            src="/teacher2.png"
            alt="coding image"
            className="rounded-xl"
          />
        </div>

        <div className="title capitalize lg:text-2xl md:text-lg">
          Course: {res.course}
        </div>

        <div className="about_course truncate"> {res.content}</div>

        <div className="button text-end flex justify-around items-center">
          <div className="name capitalize text-[10px]">By: {res.owner}</div>

          <button className="btn btn-error md:btn-sm capitalize lg:text-sm md:text-[10px] sm:text-[10px]"
          onClick={()=>showPdf(res.coursePdf)}>
            Download PDF
          </button>
        </div>
      </div>
    ))):(<h1>No Cards Available</h1>)}
      
    </>
  );
};

export default Card;
