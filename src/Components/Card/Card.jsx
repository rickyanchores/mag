import React from 'react'

const Card = () => {
  return (
    <div className='Card'>
        <div className="item-image">
            <img src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80" alt="image" />
        </div>
        <div className="item-title">
            <h3>Title</h3>
        </div>
    </div>
  )
}

export default Card;