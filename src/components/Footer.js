import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { SlSocialInstagram, SlSocialTwitter, SlSocialGoogle, } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";
import { SiGithub } from "react-icons/si";
import { AiFillHome, AiOutlinePrinter} from "react-icons/ai"
import { BsFillEnvelopeFill, BsFillTelephoneForwardFill } from "react-icons/bs";

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted ' id='BGfooter'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' id='Footer1'>
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='a' className='me-4 text-reset'>
            <TiSocialFacebook color ='white'fab icon="facebook-f " />
          </a>
          <a href='a' className='me-4 text-reset'>
            <SlSocialTwitter color ='white' fab icon="twitter" />
          </a>
          <a href='a' className='me-4 text-reset'>
            <SlSocialGoogle color ='white' fab icon="google" />
          </a>
          <a href='a' className='me-4 text-reset'>
            <SlSocialInstagram color ='white' fab icon="instagram" />
          </a>
          <a href='a' className='me-4 text-reset'>
            <SiGithub color ='white' fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>
                <MDBIcon icon="gem" className="me-3 " />
                <img src="images/LogowhiteNobg.png" className="LogoLandingpage" alt="Logo" />
                Company name
              </h6>
              <p className='text-white'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Products</h6>
              <p>
                <a href='#!' className='text-white'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-white'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-white'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-white'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
              <p className='text-white'>
                <AiFillHome icon="home" className="me-2 text-white" />
                New York, NY 10012, US
              </p>
              <p className='text-white'>
                <BsFillEnvelopeFill icon="envelope" className="me-3 text-white" />
                info@example.com
              </p>
              <p className='text-white'>
                <BsFillTelephoneForwardFill icon="phone" className="me-3 text-white" /> + 01 234 567 88
              </p>
              <p className='text-white'>
                <AiOutlinePrinter icon="print" className="text-white me-3 " /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}