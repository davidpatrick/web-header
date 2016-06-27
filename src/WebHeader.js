import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import Head from './Head';
import Item from './Item';
import menuItems from './menu-items.json';
import styles from './WebHeader.styl';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const items = menuItems.filter(item => item.active === undefined || item.active === true);


class WebHeader extends Component {
  static propTypes = {
    loginButtonText: PropTypes.string,
    loginButtonOnClick: PropTypes.func,
    promoteLink: PropTypes.object,
    theme: PropTypes.string
  };

  static defaultProps = {
    loginButtonText: 'Log in',
    loginButtonOnClick: () => {},
    promoteLink: {
      active: true,
      url: 'https://auth0.com/jobs',
      text: 'We\'re hiring!'
    },
    theme: 'dark'
  };

  constructor(props) {
    super(props);

    this.navbarDropdownHandler = ::this.navbarDropdownHandler;
    this.handleDocumentClick = ::this.handleDocumentClick;
  }

  state = {
    navbarDropdownIsOpen: false
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('touchend', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('touchend', this.handleDocumentClick);
  }

  handleDocumentClick(event) {
    if (!findDOMNode(this.refs.menuDropdown).contains(event.target)) {
      this.setState({ navbarDropdownIsOpen: false });
    }
  }

  navbarDropdownHandler() {
    this.setState({ navbarDropdownIsOpen: !this.state.navbarDropdownIsOpen });
  }

  isDefaultLoginText() {
    return this.props.loginButtonText === WebHeader.defaultProps.loginButtonText;
  }

  render() {
    return (
      <div>
        <header className={cx('siteHeader', {
          dropdownOpen: this.state.navbarDropdownIsOpen,
          [`theme-${this.props.theme}`]: true
        })}
        >
          <nav>
            <div className="container">
              <Head
                toggleDropdownHandler = {this.navbarDropdownHandler}
                promoteLink = {this.props.promoteLink}
                dropdownOpen = {this.state.navbarDropdownIsOpen}
                theme = {this.props.theme}
              />
              <div
                className={cx('collapse', {
                  dropdownOpen: this.state.navbarDropdownIsOpen,
                  in: this.state.navbarDropdownIsOpen
                })}
              >
                <ul className={cx('navigationLeft')}>
                  {items.map(item =>
                    <Item
                      key={item.position + item.id}
                      item={item}
                      theme={this.props.theme}
                    />
                  )}
                </ul>
                <ul className={cx('navigationRight')}>
                  <a href="#" className="btn btn-transparent btn-sm"> Talk to sales </a>
                  <button className="btn btn-success btn-sm">Log in</button>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <img src="http://lorempixel.com/400/400/sports/" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora sint quod eum labore dolorem rem nam ducimus officiis, quia?</p>
            </div>
            <div className="col-xs-6">
              <img src="http://lorempixel.com/400/600/cats/" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloremque similique, laboriosam corporis nobis vero aperiam officia voluptates, corrupti nam reprehenderit accusantium cum? Laudantium sit, nesciunt iusto sed! Dolorem eius eligendi dolorum saepe quasi nisi earum, vitae reiciendis fuga fugit! Quas eos placeat nam aspernatur doloremque eaque dolorem, consequatur officia.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebHeader;
