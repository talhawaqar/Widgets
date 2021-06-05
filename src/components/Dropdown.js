import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  useEffect(() => {

    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };
    console.log('hola');
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return (document.body.removeEventListener('click', onBodyClick, { capture: true }));

  }, []);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label} </label>
        <div onClick={() => { setIsOpen(!isOpen) }} className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
