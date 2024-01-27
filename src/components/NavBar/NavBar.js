import React from 'react'
import "./NavBar.css";

function NavBar() {
  return (
    <div className='navbar'>
        <div className='img'><img className='logo' src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3262425/how-to-vote-icon-sm.png" alt="" /></div>
        <div className='text'>
            <h4 className='admin'>Admin</h4>
            <h1 className='devote'>De-Vote</h1>
        </div>
    </div>
  )
}

export default NavBar
