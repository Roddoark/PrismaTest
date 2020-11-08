import React from 'react';
import './Label.css';

export default function Label(children, htmlFor) {
  return (
    <label className="label mr-10" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
