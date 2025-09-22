import React from 'react'
import Logo from '../../../src/assets/images/dossel-logo.png'
import '../header/Header.css'
import tucano from '../../assets/images/selective-focus-shot-toucan-standing-tree-branch.jpg'

function Header() {
  return (
  <div className='header'>
      <img src={Logo} alt='dossel' className='logo' />
      <nav className='nav'>
        <a href='#inicio'>início</a>
        <a href='#sobre'>sobre</a>
        <a href='#setores'>setores</a>
        <a href='#servicos'>serviços</a>
        <a href='#impacto'>impacto</a>
        <a href='#contato' className='cta'>contato</a>
      </nav>
    </div>
  )
}

export default Header
