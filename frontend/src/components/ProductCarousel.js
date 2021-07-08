import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {Carousel,Image} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {listTopRatedProducts} from '../actions/productActions';
const ProductCarousel = () => {
    const dispatch = useDispatch();
    const productTopRated = useSelector(state => state.productTopRated);
    const {loading, error, products} = productTopRated;

    useEffect(() => {
        dispatch(listTopRatedProducts())
    },[dispatch])

    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
        <Carousel pause='hover' style={{backgroundColor: 'rgba(217, 217, 217,0.6)'}}>
            {products.map(product =>(
                <Carousel.Item key={product._id}>
                    <Link to={`/products/${product._id}`}>
                        <Image src={product.image} alt={product.name} fluid/>
                        <Carousel.Caption className='carousel-caption'>
                            <h2 style={{color:'black'}}>{product.name} (${product.price})</h2>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProductCarousel
