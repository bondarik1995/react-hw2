import React from 'react';

const Navbar = ({ activeItem, items, onItemChanged }) => (
  <div className="navbar">
    {items.map(item => (
      <a
        id={item}
        className={(activeItem === item && "active") || null}
        href="#"
        onClick={() => onItemChanged(item)}
        key={item}
      >
        {item}
      </a>
    ))}
  </div>
);

export default Navbar;
