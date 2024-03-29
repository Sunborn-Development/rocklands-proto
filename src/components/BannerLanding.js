import React from 'react'

const BannerLanding = (props) => (
  <section id="banner" className={props.style}>
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
    </div>
  </section>
)

export default BannerLanding
