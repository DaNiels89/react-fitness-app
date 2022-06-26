import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <nav class="primary-menu">
        <Link to="/">FitnessApp</Link>
        <ul class="primary-menu__list">
          <li class="primary-menu__list-item"><Link to="/">Home</Link></li>
          <li class="primary-menu__list-item"><Link to="/excercises/">Excercises</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar