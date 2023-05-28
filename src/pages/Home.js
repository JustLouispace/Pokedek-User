import React from 'react';
import Slide from '../components/Slide';
import { Link } from 'react-router-dom';
import CardSlide from '../components/CardSlide';
import Tooltip from '@mui/material/Tooltip';

const Home = () => {
  return (
    <div className="container-mian">
      <div className="row justify-content-center">
        <div className="mt-5 mb-4 col-7">
          <Slide />
        </div>
        <div className="Home-bottom d-flex justify-content-center" style={{ gap: '50px' }}>
        <Tooltip title="Delete">
          <Link to="/explore-pokemon" className="mb-5 col-3 btn homebtn btn-dark">Explore Pokemon</Link>
        </Tooltip>
          <Link to="/trainer" className="mb-5 col-3 btn homebtn btn-dark">Trainer</Link>
        </div>
      </div>
      <div className="h1 p-3 h-100 recommnedbar">
        Recommed Card
      </div>
      <div className='mb-4 mt-4'>
      <CardSlide/>
      </div>
      </div>
  );
}

export default Home;