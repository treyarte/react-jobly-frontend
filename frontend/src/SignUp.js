import React, { useState } from 'react';
import CustomAlert from './CustomAlert';
import useForm from './hooks/useForm';
import { useHistory, Redirect } from 'react-router-dom';
import JoblyAPI from './JoblyAPI';
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

const SignUp = ({ handleToken, checkLogin }) => {
  const INITIAL_STATE = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
  };

  const history = useHistory();

  const [errors, setErrors] = useState(new Set());
  const [formData, handleChange] = useForm(INITIAL_STATE);

  if (checkLogin()) return <Redirect to='/' />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await JoblyAPI.signUp(formData);

      handleToken(token);

      history.push('/');
    } catch (error) {
      setErrors((e) => new Set([...errors, ...error]));
    }
  };
  return (
    <>
      <div className='col-md-4 offset-md-4'>
        {errors.size > 0 && <CustomAlert data={errors} type='danger' />}
        <Card className='sign-up'>
          <CardTitle>
            <h4>Sign Up</h4>
          </CardTitle>
          <Form className='sign-up-form' onSubmit={handleSubmit}>
            <CardBody>
              <FormGroup>
                <Label for='username'>Username</Label>
                <Input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='username'
                  value={formData.username}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for='password'>Password</Label>

                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='password'
                  value={formData.password}
                  onChange={handleChange}
                />
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

export default SignUp;
