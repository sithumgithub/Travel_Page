import React from 'react'
import './main.css'


//Data
/*
const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Yudaganawa',
    location: 'Buttala',
    Grade: 'Religous',
    description: 'hagduywg hasd hqajd uqywgq ioqjijd ahuhd' 
  }
]
*/


const Main = () => {
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid"></div>

      {/* {
        Data.map(({id, imgSrc, destTitle, location, Grade, description})=>{
        
        })
      } */}

    </section>
  )
}

export default Main