import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import useForm from './hooks/useForm';
import JoblyAPI from './JoblyAPI';
import './Login.css';
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
  Alert,
  FormFeedback,
} from 'reactstrap';

const Login = ({ handleToken, checkLogin }) => {
  const INITIAL_STATE = {
    username: '',
    password: '',
  };

  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [formData, handleChange] = useForm(INITIAL_STATE);

  if (checkLogin()) return <Redirect to='/' />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, password } = formData;

      const token = await JoblyAPI.login(username, password);

      handleToken(token);

      history.push('/');
    } catch (error) {
      setErrors((e) => [...e, ...error]);
    }
  };
  return (
    <>
      <div className='col-md-6 offset-md-3'>
        {errors.map((error, index) => (
          <Alert key={index} color='danger'>
            {error}
          </Alert>
        ))}
        <Card className='login'>
          <CardTitle>
            <h4>Login</h4>
          </CardTitle>
          <Form className='login-form' onSubmit={handleSubmit}>
            <CardBody>
              <FormGroup>
                <Label for='username'>Username</Label>
                <Input
                  invalid={errors.length > 0}
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
                  invalid={errors.length > 0}
                  type='password'
                  name='password'
                  id='password'
                  placeholder='password'
                  value={formData.password}
                  onChange={handleChange}
                />
                <FormFeedback>{errors[0]}</FormFeedback>
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button color='primary'>Login</Button>
            </CardFooter>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
