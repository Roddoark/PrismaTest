import React from 'react';
import './Label.css';

export default function Label(Childn, Cfor) {
  return (
    <label className="label mr-10" htmlFor={Cfor}>
      {Childn}
    </label>
  );
}
