import React from 'react'
import './card.css'

function Card({ userName, followers, todayFollowers, icon}){
    return (
        <article className="card facebook">
          <p className="card-title">
            <img src={ icon } alt=""/>
             { userName }
          </p>
          <p className="card-followers">
            <span className="card-followers-number">{ followers }</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            { todayFollowers} Today
          </p>
        </article>
    )
}

export default Card