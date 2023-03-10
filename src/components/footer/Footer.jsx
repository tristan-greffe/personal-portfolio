import React from 'react'

// Import CSS
import './footer.css'

// Import icons
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Tristan Greffe</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skill'>Skill</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/tristan-greffe' target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/entertotheneworld/' target='_blank' rel='noreferrer'><FaGithub /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Tristan Greffe. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
