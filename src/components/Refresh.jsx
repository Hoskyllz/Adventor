import React from 'react'
import '../styles/Refresh.css'
import refImg from '../assets/ref.png'


const Refresh = ({Refresh}) => {
  return (
      <div>
          <div className='no-adventure'>
              <img src={refImg} alt="Refresh Image" />
              <h2>
                  No Adventures Left
              </h2>
              <p>Refresh page to view different adventures from the long list of ideas available</p>
          </div>

          <button onClick={Refresh} className="notbtn">Refresh</button>
    </div>
  )
}

export default Refresh