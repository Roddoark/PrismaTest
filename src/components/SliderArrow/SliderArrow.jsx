import React from 'react';

function SliderArrow(classname, onClick, icon) {
  return (
    <button
      type="button"
      className={classname}
      onClick={onClick}
    >
      {/* eslint-disable-next-line react/self-closing-comp */}
      <span className={icon}></span>
    </button>
  );
}

export default SliderArrow;
