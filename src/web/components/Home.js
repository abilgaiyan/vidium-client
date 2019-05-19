import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

const Home = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>
          Vidium App
        </h1>
        <p className="lead">
          Vidium Web.
        </p>
        <p>
          Vidium web for client
        </p>
      </Jumbotron>
    </Row>
    <Row className="pt-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-map" />
          {' '}
          Routing
        </h3>
        <p>
          React Router is used to handle all web-side routing.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="" className="btn btn-primary">
            Vidium Router
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-fire" />
          {' '}
          Vidium Database
        </h3>
        <p>
         MongoDb Atlas

        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="" className="btn btn-primary">
          Vidium Database [MongoDb]
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-organization" />
          {' '}
          Video Catalog
        </h3>
        <p>
          Video Category Display
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="" className="btn btn-primary">
            Video for Vidium
          </a>
        </p>
      </Col>
    </Row>
    <Row className="pt-md-5 pb-5">
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-layers" />
          {' '}
          Product Category
        </h3>
        <p>
          Categorywise Products.
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="" className="btn btn-primary">
            Product attributes.
          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-drop" />
          {' '}
          Web Styles
        </h3>
        <p>
          Webpack, SCSS, Bootstrap and ReactStrap - .
        </p>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="" className="btn btn-primary">

          </a>
        </p>
      </Col>
      <Col xs="12" md="4" className="pt-3 pt-md-0">
        <h3>
          <i className="icon-user-following" />
          {' '}
          Auth
        </h3>
        <p>
          Most apps need user authentication. Auth - but
          we can easily change that within the `/actions/member.js`
        </p>
        <p>
          
        </p>
      </Col>
    </Row>
    <hr />
    <Row className="pt-5">
      <Col xs="5" sm="3" lg="2" className="offset-lg-2">
        <img className="img-fluid rounded-circle" src="" alt="" />
      </Col>
      <Col xs="12" sm="9" lg="5" className="pt-4 pt-sm-0">
        <h3>
          Add more pages
        </h3>
        <p>
          Need to add more pages as per requirements,
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="">
            More ....
          </a>
          {' '}

        </p>
      </Col>
    </Row>
  </div>
);

export default Home;
