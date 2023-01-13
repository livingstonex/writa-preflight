import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CountUp from 'react-countup';

import { Link } from 'react-router-dom';
import HomeUrl from '../assets/images/home-border.png';
import Growth from '../assets/images/growth.jpeg';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 'service1',
          icon: 'mdi-google',
          title: 'Digital Ad Copy',
          description: this.digital(),
          // '- Facebook Ads Quisque rhoncus lectus ut lectus hendrerit at convallis lorem ornare pellentesque lobortis hendrerit mattis.',
        },
        {
          id: 'service2',
          icon: 'mdi-instagram',
          title: 'Social Media Content',
          description: this.socialmedia(),
          // 'Vestibulum eu tortor artett tortor rhoncus porta quis on metus morbi comodo nisi vitae neque aliquam aliquam.',
        },
        {
          id: 'service3',
          icon: 'mdi-book',
          title: 'Sales Copy',
          description: this.salescopy(),
          // 'Aliquam dictum mollis sem sed hendrerit tempus sed class aptent taciti sociosqu litora conubia himenaeos.',
        },
        {
          id: 'service1',
          icon: 'mdi-script',
          title: 'Blog Content',
          description: this.blogcopy(),
          // '- Facebook Ads Quisque rhoncus lectus ut lectus hendrerit at convallis lorem ornare pellentesque lobortis hendrerit mattis.',
        },
        {
          id: 'service2',
          icon: 'mdi-web',
          title: 'Website Copy',
          description: this.websitecopy(),
          // 'Vestibulum eu tortor artett tortor rhoncus porta quis on metus morbi comodo nisi vitae neque aliquam aliquam.',
        },
        {
          id: 'service3',
          icon: 'mdi-cart',
          title: 'eCommerce Copy',
          description: this.ecommercecopy(),
          // 'Aliquam dictum mollis sem sed hendrerit tempus sed class aptent taciti sociosqu litora conubia himenaeos.',
        },
      ],
      counters: [
        {
          id: '1',
          extraclass: '',
          start: 25,
          end: 49,
          title: 'Employees',
          description:
            'Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.',
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 25,
          end: 76,
          title: 'Projects',
          description:
            'Pellentesque habitant morbi malesuada fames ac turpis egestas.',
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: 'CLIENTS',
          description:
            'Suspendisse congue risus consequat sapien potitor risus tincidunt.',
        },
      ],
    };
  }

  digital() {
    return (
      <p className='text-muted mt-3'>
        - Facebook Ads <br />
        - Google Ads <br />- Linkedin Ads
      </p>
    );
  }

  socialmedia() {
    return (
      <p className='text-muted mt-3'>
        - Instagram Posts <br />
        - Content Ideas <br />- Instagram Hashtags
      </p>
    );
  }

  salescopy() {
    return (
      <p className='text-muted mt-3'>
        - Pain-Agitate-Solution <br />
        - Attention-Interest-Desire-Action <br />- Before-After-Bridge
      </p>
    );
  }

  blogcopy() {
    return (
      <p className='text-muted mt-3'>
        - Blog Ideas, Titles, Outlines <br />
        - Blog Intros <br />- Sentence Rewriter
      </p>
    );
  }

  websitecopy() {
    return (
      <p className='text-muted mt-3'>
        - Meta Descriptions
        <br />
        - Headlines <br />- Slogan Generator
      </p>
    );
  }

  ecommercecopy() {
    return (
      <p className='text-muted mt-3'>
        - Product Descriptions
        <br />
        - Product Benefits <br />- Email Subject Lines
      </p>
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className='section bg-services' id='services'>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='title-box text-center'>
                  <h3 className='title-heading mt-4'>
                    Awesome Services We Provide
                  </h3>
                  <p className='text-muted f-17 mt-3'>
                    Experience the power of AI transforming your content <br />{' '}
                    Produce high quality content.
                  </p>
                  <img src={HomeUrl} height='15' className='mt-3' alt='' />
                </div>
              </Col>
            </Row>
            <Row className='mt-5 pt-4'>
              {/* Render Footer Link */}
              {this.state.services.map((item, key) => (
                <Col lg={4} key={key}>
                  <div className='services-box p-4 mt-4'>
                    <div className='services-icon bg-soft-primary'>
                      {/* <img src={item.img} height='25' className='service-img-icon' alt='' /> */}
                      <i className={'mdi text-primary ' + item.icon}></i>
                    </div>

                    <h5 className='mt-4'>{item.title}</h5>
                    <p className='text-muted mt-3'>{item.description}</p>
                    <div className='mt-3'>
                      <Link to='#' className='text-primary f-16'>
                        Learn More <i className='mdi mdi-arrow-right ml-1'></i>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row className='align-items-center mt-5 pt-4' id='counter'>
              <Col lg={6}>
                <div className='pr-4 mt-4'>
                  <p className='text-uppercase'>why choose us </p>
                  <h3>Stay ahead of the competition!</h3>
                  <p className='text-uppercase'>
                    with our ai social media copilot{' '}
                  </p>
                  {/* <li className='text-muted font-13'>
                    Autonomously engage customers with interesting posts.
                  </li>
                  <li className='text-muted font-13'>
                    AI Managed engagement across your social platforms.
                  </li>
                  <li className='text-muted font-13'>
                    Approve AI pre-generated content or give a passthrough.
                  </li> */}
                  <p className='text-muted mt-3'>
                    Bubly A.I. is here to help you manage social media
                    engagements better, create content faster and grow your
                    business. <br/> You already know that writing is hard and takes a
                    lot of time, and so is social media management. I'm sure you
                    want to do more and become a highly productive entrepreneur. <br/>
                    That's why we are excited to give you BublyAI, your A.I
                    social media copilot and content generator.
                  </p>
                  {/* <div className='mt-4 pt-1'>
                    <Link to='#' className='btn btn-outline-primary'>
                      Discover More
                    </Link>
                  </div> */}
                </div>
              </Col>
              <Col lg={6} className=''>
                <div className='mt-4'>
                  <img src={Growth} height='300' alt='' className='img' />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
