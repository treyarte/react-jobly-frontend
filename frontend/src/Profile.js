import React, { useState } from 'react';
import CustomAlert from './CustomAlert';
import useForm from './hooks/useForm';
import { Redirect, useHistory } from 'react-router-dom';
import JoblyAPI from './JoblyAPI';
import jwt_decode from 'jwt-decode';
import './SignUp.css';
import {
  Form,
  Card,
  FormGroup,
  Button,
  Input,
  Label,
  CardTitle,
  CardBody,
  CardFooter,
} from 'reactstrap';

const Profile = ({ checkLogin, token }) => {
  const INITIAL_STATE = {
    password: '',
    first_name: '',
    last_name: '',
    email: '',
  };
  const [errors, setErrors] = useState(new Set());
  const [formData, handleChange] = useForm(INITIAL_STATE);
  const history = useHistory();

  if (!checkLogin()) return <Redirect to='/login' />;

  const { username } = jwt_decode(token.token);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await JoblyAPI.updateUser(token.token, formData);

      history.push('/');
    } catch (error) {
      console.log(error);
      setErrors((e) => new Set([...errors, ...error]));
    }
  };

  return (
    <>
      <div className='col-md-4 offset-md-4'>
        {errors.size > 0 && <CustomAlert data={errors} type='danger' />}
        <Card className='sign-up'>
          <CardTitle>
            <h4>Update</h4>
          </CardTitle>
          <Form className='sign-up-form' onSubmit={handleSubmit}>
            <CardBody>
              <FormGroup>
                <Label for='username'>{username}</Label>
              </FormGroup>

              <FormGroup>
                <Label for='first_name'>First Name</Label>

                <Input
                  type='text'
                  name='first_name'
                  id='first_name'
                  placeholder='first name'
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='last_name'>Last Name</Label>

                <Input
                  type='text'
                  name='last_name'
                  id='last_name'
                  placeholder='last name'
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>

                <Input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Re-Enter Password</Label>

                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button color='success'>Sign Up</Button>
            </CardFooter>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Profile;
