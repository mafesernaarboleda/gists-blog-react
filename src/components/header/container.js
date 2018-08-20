import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Button = styled.button`
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
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid col-md-10 col-md-offset-1">
          <div className="navbar-header">
            <Link className="navbar-brand" id="logo" to="/">
              <img height="40" alt="Stories" src="https://my-medium-clone.herokuapp.com/assets/stories-logo-b94c0c3ea98cf69025e1b31a0c60eca185e0800bde6fa0efac23640b9a29e484.svg" />
            </Link>
          </div>
          <div className="folding-nav">
            <ul className="nav navbar-nav navbar-right">
              <li className="main-searchbar">
                <form onSubmit={this.onSearch}>
                  <Button name="button" type="submit">
                    <span role="img" aria-label="Emoji">🔍</span>
                  </Button>
                  <input type="search" name="search" placeholder="Search Stories" onChange={e => this.setState({ text: e.target.value })} />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
