/* global window */
import React from 'react';
import { Col, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
//import CategoriesContainer from '../../containers/catalog/Categories';
//import CategoriesComponent from '../components/Categories/Categories';

const SidebarNavItems = (props) => (
  <div>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname === '/' && 'active'}`} to="/signin">
        <i className="icon-home" />
        {' '}
        <span>
          Go To SignIn
        </span>
      </Link>
    </NavItem>

  </div>
);

const Sidebar = () => (
  <div>
    <Col sm="3" md="2" className="d-none d-sm-block sidebar">
      <Nav vertical>
        {SidebarNavItems()}
      </Nav>
    </Col>
  </div>
);

export { Sidebar, SidebarNavItems };
