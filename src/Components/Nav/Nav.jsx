import React from 'react'

//IMPORTS SYMBOL 
import heart from "../../assets/heart.svg"
import shop from "../../assets/shopping-cart.svg"
const Nav = () => {
  return (
    <div className='Nav'>
        <div className="navLinks">
            <li>Artist</li>
            <li>Music</li>
            <li>Merch</li>
        </div>
        <div className="navTools">
            <div className="search">
                <input type="text" placeholder='Search' />
            </div>
            <div className="heart">
              <img src={heart} alt="" />
            </div>
            <div className="shop">
              <img src={shop} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Nav