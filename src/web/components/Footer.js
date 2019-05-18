import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="mt-5">
    <Row>
      <Col sm="12" className="text-right pt-3">
        <p>
          Vidium footer
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="">
            Url
          </a>
          {' '}
          &nbsp; | &nbsp; Videos
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="">
            Vidium
          </a>
          .
        </p>
      </Col>
    </Row>
  </footer>
);

export default Footer;
