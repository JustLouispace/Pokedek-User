import React from 'react';
import Slide from '../components/Slide';
import { Link } from 'react-router-dom';
import CardSlide from '../components/CardSlide';
import Tooltip from '@mui/material/Tooltip';

const Home = () => {
  return (
    <div className="container-mian">
      <div className="row justify-content-center">
        <div className="mt-5 mb-4 col-8">
          <Slide />
        </div>
        <div className="Home-bottom d-flex justify-content-center" style={{ gap: '50px' }}>
          <Tooltip title="Delete">
            <Link to="/PokemonCollection" className="mb-5 col-3 btn homebtn btn-dark" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>Explore Pokemon</Link>
          </Tooltip>
          <Link to="/trainer" className="mb-5 col-3 btn homebtn btn-dark" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>Trainer</Link>
        </div>
      </div>
      <div className="h1 p-3 recommnedbar" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        Recommed Card
      </div>
      <div className="mt-3 mb-3 cardSlideContainer">
        <CardSlide />
      </div>
      <div className="p-3 h-25 recommnedbar">

      </div>
    </div>
  );
}

export default Home;
