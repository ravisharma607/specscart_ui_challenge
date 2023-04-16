import React, { useState, useEffect } from 'react'
import './Review.css'
import ReviewAPI from './ReviewAPI'
const Review = () => {
    const [currState, setcurrState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currState === 8) {
                setcurrState(1)
            }
            else {
                setcurrState(currState + 1)
            }
        }, 4000);
        
        return () => {
            clearTimeout(timer)
        }
    }, [currState])
    function moveLeft(){
        if(currState === 0){
            setcurrState(8)
        }
        else{
            setcurrState(currState - 1)
        }
    }
    function moveRight(){
        if(currState === 8){
            setcurrState(1)
        }
        else{
            setcurrState(currState + 1)
        }
    }    return (
        <>
            <section className="review_Container">
                <h2>Google & FB Reviews</h2>
                <div className="review_content">
                <div className="slide">
                                <img src={ReviewAPI[currState].img} alt="" className="image"/>
                                <h3>{ReviewAPI[currState].person}</h3>
                                <div className="star">
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                                <p>{ReviewAPI[currState].desc}</p>
                            </div>
                    <div className="move">
                        <div className="left" onClick={moveLeft}><ion-icon name="arrow-dropleft"></ion-icon></div>
                        <div className="right" onClick={moveRight}><ion-icon name="arrow-dropright"></ion-icon></div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Review