import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToMyCollection } from '../features/Product/ProductSlice';

const ProductCard = (props) => {
    const { data, linkTo } = props;
    const dispatch = useDispatch();
    const addToMy = (id) => {
        dispatch(addToMyCollection(id));
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const cardStyle = {
        position: 'relative',
        opacity: isHovered ? 0.8 : 1,
        transition: 'opacity 0.3s ease',
        height: '200px', // Set the desired height for the card
        width: '200px', // Set the desired width for the card
    };

    return (
        <Link to={linkTo} style={{ textDecoration: 'none' }}>
            <div
                style={cardStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {data ? (
                    <div>
                        <img src={data.images[0].url} alt="Product" className="mb-3" 
                        style={{ width: '18rem', height: '22rem' }}
                        
                        />
                        {isHovered && (
                            <button
                                className="btn btn-primary"
                                style={{}}
                                onClick={(e) => addToMy(data._id)}
                            >
                                Button
                            </button>
                        )}
                    </div>
                ) : (
                    <div>No data available</div>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;
