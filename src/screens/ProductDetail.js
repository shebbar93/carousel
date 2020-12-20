import React from 'react'
import { Container } from 'react-bootstrap'
const ProductDetail = ({ details }) => {
    return (
        <Container className='py-4 px-4 mx-4 my-4'>
            <div>
                <h1>
                    Description
                </h1>
                <p>{details.description}</p>
            </div>
            <div>
                <h1>
                    Price
                </h1>
                <p>₹ {details.price}</p>
            </div>
        </Container>
    )
}

export default ProductDetail
