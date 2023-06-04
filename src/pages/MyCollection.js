import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      MyCollection {id}
      {userData && (
        <div>
          <h2>{userData.getUser.Name}</h2>
          <p>Email: {userData.getUser.email}</p>
          <p>Role: {userData.getUser.role}</p>
          <p>Created At: {userData.getUser.createdAt}</p>
          <p>Updated At: {userData.getUser.updatedAt}</p>
          <h3>My Collection:</h3>
          <ul>
            {userData.getUser.MyCollection?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {productData && (
        <div>
          <h3>My Product Details:</h3>
          {productData.map((product, index) => (
            product && (
              <div key={index}>
                <h4>{product.name}</h4>
                <p>Supertype: {product.supertype}</p>
                <p>Subtypes: {product.subtypes}</p>
                <p>HP: {product.hp}</p>
                <p>Type: {product.types}</p>
                <p>Evolves from: {product.evolvesFrom}</p>
                {product.images && product.images.map((image, index) => (
                  <img key={index} src={image.url} alt={product.name} />
                ))}
              </div>
            )
          ))}
        </div>
      )}

    </div>
  );
};

export default MyCollection;
