import React from 'react'

const Nav = () => {
  return (
    <div className='Nav'>
        <div className="navLinks">
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
        </div>
        <div className="navTools">
            <div className="search">
                <input type="text" placeholder='Search' />
            </div>
            <div className="heart">Heart</div>
            <div className="shop">Shop</div>
        </div>
    </div>
  )
}

export default Nav