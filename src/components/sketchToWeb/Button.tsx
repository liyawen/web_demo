import * as React from 'react';
import './css/Button.css';

interface IBtnProps {
  type?: string;
  children: string;
}

export default function Button(props: IBtnProps) {
  let className = 'btn-white';
  if (props.type === 'orange') {
    className = 'btn-orange';
  }
  return (
    <button className={className}>{props.children}</button>
  )
}