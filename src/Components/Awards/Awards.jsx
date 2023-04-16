import React from 'react'
import brandImage from './Img/brands.png'
import './Awards.css'
const Awards = () => {
    function moveLeft(){
        document.querySelector('.leftMove').classList.toggle('active')
        document.querySelector('.rightMove').classList.remove('active')
        document.querySelector('.image').classList.toggle('moveRight')
        document.querySelector('.image').classList.add('moveLeft')
    }
    function moveRight(){
        document.querySelector('.leftMove').classList.remove('active')
        document.querySelector('.rightMove').classList.toggle('active')
        document.querySelector('.image').classList.toggle('moveLeft')
        document.querySelector('.image').classList.add('moveRight')
    }
  return (
    <>
    <div className="awards_container">

        <div className="left">
            <h2>Awards.</h2>
            <h2>Followers. Rewards</h2>
            <p>Our work speaks for itself - Specscart has been awarded first prize in 
Venture Further 2018 Business Category. We are constantly working 
to innovate new ways and technology to become UK's leading Eye 
Care provider.</p>
        </div>

        <div className="right">
            <div className="image">
                <img src={brandImage} alt="" />
            </div>
            <div className="action_dot">
                <div className="leftMove dotColor" onClick={moveLeft}></div>
                <div className="rightMove dotColor" onClick={moveRight} ></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Awards