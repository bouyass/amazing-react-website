import React from 'react'
import CardItem from './CardItem' 
import './Cards.css'

function Card() {
    return (
        <div className="cards">
            <h1> Check out these EPIC destinations </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            img="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon"
                            label="adventure"
                            path="/services"
                        />
                        <CardItem 
                            img="images/img-2.jpg"
                            text="Travel throught the islands of bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem 
                            img="images/img-3.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon"
                            label="adventure"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            img="images/img-1.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon"
                            label="adventure"
                            path="/services"
                        />
                        <CardItem 
                            img="images/img-4.jpg"
                            text="Travel throught the islands of bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem 
                            img="images/img-5.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon"
                            label="adventure"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            img="images/img-6.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon"
                            label="adventure"
                            path="/services"
                        />
                        <CardItem 
                            img="images/img-7.jpg"
                            text="Travel throught the islands of bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem 
                            img="images/img-8.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon"
                            label="adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
