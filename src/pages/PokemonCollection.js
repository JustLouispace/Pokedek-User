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

import MenuItem from '@mui/material/MenuItem';


function valuetext(valueHp) {
  return `${valueHp}`;
}
const minDistance = 10;



export const PokemonCollection = () => {
  const [value2, setValue2] = React.useState();
  const [filter, setFilter] = useState(null);
  const [value, setValue] = React.useState('null');
  const [superType, setSuperType] = useState(null);
  const [subType, setSubType] = useState(null);
  const defaultImageURL = "defaultImageURL";  // Replace with your default image URL

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
      url += `supertype=${superType}&`; // This line is added
    }
    if (value2) {
      params.push(`hp=${value2}`); // This line is modified
    }
    if (subType) {
      url += `subtypes=${subType}&`;
    }

    url += params.join('&');

    try {
      console.log(url);
      const response = await axios.get(url);
      console.log(response);
      // Assuming that response.data is the array of products
      if (Array.isArray(response.data.data)) {  // <-- changed line
        // setState with the data from the API
        setProductState(response.data.data);  // <-- changed line
      } else {
        console.error("API response is not an array");
      }
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  useEffect(() => {
    getProducts();
  }, [filter, value2, superType, subType]);

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
                          <img src="images/ElectricType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          <img src="images/FireType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          <img src="images/GrassType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          <img src="images/WaterType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          value="Psychic"
                          control={<Radio />}
                          label="Psychic"
                          className="white-text bolder-text fs-5"
                        />
                        <div>
                          <img src="images/PsychicType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          <img src="images/FightingType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          <img src="images/SteelType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          <img src="images/NormalType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          <img src="images/DragonType.png" alt="Start Icon" className="icon-element mb-3" />
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
                          <img src="images/FairyType.png" alt="Start Icon" className="icon-element mb-3" />
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
              value={value2}
              onChange={handleValue2Change}
              placeholder="HP"
            />
          </div>
          <FormControl>
            <FormLabel>SuperType</FormLabel>
            <Select
              value={superType}
              onChange={handleSuperTypeChange}
            >
              <MenuItem value={"Pokémon"}>Pokémon</MenuItem>
              <MenuItem value={"Trainer"}>Trainer</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>SubTypes</FormLabel>
            <Select
              value={subType}
              onChange={handleSubTypeChange}
            >
              <MenuItem value={"Basic"}>Basic</MenuItem>
              <MenuItem value={"Stage 1"}>Stage 1</MenuItem>
              <MenuItem value={"Stage 2"}>Stage 2</MenuItem>

            </Select>
          </FormControl>
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
                  style={{ width: '10rem%', height: '28rem', objectFit: 'cover', opacity: 1, transition: 'opacity 0.3s ease' }}
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