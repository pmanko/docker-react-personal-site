import React from 'react';
import {connect} from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

  // constructor(props) {
  //     super(props);
  //
  //     this.toggle = this.toggle.bind(this);
  //     this.state = {
  //       isOpen: false
  //     };
  //   }
  //   toggle() {
  //     this.setState({
  //       isOpen: !this.state.isOpen
  //     });
  // }


const TopNav = ({isOpen}) =>
  <Navbar color="faded" light expand='md'>
    <NavbarBrand href='/'>Piotr Mankowski</NavbarBrand>
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
  </Navbar>

export default TopNav;

function mapStateToProps(state) {
  return {
    isOpen: state.getIn(['nav', 'isOpen']),
  };
}

export const TopNavContainer = connect(mapStateToProps)(TopNav);
