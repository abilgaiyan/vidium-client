/* global window */
import React from 'react';
import { Col, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CategoriesContainer from '../../containers/catalog/Categories';
import CategoriesComponent from '../components/Categories/Categories';

const SidebarNavItems = (props) => (
  <div>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname === '/' && 'active'}`} to="/">
        <i className="icon-home" />
        {' '}
        <span>
          Home
        </span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/recipe') && 'active'}`} to="/recipes">
        <i className="icon-notebook" />
        {' '}
        <span>
          Recipes
        </span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/product') && 'active'}`} to="/products">
        <i className="icon-notebook" />
        {' '}
        <span>
          Products
        </span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/basket') && 'active'}`} to="/basket">
        <i className="icon-notebook" />
        {' '}
        <span>
          Shopping Cart
        </span>
      </Link>
    </NavItem>

    <NavItem>
    <CategoriesContainer {...props} Layout={CategoriesComponent} />
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
