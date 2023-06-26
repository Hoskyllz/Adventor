import React, {useState} from 'react'
import '../styles/Section1.css'
import data from '../data'
import Adventures from './Adventures'
import adventures from '../data'

const Section1 = () => {
    const [adventure, setAdventure] = useState(data)
    //remove adventure function
    const removeAdventure = (id) => {
        const remainingAdventures = adventure.filter((a) => a.id !== id)
        setAdventure(remainingAdventures)
    }
    const refresh = () => {
        setAdventure(data)
    }
  return (
      <div className='section1'>
          <div className='sec1-heading'>
              <h2 className='take'>Take Yourself</h2>
              <h2 className='ideas'>Adventure Ideas</h2>
          </div>
          <div>
              <Adventures adventures= {adventure} removeAdventure = {removeAdventure}  refresh={refresh} />
          </div>
          
    </div>
  )
}

export default Section1