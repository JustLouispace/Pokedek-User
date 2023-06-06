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
import { Link } from 'react-router-dom';

const MyCollection = () => {
  const id = window.location.pathname.split('/')[2];
  const [userData, setUserData] = useState(null);
  const [productData, setProductData] = useState([]);

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
  }, [id]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (userData) {
          const promises = userData.getUser.MyCollection.map(async (prodId) => {
            const response = await axios.get(`http://localhost:5000/api/PokemonCard/${prodId}`);
            return response;
          });
          const responses = await Promise.all(promises);
          setProductData(responses.map(response => response.data));
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProductData();
  }, [userData]);

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid
                />
                <p className="text-muted mb-1">{userData?.getUser?.Name}</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2"></div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <div>
              <div>
                <h3>MyCollection {id}</h3>
                {productData && (
                  <div className="row">
                    {productData.map((product, index) =>
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
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        {userData && (
          <div>
            <h2>{userData?.getUser?.Name}</h2>
            <p>Email: {userData?.getUser?.email}</p>
            <p>Role: {userData?.getUser?.role}</p>
            <p>Created At: {userData?.getUser?.createdAt}</p>
            <p>Updated At: {userData?.getUser?.updatedAt}</p>
            <h3>My Collection:</h3>
            <ul>
              {userData?.getUser?.MyCollection?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

      </MDBContainer>
    </section>
  );
};

export default MyCollection;
