import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import CustominputRe from '../components/Custominput';
import { createProduct, resetState } from '../features/Product/ProductSlice';
import { delImg, uploadImg } from '../features/upload/uploadSlice';
import Custominput from '../components/Custominput';

const schema = yup.object().shape({
  name: yup.string().required('Name is Required'),
  supertype: yup.string().required("Supertype is Required"),
  subtypes: yup.string().required("Subtypes is Required"),
  hp: yup.string().required("Hp is Required"),
  types: yup
    .string()
    .test("is-required", "Types is Required", (value) => value !== ""),
  evolvesFrom: yup
    .string()
    .test("is-required", "EvolvesFrom is Required", (value) => value !== ""),
});

const Addrequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const imgState = useSelector((state) => state.upload.images);
  const img = imgState.map((i) => ({
    public_id: i.public_id,
    url: i.url,
  }));

  useEffect(() => {
    formik.values.images = img;
  }, [img]);

  const formik = useFormik({
    initialValues: {
      name: '',
      supertype: '',
      subtypes: '',
      hp: '',
      types: '',
      evolvesFrom: '',
      images: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post('http://localhost:5000/api/Request', values)
        .then((response) => {
          // Assuming the POST request returns the created product's slug
        })
        .then(() => {
          dispatch(resetState());
          formik.resetForm();
          setTimeout(() => {
            navigate('/');
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
      //     const { name1, supertype1, subtypes1, hp1, types1, evolvesFrom1, images } = values;
      //     const formData = {
      //       name: name1,
      //       supertype: supertype1,
      //       subtypes: subtypes1,
      //       hp: hp1.toString(),
      //       types: types1,
      //       evolvesFrom: evolvesFrom1,
      //       images,
      //     };
    },
  },
  )

  return (
    <div>
      <h1 className="mb-4 text-center mt-5">Add Request</h1>
      <div>
        <form onSubmit={formik.handleSubmit} className="d-flex gap-3 flex-column col-8 mx-auto">
          <div>
            <div className='mb-1 text-gray'>Name</div>
            <Custominput
              type="name"
              name="name"
              label="Enter Product Name"
              className="text-black"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className='error' style={{ minHeight: '1.5em' }}>
              {formik.touched.name && formik.errors.name}
            </div>
          </div>
          <div>
            <div className='mb-1 text-gray'>SuperType</div>
            <Custominput
              type="supertype"
              name="supertype"
              label="Enter Product Supertype"
              className="text-black"
              value={formik.values.supertype}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className='error' style={{ minHeight: '1.5em' }}>
              {formik.touched.supertype && formik.errors.supertype}
            </div>
          </div>
          <div>
            <div className='mb-1 text-gray'>SubType</div>
            <Custominput
              type="subtypes"
              name="subtypes"
              label="Enter Product Supertype"
              className="text-black"
              value={formik.values.subtypes}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className='error' style={{ minHeight: '1.5em' }}>
              {formik.touched.subtypes && formik.errors.subtypes}
            </div>
          </div>
          <div>
            <div className='mb-1 text-gray'>Hp</div>
            <Custominput
              type="hp"
              name="hp"
              label="Enter Product hp"
              className="text-black"
              value={formik.values.hp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className='error' style={{ minHeight: '1.5em' }}>
              {formik.touched.hp && formik.errors.hp}
            </div>
          </div>
          <div className='mb-1 text-gray'>Type</div>
          <select
            name="types"
            type="types"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.types}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Category</option>
            <option value="Grass">Grass</option>
            <option value="Lightning">Lightning</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Metal">Metal</option>
            <option value="Darknest">Darknest</option>
            <option value="Fighting">Fighting</option>
            <option value="Colorless">Colorless</option>
            <option value="Phychic">Phychic</option>
            <option value="Dragon">Dragon</option>
            <option value="Fairy">Fairy</option>
          </select>
          {formik.touched.types1 && formik.errors.types1 && (
            <div className="error">{formik.errors.types1}</div>
          )}
          <div className='mb-1 text-gray'>Evolves From</div>
          <Custominput
            type="evolvesFrom"
            label="Enter evolvesFrom"
            name="evolvesFrom"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.evolvesFrom}
          />
          {formik.touched.evolvesFrom && formik.errors.evolvesFrom && <div className="error">{formik.errors.evolvesFrom}</div>}
          <div className='mb-1 text-gray'>Piture</div>
          <div className="bg-white border-1 p-5 text-center">
            <Dropzone onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {imgState?.map((i, j) => (
              <div className="position-relative" key={j}>
                <button
                  type="button"
                  onClick={() => dispatch(delImg(i.public_id))}
                  className="btn-close position-absolute"
                  style={{ top: '10px', right: '10px' }}
                ></button>
                <img src={i.url} alt="" width={200} height={200} />
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-success border-0 rounded-3 my-5">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addrequest;