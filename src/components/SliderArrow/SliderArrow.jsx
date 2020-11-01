import React from 'react'

function SliderArrow(props) {
    const { classname, onClick, icon } = props;
    return (
        <button
        className={classname}
        onClick={onClick}>
            <span className={icon}></span>
        </button>
    )
}

export default SliderArrow;