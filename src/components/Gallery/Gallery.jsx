import React from 'react'
import "./Gallery.css"
import gallery01 from "../../assets/gallery-1.png"
import gallery02 from "../../assets/gallery-2.png"
import gallery03 from "../../assets/gallery-3.png"
import gallery04 from "../../assets/gallery-4.png"
import whiteArrow from "../../assets/white-arrow.png"

const Gallery = () => {
  return (
      <div className='campus'>
          <div className="gallery">
              <img src={gallery01} alt="" />
              <img src={gallery02} alt="" />
              <img src={gallery03} alt="" />
              <img src={gallery04} alt="" />
          </div>
          <button className='btn dark-btn'>See more here <img src={whiteArrow} alt="" /></button>
    </div>
  )
}

export default Gallery