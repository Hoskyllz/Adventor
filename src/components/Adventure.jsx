import React, { useState } from 'react'
import {BsStarFill,BsStar} from "react-icons/bs"

const Adventure = ({ id, image, info, title, removeAdventure }) => {
    const [readMore, setReadMore] = useState(true)
    const toggleRead = () => {
        setReadMore(!readMore)
    }
  return (
      <div className='maincard'>
          <img src={image} alt={title} className='photo' />
          <article>
              <div className="title-icon">
                  <h5> {title} </h5>
                  <p className='star'><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/></p>
              </div>
              <p className="adventure-text">
                  {readMore ? `${info.substring(0,50)}...`:info}
                  <button onClick={toggleRead}>{readMore?  "Read More" : "Show less" }</button>
              </p>
          </article>
          <button onClick={()=> removeAdventure (id)} className="notbtn">Not Interested</button>
    </div>
  )
}

export default Adventure