import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Card} from 'react-bootstrap'
import Rating from './Rating';
const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/products/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/products/${product._id}`}>
                <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
            </Link>
            <Card.Text as='div'>
                <Rating value={product.rating} text={`${product.numReviews}reviews`}/>
            </Card.Text>
            <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}
export default Product
