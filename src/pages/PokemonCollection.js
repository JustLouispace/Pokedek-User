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
import { Box, TextField } from '@mui/material';



function valuetext(valueHp) {
  return `${valueHp}`;
}
const minDistance = 10;



export const PokemonCollection = () => {
  const [value2, setValue2] = React.useState();
  const [filter, setFilter] = useState(null);
  const [value, setValue] = React.useState('null');
  const defaultImageURL = "defaultImageURL";  // Replace with your default image URL

  const handleChange = (event) => {
    setFilter(event.target.value);
    setValue(event.target.value);
  };

  const handleReset = () => {
    setFilter(null); // Reset the filter
    setValue(null);
  };

  const handleValue2Change = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '') {
      setValue2(null);
    } else {
      const [value2Min, value2Max] = inputValue.split(',').map(Number);
      setValue2([value2Min, value2Max]);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
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
    if (value2) {
      params.push(`hp=${value2.join('')}`); // This line is modified
    }

    url += params.join('&');

    try {
      console.log(url);
      const response = await axios.get(url);
      console.log(response);
      // Assuming that response.data is the array of products
      if (Array.isArray(response.data)) {
        // setState with the data from the API
        setProductState(response.data);
      } else {
        console.error("API response is not an array");
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  useEffect(() => {
    getProducts();
  }, [filter, value2]);

  const uniqueProducts = Array.isArray(productState)
    ? Array.from(new Set(productState.map((product) => product._id))).map((_id) => {
      return productState.find((product) => product._id === _id);
    })
    : [];

  const handleMouseEnter = (event) => {
    const imageItem = event.currentTarget;
    const image = imageItem.querySelector('img');
    const overlay = imageItem.querySelector('.overlay');
    image.style.opacity = 0.5;
    overlay.style.opacity = 1;
  };

  const handleMouseLeave = (event) => {
    const imageItem = event.currentTarget;
    const image = imageItem.querySelector('img');
    const overlay = imageItem.querySelector('.overlay');
    image.style.opacity = 1;
    overlay.style.opacity = 0;



  };
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="display-4 fw-bold mt-5">Pokemon Collection</div>
      <div className="store-wrapper home-wrapper-2 py-5 col-9">
        <div className="container-xxl bg-gray p-5 rounded mb-5">
          <div className='container-sorted col-4 mb-4'>
            <Button variant="outlined" onClick={handleReset}>Reset Filter</Button>
            <Stack spacing={9} direction="row" >
              <Stack spacing={0} >
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                  <div className='d-flex gap-10'>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange}
                      className=''
                    >
                      <div className='d-flex'>
                        <FormControlLabel value="Lightning" control={<Radio />} label="Lightning" />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Fire"
                          control={<Radio />}
                          label="Fire"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Grass"
                          control={<Radio />}
                          label="Grass"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Water"
                          control={<Radio />}
                          label="Water"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                    </RadioGroup>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange} Phychic
                    >
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Phychic"
                          control={<Radio />}
                          label="Phychic"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Fighting"
                          control={<Radio />}
                          label="Fighting"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Metal"
                          control={<Radio />}
                          label="Metal"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Colorless"
                          control={<Radio />}
                          label="Colorless"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                    </RadioGroup>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                      onChange={handleChange} Phychic
                    >
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Dragon"
                          control={<Radio />}
                          label="Dragon"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                      <div className='d-flex'>
                        <FormControlLabel
                          value="Fairy"
                          control={<Radio />}
                          label="Fairy"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </FormControl>
              </Stack>
            </Stack>

          </div>
          <div className='justify-content-center align-items-center w-50 bold-text fs-4' style={{ color: "white" }}>
            <div>
              Hp
            </div>
            <TextField
              label="Value2"
              variant="outlined"
              onChange={handleValue2Change}
              placeholder="Min,Max"
            />
          </div>
        </div>
        <ImageList sx={{ height: 1000, overflow: "scroll", scrollbarWidth: "none" }} cols={4} rowHeight="auto">
          {productState.map((item) => (
            <Link to={`/singleProduct/${item._id}`} key={item.images[0]._id}>
              <ImageListItem
                key={item.images[0]._id}
                sx={{ width: '100%', height: '100%', padding: '15px', position: 'relative', cursor: 'pointer' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={item.images && item.images.length > 0 ? item.images[0].url : defaultImageURL}
                  alt={item.name}
                  loading="lazy"
                  style={{ width: '100%', height: '25rem', objectFit: 'cover', opacity: 1, transition: 'opacity 0.3s ease' }}
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
        </ImageList>








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
