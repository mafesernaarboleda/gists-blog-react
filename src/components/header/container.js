import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../assets/img/logo.svg';

const NavBarContainer = styled.nav`
  background-color: rgba(255,255,255,0.9);
  border-bottom: 2px solid rgba(0,0,0,0.05);
  margin-bottom: 20px;
`;

const Search = styled.input`
  padding: 0.6em 0.8em 0.7em 2.5em;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  outline: none;
  background-color: transparent;
`;

const Button = styled.button`
  border: none;
  position: absolute;
  top: 5px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  outline: none;
  background: transparent;
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
        <div className="container-fluid col-md-10 col-md-offset-1">
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
