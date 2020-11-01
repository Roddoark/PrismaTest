import React from 'react'
import './Select.css';

export default function Select(props) {
    return (
        <select className={`select ${props.className}`} name="pets" id={props.id}>
            <option value="">{props.defaultSelect}</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
        </select>
    )
}
