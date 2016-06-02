import React, { PropTypes } from 'react';

const WebHeaderDropdownList = ({ data, itemHoverHandler }) =>
  <ul className="navbar-dropdown-list">
    {data.map( item =>
      <li className="navbar-dropdown-item" key={item.id} onMouseEnter={itemHoverHandler.bind(this, item.highlight)}>
        <a href={item.href}>{item.name}</a>
      </li>
    )}
  </ul>
  ;

export default WebHeaderDropdownList;
