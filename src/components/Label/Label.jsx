import React from 'react'
import './Label.css';

export default function Label(props) {
    return (
        <label className="label mr-10" htmlFor={props.htmlFor}>
            {props.children}
        </label>
    )
}
