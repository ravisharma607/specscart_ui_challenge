import React from 'react'
import './Footer.css'

import logo from './Img/logo.png'
const Footer = () => {
  return (
    <>
        <section>
        <footer className="footer">
            <div className="footer_head">
                <div>
                    <hr />
                </div>
                <div><img src={logo} alt="" /></div>
                <div>
                    <hr />
                </div>
            </div>
            <div className="footer_links">
                <div>
                    <h2>GLASSES</h2>
                    <ul>
                        <li><a href="#">round flasses</a></li>
                        <li><a href="#">wayfarer glasses</a></li>
                        <li><a href="#">cat eye glasses</a></li>
                        <li><a href="#">rectangular glasses</a></li>
                        <li><a href="#">rimless glasses</a></li>
                        <li><a href="#">verifocal glasses</a></li>
                        <li><a href="#">transition glases</a></li>
                    </ul>
                </div>
                <div>
                    <h2>SUNGLASSES</h2>
                    <ul>
                        <li><a href="#">aviator sunglasses</a></li>
                        <li><a href="#">round sunglasses</a></li>
                        <li><a href="#">cat eye sunglasses</a></li>
                        <li><a href="#">wayfare sunglasses</a></li>
                        <li><a href="#">designer suglasses</a></li>
                        <li><a href="#">polarised sunglasses</a></li>
                        <li><a href="#">prescription sunglasses</a></li>
                    </ul>
                </div>
                <div>
                    <h2>HELP & FAQ</h2>
                    <ul>
                        <li><a href="#">your prescription</a></li>
                        <li><a href="#">digital blue glasses</a></li>
                        <li><a href="#">lenses & coatings</a></li>
                        <li><a href="#">anti reflective lenses</a></li>
                        <li><a href="#">how to order</a></li>
                        <li><a href="#">delivery information</a></li>
                        <li><a href="#">free returns</a></li>
                    </ul>
                </div>
                <div>
                    <h2>ABOUT US</h2>
                    <ul>
                        <li><a href="#">our story</a></li>
                        <li><a href="#">contact us</a></li>
                        <li><a href="#">our blogs</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">franchise</a></li>
                    </ul>
                </div>
                <div className="connect">
                    <div className="head">
                        <div><h2>SUBSCRIBE</h2></div>
                        <div><h2>CONTACT US</h2></div>
                    </div>
                    <div className="message">
                        <textarea name="" id="" cols="10" rows="10" placeholder="Sign up for our newsletter"></textarea><span><ion-icon name="send"></ion-icon></span>
                    </div>
                    <div className="social_media">
                        <ul>
                            <li><a href="#" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a></li>
                            <li><a href="#" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a></li>
                            <li><a href="#" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
                            <li><a href="#" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            <li><a href="#" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hr">
                <hr />
            </div>
            <div className="bottom">
                <div className="copyright"><h3>Developed by HRM International limited &copy; 2018 Specscart</h3></div>
                <div>
                    <h3><a href="#">Terms & Conditions</a> <span>|</span> </h3>
                    <h3><a href="#">Privacy Policy</a> <span>|</span> </h3>
                    <h3><a href="#">Site Map</a></h3>
                </div>
            </div>
        </footer>
    </section>
    </>
  )
}

export default Footer