import React from 'react';

function SliderArrow(classname, onClick, icon) {
  return (
    <button
      type="button"
      className={classname}
      onClick={onClick}
    >
      <span className={icon}></span>
    </button>
  );
}

export default SliderArrow;
