import React from 'react';
import './Select.css';

function Select(genres, className, id, value, setValue, defaultOption, selected, disabled) {
  return (
    <select
      className={`select ${className}`}
      name="genres"
      id={id}
      value={value}
      onChange={(element) => { setValue(element.target.value); }}
    >
      <option
        className="option"
        defaultValue={selected}
        disabled={disabled}
        value=""
      >
        {defaultOption}
      </option>
      {genres ? genres.map((genre) => (
        <option
          className="option"
          key={genre.id}
          value={genre.id}
        >
          {genre.name}
        </option>
      )) : null}
    </select>
  );
}

export default Select;
