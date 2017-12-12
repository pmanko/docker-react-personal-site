import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class TopNav extends React.Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
  }

  render() {
    return (
      <Navbar color="faded" light expand='md'>
        <NavbarBrand href='/'>Piotr Mankowski</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profile" className='nav-link'>Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cv" className='nav-link'>CV Overview</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/research" className='nav-link'>Research</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/gallery" className='nav-link'>Project Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className='nav-link'>Contact Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className='nav-link'>About This Site</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
