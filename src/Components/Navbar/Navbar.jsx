import React from 'react'
import './Navbar.css'

import logo from './Img/logo.png'
import searchIcon from './Img/search.png'
import userIcon from './Img/person.png'
import heartIcon from './Img/heart.png'
import homeIcon from './Img/home.png'
import cartIcon from './Img/Cart.png'
const Navbar = () => {
    
    window.onscroll = function () { myFunction() };

    function myFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('logo').classList.add('active')
            document.getElementById('topNav').classList.add('active')
            document.getElementById('bottomNav').classList.add('active')
        } else {
            document.getElementById('logo').classList.remove('active')
            document.getElementById('topNav').classList.remove('active')
            document.getElementById('bottomNav').classList.remove('active')
        }
    }
    function toggleIcon(){
        let menu = document.getElementById('menu')
        let cross = document.getElementById('cross')
        if (menu.style.display == 'block') {
            menu.style.display = 'none'
            cross.style.display = 'block'
        }
        else {
            menu.style.display = 'block'
            cross.style.display = 'none'
        }  
    }
    return (
        <>
            <section className="navbar_container">
                <div className="menuIcon" onClick={toggleIcon}>
                    <span id="menu"><ion-icon name="menu"></ion-icon></span>
                    <span id="cross"><ion-icon name="close"></ion-icon></span>
                </div>
                <div className="topNav" id="topNav">
                    <div className="left">
                        <ul>
                            <li><a href="#">Free Returns</a> <span>|</span> </li>
                            <li><a href="#">Try At Home</a><span>|</span></li>
                            <li><a href="#">24 Hr Dispatch</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="#">+441613125767</a><span>|</span></li>
                            <li><a href="#">Help</a><span>|</span></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                    </div>
                </div>
                <div className="logo" id="logo">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <div className="bottomNav" id="bottomNav">
                    <div className="left">
                        <ul>
                            <li><a href="#">Glasses</a></li>
                            <li><a href="#">Sunglasses</a></li>
                            <li><a href="#">Eye-Test</a></li>
                            <li><a href="#">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href=""><img src={searchIcon} alt="" /></a></li>
                            <li><a href=""><img src={userIcon} alt="" /></a></li>
                            <li><a href=""><img src={heartIcon} alt="" /></a></li>
                            <li><a href=""><img src={homeIcon} alt="" /></a></li>
                            <li><a href=""><img src={cartIcon} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Navbar