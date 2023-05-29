import React from 'react';
import { useFormik } from 'formik';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import * as yup from 'yup';
import Custominput from '../components/Custominput';
import { useDispatch } from 'react-redux';
import { registerUser } from './features/user/userSlide';

const RegisterSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().nullable().email('Invalid email address'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values)); //
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
                  <Custominput
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="text-white"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && formik.errors.name}
                  />
                  <Custominput
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="text-white"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                  />
                  <Custominput
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="text-white"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && formik.errors.password}
                  />
                  <div className='d-flex justify-content-center align-items-center mb-4 mx-5 w-100'>
                    <MDBCheckbox
                      name='agreeTerms'
                      id='agreeTerms'
                      label='I agree to all statements in Terms of service'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      checked={formik.values.agreeTerms}
                    />
                  </div>
                </div>
                <button type="submit" className="mb-5 col-6 btn Registerbtn">Register</button>
              </form>
              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg" />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg" />
                </MDBBtn>
              </div>
              <div>
                <p className="mb-0">Have already an account? <a href="http://localhost:3000/login#!!" className="text-white-50 fw-bold">Login</a></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;