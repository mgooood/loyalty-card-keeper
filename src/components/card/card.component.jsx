import React from 'react';
import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img src={props.card.imgSrc} alt="card"/>
    <h1>{props.card.name}</h1>
  </div>
)