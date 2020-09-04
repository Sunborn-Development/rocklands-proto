import React from 'react'

import logo from '../assets/images/logo.wh.svg'

const Banner = (props) => (
  <section id="banner" className="major">
    <div className="inner">
      <h1 className="logo" style={{backgroundImage: `url(${logo})`}}>ROCKLANDS</h1>
    </div>
  </section>
)

export default Banner
