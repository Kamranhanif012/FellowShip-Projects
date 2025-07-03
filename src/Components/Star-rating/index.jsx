import { useState } from "react"
import {FaStar} from "react-icons/fa"

import "./style.css";

export default function StarRating({noOfStars = 5}){
    
    const [Rating, setRating] = useState(0)
    const [Hover, setHover]= useState(0)

    function handleClick(getCurrrentIndex){
        console.log(getCurrrentIndex)
       setRating(getCurrrentIndex);

    }

    function handleMouseEnter(getCurrrentIndex){
        console.log(getCurrrentIndex)
        setHover(getCurrrentIndex)
    }

    function handleMouseLeave(){
        console.log(Rating)
        setHover(Rating)
    }
    
    return(

        

        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index) =>
                {   
                    index += 1
                    return(
                        <FaStar

                        key={index}
                        className={index <= (Hover || Rating) ? "active": "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseEnter={()=> handleMouseEnter(index)}
                        onMouseLeave={()=> handleMouseLeave()}
                        size={40}
                        
                        />
                    )
                })
            }

        </div>
    )
}