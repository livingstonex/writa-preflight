import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

import HomeUrl from '../assets/images/home-border.png';
import RoadmapImg from '../assets/images/roadmap.png';

export default class Roadmap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className='section bg-services' id='services'>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='title-box text-center'>
                  <h3 className='title-heading'>Roadmap</h3>
                  <img src={HomeUrl} height='15' className='mt-3' alt='' />
                </div>
              </Col>
            </Row>
            <Row className='pt-4'>
              <Col className='text-center'>
                <img
                  src={RoadmapImg}
                  className='roadmap-img roadmamp-img-mobile'
                  alt=''
                />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
