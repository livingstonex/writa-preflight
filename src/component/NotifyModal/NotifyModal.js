import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Form,
} from 'reactstrap';
import { toast } from 'react-toastify';
import { callApi } from '../../utils/utils';

const NotifyModal = (props) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !phone) {
      return toast.error('Kindly fill in all fields please!');
    }

    try {
      setLoading(true);

      const payload = {
        firstname,
        lastname,
        email,
        phone,
      };

      callApi('/api/v1/customers', payload, 'post')
        .then((res) => {
          setLoading(false);
          props.toggle();
          return toast.success(
            'Your details have collected. You will be notified when we lunch.'
          );
        })
        .catch((error) => {
          setLoading(false);
          console.log('ERROR: ', error);
          return toast.error('Error submitting details');
        });
    } catch (error) {
      setLoading(false);
      return toast.warning('Check your internet.');
    }
  };
  return (
    <Modal
      isOpen={props.openNotifyModal}
      toggle={props.toggle}
      className='modal-outter-body'
    >
      {/* <ModalHeader toggle={props.toggle}/> */}
      <ModalBody className='modal-inner-body'>
        <div className='custom-form mt-4'>
          <div id='message'></div>
          <Form method='post' name='contact-form' id='contact-form'>
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
                  <Label className='contact-lable'>Phone Number</Label>
                  <Input
                    name='phone'
                    id='phone'
                    className='form-control'
                    type='number'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
        <Button block color='primary' onClick={onSubmit} disabled={loading}>
          Submit {loading ? <i class='fa fa-spinner fa-spin'></i> : ''}
        </Button>
      </ModalBody>

      {/* <ModalFooter>
        <Button color='primary'>Submit</Button>{' '}
        <Button color='secondary'>Cancel</Button>
      </ModalFooter> */}
    </Modal>
  );
};

export default NotifyModal;
