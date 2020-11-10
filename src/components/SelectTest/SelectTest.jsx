import React from 'react';
import Select from 'react-select';
import './SelectTest.css';

export default function SelectTest() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      borderRadius: '12px',
      backgroundColor: '#253755',
      color: '#586E94',
      padding: 0,
      margin: 0,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: '100%',
      backgroundColor: 'transparent',
      color: '#586E94',
      border: '1px solid #586E94',
      borderRadius: '12px',
      display: 'flex',
      fontSize: '12px',
      fontWeight: 700,
      '&:focus': {
        backgroundColor: '#253755',
      },
      '&:active': {
        backgroundColor: '#253755',
      },
    }),
    option: (provided) => ({
      ...provided,
      fontSize: '12px',
      borderBottom: '1px solid #586E94',
      backgroundColor: '#253755',
      color: '#586E94',
      padding: 10,
      '&:first-child': {
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
      },
      '&:last-child': {
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
      },
    }),
    placeholder: () => ({
      color: '#586E94',
    }),
    indicatorSeparator: () => ({
      backgroundColor: 'transparent',
      color: '#586E94',
      '&:hover': {
        color: '#586E94',
      },
    }),
    indicatorsContainer: () => ({
      color: '#586E94',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    },
  };

  return (
    <div>
      <Select
        styles={customStyles}
        menuColor="red"
        options={options}
      />
    </div>
  );
}
