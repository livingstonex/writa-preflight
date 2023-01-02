import React, { useState } from 'react';

import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from 'reactstrap';

import HomeUrl from '../assets/images/home-border.png';
import Feature from '../assets/images/features/img-3.png';
import { toast } from 'react-toastify';
import { callApi } from '../utils/utils';

const Contact = (props) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !message) {
      return toast.error('Kindly fill in all fields please!');
    }

    try {
      setLoading(true);

      const payload = {
        firstname,
        lastname,
        email,
        message,
      };

      callApi('/api/v1/feature_request', payload, 'post')
        .then((res) => {
          setLoading(false);
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
          return toast.success(
            "Your request has been received, we'll get to work right away."
          );
        })
        .catch((error) => {
          setLoading(false);
          console.log('ERROR: ', error);
          return toast.error('Error submitting request');
        });
    } catch (error) {
      setLoading(false);
      return toast.warning('Check your internet.');
    }
  };

  return (
    <React.Fragment>
      <section className='mt-30 mb-20' id='contact'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='title-box text-center'>
                <h3 className='title-heading mt-4'>
                  Request a Custom Feature!
                </h3>
                <p className='text-muted f-17 mt-3'>
                  Have ideas or features you might want us to build into this
                  tool <br /> then drop us a message & we'll get to work!!
                </p>
                <img src={HomeUrl} height='15' className='mt-3' alt='' />
              </div>
            </Col>
          </Row>
          <Row className='mt-5 pt-4'>
            <Col lg={6}>
              <div className='mt-4 home-img text-center'>
                <div className='animation-2'></div>
                <div className='animation-3'></div>
                <img src={Feature} className='img-fluid' alt='' />
              </div>
            </Col>
            <Col lg={6}>
              <div className='custom-form mt-4'>
                <div id='message'></div>
                <Form name='contact-form' id='contact-form'>
                  <Row>
                    <Col lg={6}>
                      <FormGroup className='mt-3'>
                        <Label className='contact-lable'>First Name</Label>
                        <Input
                          name='name'
                          id='name'
                          className='form-control'
                          type='text'
                          value={firstname}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg={6}>
                      <FormGroup className='mt-3'>
                        <Label className='contact-lable'>Last Name</Label>
                        <Input
                          name='name'
                          id='lastname'
                          className='form-control'
                          type='text'
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <FormGroup className='mt-3'>
                        <Label className='contact-lable'>Email Address</Label>
                        <Input
                          name='email'
                          id='email'
                          className='form-control'
                          type='text'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <FormGroup className='mt-3'>
                        <Label className='contact-lable'>Your Message</Label>
                        <Input
                          type='textarea'
                          name='comments'
                          id='comments'
                          rows='5'
                          className='form-control'
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className='mt-3 text-right'>
                      {/* <Input
                        id='submit'
                        name='send'
                        color='primary'
                        className='submitBnt btn btn-primary btn-round'
                        value='Send Message'
                        style={{ width: 'auto', color: '#fff' }}
                      /> */}
                      <Button
                        // block
                        color='primary'
                        onClick={onSubmit}
                        disabled={loading}
                        className='submitBnt btn btn-primary btn-round'
                      >
                        Send Message{' '}
                        {loading ? <i class='fa fa-spinner fa-spin'></i> : ''}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
