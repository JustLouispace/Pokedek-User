import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Custominput from '../components/Custominput';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../features/user/userSlide';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';



const LoginSchema = yup.object({
    password: yup.string().required('Password is required'),
});

const Resetpassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { slug } = useParams();

    const formik = useFormik({
        initialValues: {
            password: '',

        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            try {
                console.log(values);
                await axios.put(`http://localhost:5000/api/user/reset-password/${slug}`, (values))
                alert('Password already reset');
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
                <MDBCol col='12'>
                    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '550px' }}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-white-50 mb-5">Please enter your login and password!</p>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="col-md-11 mb-4">
                                        <Custominput
                                            type="password"
                                            name="password"
                                            placeholder="New password"
                                            className="text-black"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        <div className='error' style={{ minHeight: '1.5em' }}>
                                            {formik.touched.password && formik.errors.password}
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <button to="/" type="submit"  className="mb-5 col-6 btn Registerbtn">
                                        Reset
                                    </button>
                                </div>
                            </form>
                            <div>
                            </div>
                            <div className='text-center'>
                                <p className="mb-0">
                                    Have already an account?{' '}
                                    <a href="http://localhost:3000/Register" className="text-white-50 fw-bold">
                                        Register
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

export default Resetpassword;
