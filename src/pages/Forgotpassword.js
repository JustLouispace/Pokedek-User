import React from 'react'
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Grow } from '@mui/material';

const ForgotPasswordSchema = yup.object({
    email: yup.string().email('Invalid email address').required('Email is required'),
});

const Forgotpassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: ForgotPasswordSchema,
        onSubmit: async (values) => {
            try {
                console.log(values);
                await axios.post(`http://localhost:5000/api/user/forgot-password-token`, (values))
                alert('Password reset email sent successfully!');
                navigate('/');
            } catch (error) {
                console.error('Login error:', error);
                window.alert('Login failed. Please try again.');
            }
        },
    });

    return (
        <MDBContainer fluid className="Register-container">
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
                    <MDBCol col='12'>
                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '550px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                <h2 className="fw-bold mb-2 text-uppercase">Forgot Password</h2>
                                <p className="text-white-50 mb-2">Please enter your Email</p>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="col-md-11 mb-4">
                                        </div>
                                        <div className="col-md-12 mb-2">
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
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <button type="submit" className="mb-5 col-6 btn Registerbtn">
                                            Send email
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
                </Grow>
            </MDBRow>
        </MDBContainer>
    );
}

export default Forgotpassword