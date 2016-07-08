import React, { PropTypes } from 'react';
import styles from './DropdownListItem.styl';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DropdownListItem = ({ hasArrow, parentClass, itemHoverHandler, item }) => {
  const logos = {
    auth0: 'http://styleguide.auth0.com/lib/logos/img/badge.png',
    webtask: 'https://webtask.io/images/symbol.svg'
  };

  return (
    <li
      className={cx({
        item: !hasArrow,
        arrowItem: hasArrow,
        moreItem: parentClass === 'moreDropdown'
      })}
      onMouseEnter={() => {itemHoverHandler(item.highlight);}}
    >
      <a href={item.href}>
        {item.icon
          ? <img src={logos[item.icon]} className={cx('icon')} role="presentation" />
          : null
        }
        <span className={cx('text')}>{item.name}</span>
      </a>
    </li>
  );
};

DropdownListItem.propTypes = {
  item: PropTypes.object,
  itemHoverHandler: PropTypes.func,
  dropdownReference: PropTypes.object,
  hasArrow: PropTypes.bool,
  parentClass: PropTypes.string
};

export default DropdownListItem;
