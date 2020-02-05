import React, { useState } from 'react';
import Logo from "../media/solarislogo.png";
import '../../src/App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navbar2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="desktopnavbar">
      <Navbar className="navbar navbar-expand-md navbar-light navstyle" light expand="md">
        <a href="/" class="navbar-brand d-flex w-50 mr-auto">
          <img className="logoimg" src={Logo} alt="logo" />
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar" navbar>
            <ul className="navbar-nav">
              <NavItem className="nav-item active">
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="nav-item active">
                  Services
              </DropdownToggle>
                <DropdownMenu className="offerings" right>
                  <DropdownItem href="/applications">
                    Custom Applications
                </DropdownItem>
                  <DropdownItem href="/cms">
                    CMS Development
                </DropdownItem>
                  <DropdownItem href="/concierge">
                    Concierge
                </DropdownItem>
                  <DropdownItem href="/psdtohtml">
                    PSD to HTML
                </DropdownItem>
                  <DropdownItem href="/psdtoemail">
                    PSD to Email
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="nav-item active">
                <NavLink href="/work">Work</NavLink>
              </NavItem>
              <NavItem className="nav-item active">
                <NavLink href="/process">Process</NavLink>
              </NavItem>

            </ul>
          </Nav>
        </Collapse>
        
        <span class="small mt-1 w-50 text-right order-md-last" id="letsdissappear"><a href="/contact" class="btn btn-dark contactnav" >Let's Talk</a></span>
      </Navbar>
    </div>
    
    


  );
}

export default Navbar2;