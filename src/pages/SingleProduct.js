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

    const RainbowBorder = styled('div')({
        borderRadius: '10px',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        border: '2px solid',
        boxShadow: '0 0 10px #fff, 0 0 15px #fff, 0 0 20px #e60073, 0 0 35px #e60073, 0 0 40px #e60073, 0 0 55px #e60073, 0 0 75px #e60073',
        zIndex: '1',
        opacity: '0',
        transition: 'opacity 0.6s ease-in-out',
    });


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
        position: 'relative', // This is needed for absolute positioning of RainbowBorder
        margin: '20px 0',
        '&:hover > div': { // This targets the RainbowBorder on hover
            opacity: '1',
        },
        '&:hover > section > img': { // This targets the image on hover
            transform: 'scale(1.1)', // This will scale (zoom) the image on hover
            transition: 'all 0.3s ease', // This will animate the scale (zoom) effect
        },
    });

    const Card = styled('div')({
        position: 'relative',
        width: '300px',
        height: '300px',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
        transition: 'all 0.6s ease',
        '&:hover': {
            transform: 'rotateY(180deg)'
        },
        '&:hover > div': {
            opacity: '1',
        },
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


                <div className='d-flex gap-20' style={{ flex: 1 }}>
                    <CardImage>
                        {product.images && product.images.length > 0 && (
                            <section class="cards">
                                <img src={product.images[0].url} alt={product.name} />
                            </section>
                        )}
                    </CardImage>
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
