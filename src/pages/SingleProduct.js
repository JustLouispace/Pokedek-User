import { Layout } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToMyCollection } from '../features/Product/ProductSlice';
import { config } from '../utils/axiosConfig';
import { Stack, styled } from '@mui/system';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [product, setProduct] = useState({});
    const [buttonText, setButtonText] = useState("Add to My Collection");
    const [myCollection, setMyCollection] = useState(getMyCollectionFromLocalStorage());

    function getUserIdFromLocalStorage() {
        try {
            const userId = localStorage.getItem('userId');
            return userId;
        } catch (error) {
            console.error('Error retrieving userId from local storage:', error);
            return null;
        }
    }

    function getMyCollectionFromLocalStorage() {
        try {
            const myCollectionData = localStorage.getItem('MyCollection');
            const myCollection = myCollectionData ? myCollectionData.split(',') : [];
            return myCollection;
        } catch (error) {
            console.error('Error retrieving MyCollection from local storage:', error);
            return null;
        }
    }

    const productExistsInMyCollection = () => {
        return myCollection && myCollection.includes(product._id);
    };

    useEffect(() => {
        if (productExistsInMyCollection()) {
            setButtonText('Remove');
        } else {
            setButtonText('Add to My Collection');
        }
    }, [product._id, myCollection]);

    const addToMy = () => {
        if (productExistsInMyCollection()) {
            const updatedCollection = myCollection.filter(id => id !== product._id);
            localStorage.setItem('MyCollection', updatedCollection);
            setMyCollection(updatedCollection);
        } else {
            myCollection.push(product._id);
            localStorage.setItem('MyCollection', myCollection);
            setMyCollection([...myCollection]);
        }
        dispatch(addToMyCollection(product._id));
    };

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/api/PokemonCard/${params.slug}`, config);
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (params?.slug) getProduct();
    }, [params?.slug]);


    const CenteredContainer = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    });

    const CardDetail = styled('div')({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        padding: '20px',
        width: '60%',
    });

    const CardHeader = styled('div')({
        marginTop: '20px',
        textAlign: 'left',
    });

    const CardTitle = styled('h2')({
        margin: 0,
        color: '#333',
    });

    const CardSubtitle = styled('h3')({
        margin: '10px 0',
        color: '#777',
    });

    const CardHP = styled('p')({
        margin: '10px 0',
        color: '#333',
        fontWeight: 'bold',
    });

    const CardBody = styled('div')({
        margin: '20px 0',
        textAlign: 'left',
    });

    const CardImage = styled('div')({
        margin: '20px 0',
    });

    const CardFooter = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
    });

    const Button = styled('button')({
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#777',
        },
    });

    return (
        <CenteredContainer>
            <CardDetail>
                <div className='d-flex gap-20' style={{  flex: 1 }}>
                    <div>
                        {product.images && product.images.length > 0 && (
                            <CardImage>
                                <img src={product.images[0].url} alt={product.name} />
                            </CardImage>
                        )}
                    </div>
                    <div style={{ marginLeft: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='ml-4' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <CardSubtitle>{product.supertype} - {product.subtypes}</CardSubtitle>
                                <div style={{ marginBottom: '0.2rem' }}>HP {product.hp}</div>
                                <div style={{ marginBottom: '0.2rem' }}>Subtype {product.subtypes}</div>
                                <div style={{ marginBottom: '0.2rem' }}>Type {product.types}</div>
                            </CardHeader>

                            <CardBody>
                                {product.abilities && product.abilities.map((ability, index) => (
                                    <div key={index}>
                                        <h4>{ability.name}</h4>
                                        <p>{ability.text}</p>
                                    </div>
                                ))}
                            </CardBody>
                        </div>
                        <br />
                        <br />
                        <div className='ml-4' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginLeft: 'auto' }}>
                            <Button onClick={() => addToMy()}>
                                {buttonText}
                            </Button>
                        </div>
                    </div>

                </div>
            </CardDetail>
        </CenteredContainer>
    );
}

export default SingleProduct;
