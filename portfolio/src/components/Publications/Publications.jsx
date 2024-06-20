import React from 'react'
import "./portfolio.css"
import Projects from './Projects'

const Publications = () => {
  
  return (
    <section className="work section" id='publications'>
      <h2 className="section__title">Publications</h2>
      <span className="section__subtitle">My Publications</span>

      <Projects />
    </section>
  )
}

export default Publications