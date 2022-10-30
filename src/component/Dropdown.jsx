import React, { useState } from 'react';


export default function Dropdown({ options, selectedColor, onSetSelectedColor }) {
  const [open, setOpen] = useState(false);


  const renderColor = options.map(option => {
    if (option.value === selectedColor.value) {
      return null;
    }
    return (
      <div
        key={option.label}
        className="text-center item"
        onClick={() => onSetSelectedColor(option)}>
        {option.label}
      </div>
    )
  })

  return (
    <div className="ui form">
      <div className="field ">
        <h1 className='label #0d6efd  text-center'>Select a color</h1>
        <div
          onClick={() => setOpen(!open)}
          className={`ui text-center selection dropdown ${open ? 'visible active' : ''}`}>
          <i className='dropdown icon'></i>
          <div className="text">{selectedColor.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderColor}</div>
        </div>
      </div>
    </div>
  )
}
