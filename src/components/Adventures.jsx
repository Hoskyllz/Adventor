import React from 'react'
import "../styles/Adventures.css"
import Adventure from './Adventure'

const Adventures = ({adventures}) => {
  return (
      <div className='adventure-card'>
          {adventures.map((adventure) =>{
              return (
                  <Adventure key= {adventure.id} {...adventure} />
              )
              })}
          
    </div>
  )
}

export default Adventures