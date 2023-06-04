import { Layout } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToMyCollection } from '../features/Product/ProductSlice';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const addToMy = (id) => {
        dispatch(addToMyCollection(id));
    };

    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug]);

    useEffect(() => {
        console.log(product);
    }, [product]);

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/PokemonCard/${params.slug}`);
            setProduct(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>SingleProduct</div>
            <div>
                <h2>Name: {product.name}</h2>
                <p>Slug: {product.slug}</p>
                <p>Supertype: {product.supertype}</p>
                <p>Subtypes: {product.subtypes}</p>
                <p>HP: {product.hp}</p>
                <p>Types: {product.types}</p>
                <p>Evolves From: {product.evolvesFrom}</p>
                {product.images && product.images.length > 0 && (
                    <img src={product.images[0].url} alt={product.name} />
                )}
            </div>
            <button
                className="btn btn-primary"
                onClick={() => addToMy(product._id)}
            >
                Add to My Collection
            </button>
        </>
    )
}

export default SingleProduct;
