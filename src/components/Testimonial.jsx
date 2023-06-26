import React, {useState} from 'react'
import "../styles/testimonial.css"
import clients from '../user'
import {BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"


const Testimonial = () => {
    const [index, setIndex] = useState(0)
    const { id, comment, image, name, job } = clients[index]
    const checkNumber = (num) => {
        if (num > clients.length - 1) {
            return 0
        }
        if (num < 0) {
            return clients.length -1
        }
        return num
    }
    
    const prevPerson = () => {
        setIndex((index) => {
            return checkNumber(index - 1)
        })
    }

        const nextPerson = () => {
        setIndex((index) => {
            return checkNumber(index + 1)
        })
    }
  return (
      <div className='testimonial'>
          <div className="heading">
              <h3>Clients Testimonial</h3>
              <h2>Adventure Ideas</h2>
              <div className="testimonial-main">
                 <img src={image} alt={name} />
                  <p>{comment} </p>
                  <div className="btn-container">
                      <button onClick={prevPerson}><BsArrowLeftShort />
                      </button>
                      <button onClick={nextPerson}><BsArrowRightShort />
                      </button>
                  </div>
                  <h2>{name} </h2>
                  <h3>{job} </h3>

              </div>
          </div>
    </div>
  )
}

export default Testimonial