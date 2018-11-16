import * as React from 'react';

import './css/Card.css';

interface ICardProps {
  img: string;
  alt: string;
  name: string;
} 

export default function Card(props: ICardProps) {
  return (
    <div className="card-wrapper">
      <img src={props.img} alt={props.alt} className="card-img" width="204" height="204" />
      <span>{props.name}</span>
    </div>
  );
}