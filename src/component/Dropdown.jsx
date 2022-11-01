import React, { useState, useEffect, useRef } from "react";
//Style
// import dropdownStyle from '../style/Dropdown.css'

export default function Dropdown({
  options,
  selectedColor,
  onSetSelectedColor,
}) {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        console.log("content");
        return;
      }
      setOpen(false);
    });
  });

  const renderColor = options.map((option) => {
    if (option.value === selectedColor.value) {
      return null;
    }
    return (
      <div
        key={option.label}
        className="text-center item"
        onClick={() => onSetSelectedColor(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field ">
        <h1
          style={{ color: `${selectedColor.value}` }}
          className="label #0d6efd text-center bg-secondary"
        >
          Select a color
        </h1>
        <div
          ref={ref}
          onClick={() => setOpen(!open)}
          className={`ui text-center selection dropdown ${open ? "visible active" : ""
            }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedColor.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderColor}
          </div>
        </div>
      </div>
    </div>
  );
}
