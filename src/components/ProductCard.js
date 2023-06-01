import React from 'react';

const ProductCard = (props) => {
    const { data } = props;
    console.log(data);
    return (
        <>
            {data ? (
                <div>
                    <img src={data.images.small} alt="Product" className="mb-3" />
                </div>
            ) : (
                <div>No data available</div>
            )}
        </>
    );
};

export default ProductCard;
