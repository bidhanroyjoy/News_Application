import React from 'react'

const Banner = () => {
    let url = require(`../assets/bannerimg.jpg`).default
  return (
    <div className="Poster">
     <div className="Poster-img"><img src={url} /></div>
    </div>
  )
}

export default Banner