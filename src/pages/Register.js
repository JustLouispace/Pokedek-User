import React from 'react';
import { useFormik } from 'formik';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import * as yup from 'yup';
import Custominput from '../components/Custominput';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlide';

const RegisterSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  agreeTerms: yup.bool().oneOf([true], 'You must agree to the terms of service'),
});

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <MDBContainer fluid className="Register-container">
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '550px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Create your account</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <form onSubmit={formik.handleSubmit}>
                <div className="d-flex flex-column align-items-center">
                  <div className="col-md-11 mb-4">
                    <Custominput
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="text-black"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className='error' style={{ minHeight: '1.5em' }}>
                      {formik.touched.name && formik.errors.name}
                    </div>
                  </div>
                  <div className="col-md-11 mb-4">
                    <Custominput
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="text-black"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className='error' style={{ minHeight: '1.5em' }}>
                      {formik.touched.email && formik.errors.email}
                    </div>
                  </div>
                  <div className="col-md-11 mb-4">
                    <Custominput
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="text-black"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className='error' style={{ minHeight: '1.5em' }}>
                      {formik.touched.password && formik.errors.password}
                    </div>
                  </div>
                  <div className="col-md-11 mb-4">
                    <Custominput
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="text-black"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <div className='error' style={{ minHeight: '1.5em' }}>
                      {formik.touched.confirmPassword && formik.errors.confirmPassword}
                    </div>
                  </div>
                  <div className='d-flex justify-content-center align-items-center mt-4 mb-4 mx-5 w-100'>
                    <MDBCheckbox
                      name='agreeTerms'
                      id='agreeTerms'
                      label='I agree to all statements in Terms of service'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.agreeTerms}
                    />
                    <div className='error' style={{ minHeight: '1.5em' }}>
                      {formik.touched.agreeTerms && formik.errors.agreeTerms}
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <button type="submit" disabled={!formik.values.agreeTerms} className="mb-5 col-6 btn Registerbtn">
                    Register
                  </button>
                </div>
              </form>
              <div>
              </div>
              <div className='text-center'>
                <p className="mb-0">
                  Have already an account?{' '}
                  <a href="http://localhost:3000/login#!!" className="text-white-50 fw-bold">
                    Login
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
