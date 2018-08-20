import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../assets/img/logo.svg';
import Color from '../../config/theme';

const NavBarContainer = styled.nav`
  background-color: ${Color.white};
  border-bottom: 2px solid ${Color.borderColor};
  margin-bottom: 20px;
`;

const Search = styled.input`
  background-color: transparent;
  border: 1px solid ${Color.borderColor};
  border-radius: 20px;
  padding: 0.6em 0.8em 0.7em 2.5em;
  outline: none;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  height: 40px;
  outline: none;
  position: absolute;
  top: 5px;
  width: 40px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    event.preventDefault();
    const { text } = this.state;
    const { setSearch, history } = this.props;
    setSearch(text);
    history.push('/');
  }

  render() {
    return (
      <NavBarContainer className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid col-md-9 col-md-offset-1">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img height="40" alt="Stories" src={Logo} />
            </Link>
          </div>
          <div className="folding-nav">
            <ul className="nav navbar-nav navbar-right">
              <li className="main-searchbar">
                <form onSubmit={this.onSearch}>
                  <Button name="button" type="submit">
                    <span role="img" aria-label="Emoji">🔍</span>
                  </Button>
                  <Search
                    type="search"
                    name="search"
                    placeholder="Search Users Gists"
                    onChange={e => this.setState({ text: e.target.value })}
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </NavBarContainer>
    );
  }
}

Header.propTypes = {
  setSearch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default Header;
