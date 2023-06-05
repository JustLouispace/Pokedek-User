import React, { useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/Product/ProductSlice';
import ProductCard from '../components/ProductCard';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';
function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;

export const PokemonCollection = () => {
  const [value2, setValue2] = React.useState([20, 37]);

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

  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  const uniqueProducts = Array.isArray(productState)
    ? Array.from(new Set(productState.map((product) => product._id))).map((_id) => {
      return productState.find((product) => product._id === _id);
    })
    : [];

  const handleMouseEnter = (event) => {
    const imageItem = event.currentTarget;
    const image = imageItem.querySelector('img');
    const overlay = imageItem.querySelector('.overlay');
    if (image && overlay) {
      image.style.opacity = 0.5;
      overlay.style.opacity = 1;
    }
  };

  const handleMouseLeave = (event) => {
    const imageItem = event.currentTarget;
    const image = imageItem.querySelector('img');
    const overlay = imageItem.querySelector('.overlay');
    if (image && overlay) {
      image.style.opacity = 1;
      overlay.style.opacity = 0;
    }
  };
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="display-4 fw-bold mt-5">Pokemon Collection</div>
      <div className="store-wrapper home-wrapper-2 py-5 col-9">
        <div className="container-xxl bg-gray p-5 rounded mb-5">
          <div className='container-sorted col-4 mb-4'>
            <Stack spacing={9} direction="row" >
              <Stack spacing={0} >
                <Stack spacing={0} direction="row">
                  <div>
                    <img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" />
                  </div>
                  <div>
                    <FormControlLabel
                      value="start"
                      label={<span className="white-text bold-text">Poison</span>}
                      labelPlacement="start"
                      control={
                        <Checkbox
                          style={{ color: "white" }}
                          onChange={(e) => console.log(e)}
                        />
                      }
                    />
                  </div>
                </Stack>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
              </Stack>
              <Stack spacing={0}>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
              </Stack>
              <Stack spacing={0} >
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
              </Stack>
              <Stack spacing={0} >
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">Poison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
              </Stack>
              <Stack spacing={0} style={{ marginLeft: "8rem" }}>
                <Stack spacing={0} direction="row ">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">aPoison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
                <Stack spacing={0} direction="row">
                  <div><img src="images/Poisonicon.png" alt="Start Icon" className="icon-element mb-3" /></div>
                  <div><FormControlLabel
                    value="start"
                    label={<span className="white-text bold-text">aPoison</span>}
                    labelPlacement="start"
                    control={<Checkbox style={{ color: "white" }} />}
                  /></div>
                </Stack>
              </Stack>

            </Stack>

          </div>
          <div className='justify-content-center align-items-center w-50 bold-text fs-4' style={{ color: "white" }}>
            <div>
              Hp
            </div>
            <Slider
              getAriaLabel={() => 'Minimum distance shift'}
              value={value2}
              onChange={handleChange2}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
            />
          </div>
        </div>
        <ImageList sx={{ height: 1000, overflow: 'scroll', scrollbarWidth: 'none' }} cols={4} rowHeight="auto">
          {uniqueProducts.map((item) => (
            <Link to={`/singleProduct/${item._id}`} key={item._id}>
              <ImageListItem
                key={item._id}
                sx={{ width: '100%', height: '100%', padding: '15px', position: 'relative', cursor: 'pointer' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item.images && item.images[0]?.url && (
                  <img
                    src={item.images[0].url}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '25rem',
                      objectFit: 'cover',
                      opacity: 1,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                )}
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
    </div>
  );
};

export default PokemonCollection;
