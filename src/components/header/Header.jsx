    import React from 'react'
    import Logo from '../../../src/assets/images/dossel-logo.png'
    import '../header/Header.css'
    function Header() {
      return (
        <div className='headercontainer'>
          <img src={Logo} alt="logo dossel" className='logo'/>
        </div>
      )
    }

    export default Header