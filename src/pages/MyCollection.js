import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitch, IoLogoTwitter } from 'react-icons/io';


import { Link, useLocation } from 'react-router-dom';
import { BiPhone } from 'react-icons/bi';
import { Grow } from '@mui/material';

const MyCollection = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [userData, setUserData] = useState(null);
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/user/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserData();
    return () => {
      localStorage.removeItem('productNames');
    };
  }, [id]);


  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (userData) {

          const promises = userData.getUser.MyCollection.map(async (prodId) => {
            console.log(prodId);
            const response = await axios.get(`http://localhost:5000/api/PokemonCard/${prodId}`);
            return response;
          });
          const responses = await Promise.all(promises);
          const productData = responses.map(response => response.data);
          setProductData(productData);

          // save product names to local storage
          const productNames = productData.map(product => product.name);
          localStorage.setItem('productNames', JSON.stringify(productNames));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductData();
  }, [userData]);

  // Pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = productData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
              <MDBCard className="mb-4" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <MDBCardBody className="text-center">

                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                  />
                  <p className="text-muted mb-4 mt-4 fs-4">{userData?.getUser?.Name}</p>
                  <div className="d-flex justify-content-center mb-2"></div>

                </MDBCardBody>

              </MDBCard>
            </Grow>
            <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
              <MDBCard className="mb-4 mb-lg-0" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex align-items-center p-3 gap-10">
                      <IoLogoInstagram size={25} />
                      <MDBCardText>IG </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex align-items-center p-3 gap-10">
                      <IoLogoFacebook size={25} />
                      <MDBCardText>Facebook </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex align-items-center p-3 gap-10">
                      <IoLogoTwitter size={25} />
                      <MDBCardText>Twitter </MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex align-items-center p-3 gap-10">
                      <BiPhone size={25} />
                      <MDBCardText>Phone </MDBCardText>
                    </MDBListGroupItem>

                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </Grow>
          </MDBCol>
          <MDBCol lg="8">
            <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
              <div >
                <div>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <MDBCardText className='fs-5'>{userData?.getUser?.Name} Collection</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="mb-3" style={{ fontWeight: 'normal', color: 'gray' }}>
                    {productData.length} Cards in {userData?.getUser?.Name} Collection
                  </MDBListGroupItem>
                  {currentCards && (
                    <div className="row">
                      {currentCards.map((product, index) =>
                        product && (
                          <div key={index} className="col-md-4">
                            <Link to={`/singleProduct/${product._id}`} className="card-link my-1">
                              <MDBCard className="card-small">
                                {product.images && product.images.map((image, imageIndex) => (
                                  <MDBCardImage
                                    key={imageIndex}
                                    src={image.url}
                                    alt={product.name}
                                    className="img-fluid width-2rem"
                                  />
                                ))}
                              </MDBCard>
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  )}
                  {productData.length > cardsPerPage && (
                    <ul className="pagination justify-content-center mt-4">
                      {Array.from(Array(Math.ceil(productData.length / cardsPerPage)), (item, index) => (
                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                          <button className="page-link" onClick={() => paginate(index + 1)}>
                            {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Grow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section >
  );
};

export default MyCollection;
