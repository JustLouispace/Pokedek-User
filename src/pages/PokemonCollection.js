import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;

export const PokemonCollection = () => {
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

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




  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="display-4 fw-bold mt-5">Pokemon Collection</div>
      <div className='store-wrapper home-wrapper-2 py-5 col-9'>
        <div className='container-xxl bg-gray p-5 rounded mb-5'>
          <div className='container-sorted col-4 mb-4'>
            <Stack spacing={9} direction="row" >
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
        <div className="d-flex justify-content-center">
          <Stack direction="row" spacing={6} style={{}}>
            <div><img src="images/Card1.png" alt="Start Icon" className="mb-3" /></div>
            <div><img src="images/Card1.png" alt="Start Icon" className="mb-3" /></div>
            <div><img src="images/Card1.png" alt="Start Icon" className="mb-3" /></div>
            <div><img src="images/Card1.png" alt="Start Icon" className="mb-3" /></div>
            <div><img src="images/Card1.png" alt="Start Icon" className="mb-3" /></div>
          </Stack>
        </div>
      </div>
    </div >
  );
};

export default PokemonCollection;
