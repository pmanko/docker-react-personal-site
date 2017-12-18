import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class extends React.Component {
  static propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    name: React.PropTypes.string.isRequired
  }

  render() {
    const {isOpen, name} = this.props;

    return <Navbar color="faded" light expand='md'>
      <NavbarBrand href='/'>{name}</NavbarBrand>
      <NavbarToggler />
      <Collapse isOpen={false} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to="/01-intro" className='nav-link'>Intro</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/02-profile" className='nav-link'>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/03-cv" className='nav-link'>CV Overview</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/04-research" className='nav-link'>Research</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/05-gallery" className='nav-link'>Project Gallery</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/06-contact" className='nav-link'>Contact Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/07-about" className='nav-link'>About This Site</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='posts' className='nav-link'>Posts</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}
