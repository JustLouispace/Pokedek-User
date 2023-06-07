import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'antd';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Select, TextField } from '@mui/material';
import { Grow } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';

function valuetext(valueHp) {
  return `${valueHp}`;
}

export const PokemonCollection = () => {
  const [value2, setValue2] = useState();
  const [filter, setFilter] = useState(null);
  const [value, setValue] = useState('null');
  const [superType, setSuperType] = useState(null);
  const [subType, setSubType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchname, setSearchname] = useState('');
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const cardsPerPage = 20;
  const defaultImageURL = 'defaultImageURL'; // Replace with your default image URL

  const handleChange = (event) => {
    setFilter(event.target.value);
    setValue(event.target.value);
  };

  const handleSuperTypeChange = (event) => {
    setSuperType(event.target.value);
  };

  const handleSubTypeChange = (event) => {
    setSubType(event.target.value);
  };

  const handleReset = () => {
    setFilter(null); // Reset the filter
    setValue(null);
    setValue2('');
    setSuperType(null);
    setSubType(null);
    setSearchname('');
  };

  const handleValue2Change = (event) => {
    setValue2(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const productStateRedux = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  const [productState, setProductState] = useState([]);
  const getProducts = async () => {
    let url = 'http://localhost:5000/api/PokemonCard?';
    let params = [];
    if (filter) {
      url += `types=${filter}&`;
    }
    if (superType) {
      url += `supertype=${superType}&`;
    }
    if (value2) {
      params.push(`hp=${value2}`);
    }
    if (subType) {
      url += `subtypes=${subType}&`;
    }

    if (searchname) {
      url += `name=${searchname}&`; // Add searchname to the API request
    }

    url += params.join('&');

    try {
      console.log(url);
      const response = await axios.get(url);
      console.log(response);
      // Assuming that response.data is the array of products
      if (Array.isArray(response.data.data)) {
        // setState with the data from the API
        setProductState(response.data.data);
      } else {
        console.error('API response is not an array');
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [filter, value2, superType, subType, searchname]);

  const uniqueProducts = Array.isArray(productState)
    ? Array.from(new Set(productState.map((product) => product._id))).map((_id) => {
      return productState.find((product) => product._id === _id);
    })
    : [];

  const handleMouseEnter = (event) => {
    const imageItem = event.currentTarget;
    const image = imageItem.querySelector('img');
    const overlay = imageItem.querySelector('.overlay');
    image.style.opacity = 1.2;
    image.style.transform = 'scale(1.1)'; // Add this
    overlay.style.opacity = 0;
  };

  const handleMouseLeave = (event) => {
    const imageItem = event.currentTarget;
    const image = imageItem.querySelector('img');
    const overlay = imageItem.querySelector('.overlay');
    image.style.opacity = 1;
    image.style.transform = 'scale(1)'; // Reset the transform property to default
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = productState.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="display-4 fw-bold mt-5">Pokemon Collection</div>
      <div className="store-wrapper home-wrapper-2 py-5 col-8">
        <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
          <div
            className={`d-flex container-xxl bg-whitegray p-3 rounded mb-5 ${showFilterPanel ? 'filter-panel-expanded' : ''}`}
            style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
          >
            <div className="container-sorted col-12 d-flex justify-content-center"> {/* Add justify-content-end class */}
              <div className="d-flex flex-column-reverse"> {/* Add flex-column-reverse class */}
                <Button
                  variant="outlined"
                  onClick={() => setShowFilterPanel((prevState) => !prevState)}
                  style={{ marginBottom: '1rem', justifyContent: 'space-between', marginTop: '1rem', height: "3rem", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} // Update the style
                >
                  {showFilterPanel ? 'Hide Filters' : 'Show Filters'}
                </Button>
                <div
                  className={`filter-panel ${showFilterPanel ? 'filter-panel-expanded' : ''} d-flex gap-20`}
                  style={{ maxHeight: showFilterPanel ? '1000px' : '0', transition: 'max-height 0.3s ease' }}
                >
                  <div>
                    <Stack spacing={9} direction="row">
                      <Stack spacing={0}>
                        <FormControl>
                          <div className="d-flex gap-10">
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={value}
                              onChange={handleChange}
                              className=""
                            >
                              <div className="d-flex">
                                <FormControlLabel value="Lightning" control={<Radio />} label="Lightning" />
                                <div>
                                  <img src="images/ElectricType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                              <div className="d-flex">
                                <FormControlLabel value="Fire" control={<Radio />} label="Fire" className=" bolder-text fs-5" />
                                <div>
                                  <img src="images/FireType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                              <div className="d-flex">
                                <FormControlLabel value="Grass" control={<Radio />} label="Grass" className=" bolder-text fs-5" />
                                <div>
                                  <img src="images/GrassType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                              <div className="d-flex">
                                <FormControlLabel value="Water" control={<Radio />} label="Water" className=" bolder-text fs-5" />
                                <div>
                                  <img src="images/WaterType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                            </RadioGroup>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={value}
                              onChange={handleChange}
                            >
                              <div className="d-flex">
                                <FormControlLabel value="Phychic" control={<Radio />} label="Phychic" className=" bolder-text fs-5" />
                                <div>
                                  <img  src="images/PsychicType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                              <div className="d-flex">
                                <FormControlLabel
                                  value="Fighting"
                                  control={<Radio />}
                                  label="Fighting"
                                  className=" bolder-text fs-5"
                                />
                                <div>
                                  <img src="images/FightingType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                              <div className="d-flex">
                                <FormControlLabel value="Metal" control={<Radio />} label="Metal" className=" bolder-text fs-5" />
                                <div>
                                  <img src="images/SteelType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                              <div className="d-flex">
                                <FormControlLabel
                                  value="Colorless"
                                  control={<Radio />}
                                  label="Colorless"
                                  className=" bolder-text fs-5"
                                />
                                <div>
                                  <img src="images/NormalType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                            </RadioGroup>
                            <RadioGroup
                              aria-labelledby="demo-controlled-radio-buttons-group"
                              name="controlled-radio-buttons-group"
                              value={value}
                              onChange={handleChange}
                            >
                              <div className="d-flex">
                                <FormControlLabel
                                  value="Dragon"
                                  control={<Radio />}
                                  label="Dragon"
                                  className=" bolder-text fs-5"
                                />
                                <div>
                                  <img src="images/DragonType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                              <div className="d-flex">
                                <FormControlLabel
                                  value="Fairy"
                                  control={<Radio />}
                                  label="Fairy"
                                  className=" bolder-text fs-5"
                                />
                                <div>
                                  <img src="images/FairyType.png" alt="Start Icon" className="icon-element mb-3" />
                                </div>
                              </div>
                            </RadioGroup>
                          </div>
                        </FormControl>
                      </Stack>
                    </Stack>
                  </div>
                  <div>
                    <div className="mt-2" style={{ display: 'flex', gap: '2.5rem' }}>
                      <TextField
                        label="Hp"
                        variant="outlined"
                        value={value2}
                        onChange={handleValue2Change}
                        placeholder="HP"
                        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                      />
                      <TextField
                        label="Search by Name"
                        variant="outlined"
                        value={searchname}
                        onChange={(e) => setSearchname(e.target.value)}
                        style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                      />
                    </div>
                    <div>
                      <div className="mt-4" style={{ display: 'flex', gap: '2.5rem' }}>
                        <FormControl>
                          <FormLabel>SuperType</FormLabel>
                          <Select value={superType} onChange={handleSuperTypeChange} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            <MenuItem value={'Pokémon'}>Pokémon</MenuItem>
                            <MenuItem value={'Trainer'}>Trainer</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl>
                          <FormLabel>SubTypes</FormLabel>
                          <Select value={subType} onChange={handleSubTypeChange} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            <MenuItem value={'Basic'}>Basic</MenuItem>
                            <MenuItem value={'Stage 1'}>Stage 1</MenuItem>
                            <MenuItem value={'Stage 2'}>Stage 2</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="mt-4 d-flex justify-content-end"> {/* Add justify-content-end class */}
                        <Button variant="outlined" onClick={handleReset} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                          Reset Filter
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Grow>
        <Grow in={true} style={{ transformOrigin: '0 0 0' }}>
          <div
            sx={{ height: 1000, overflow: 'scroll', scrollbarWidth: 'none' }}
            cols={4}
            rowHeight="auto"
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {currentCards.map((item) => (
              <Link
                to={`/singleProduct/${item._id}`}
                key={item.images[0]._id}
                style={{ flex: '0 0 20%', padding: '15px', boxSizing: 'border-box' }}
              >
                <ImageListItem
                  key={item.images[0]._id}
                  sx={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={item.images && item.images.length > 0 ? item.images[0].url : defaultImageURL}
                    alt={item.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '18rem',
                      objectFit: 'cover',
                      opacity: 1,
                      transition: 'transform 0.3s ease', // Update transition to transform instead of opacity
                    }}
                  />
                  <div
                    className="overlay"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(6, 4, 4, 0.5)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                </ImageListItem>
              </Link>
            ))}
          </div>
        </Grow>
        
        <div>
          {productState.length > cardsPerPage && (
            <ul className="pagination justify-content-center mt-4">
              {Array.from(Array(Math.ceil(productState.length / cardsPerPage)), (item, index) => (
                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

    </div >
  );
};

export default PokemonCollection;
