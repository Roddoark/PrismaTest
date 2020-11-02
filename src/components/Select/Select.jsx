import React from 'react'
import './Select.css';
export default function Select({genres, className, id, value, setValue, defaultOption}) {
    return (
        <select className={`select ${className}`} name="genres" id={id} value={value} onChange={(e)=>{setValue(e.target.value)}}>
            <option defaultselect value="">{defaultOption}</option>
           {genres ? genres.map(genre => (
                <option value={genre.id}>
                    {genre.name}
                </option>
            )) : null}
        </select>
    )
}