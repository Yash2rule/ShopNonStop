import React , {useEffect} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Table,Button} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import {getListOfOrders,getOrderDetails} from '../actions/orderActions';

const OrderListScreen = ({history}) => {
    const dispatch = useDispatch();
    const ordersList = useSelector(state => state.ordersList );
    const {loading , error , orders} = ordersList;
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    

    useEffect(() => {
        if(userInfo && userInfo.isAdmin){
            dispatch(getListOfOrders())
        }else{
            history.push('/login')
        }
    },[dispatch , history , userInfo])
 
    const showDetailsHandler = (order) => {
        dispatch(getOrderDetails(order._id))
        history.push(`/orders/${order._id}`)
    }


    return (
        <>
            <h1>Orders</h1>
            {loading ? <Loader /> : 
            error ? <Message variant='danger'>{error}</Message> : 
            (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ORDER ID</th>
                            <th>USER</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt.substring(0,10)}</td>
                                <td>${order.totalPrice}</td>
                                <td>
                                    {order.isPaid ? (
                                    order.paidAt.substring(0,10)
                                ):(
                                    <i className='fas fa-times' style={{color:'red'}}></i>
                                )}
                                </td>
                                <td>
                                    {order.isDelivered ? (
                                    order.deliveredAt.substring(0,10)
                                ):(
                                    <i className='fas fa-times' style={{color:'red'}}></i>
                                )}
                                </td>
                                <td>
                                    {/* <LinkContainer to={`/orders/${order._id}`}> */}
                                        <Button variant='light' className='btn-sm' onClick={() => showDetailsHandler(order)}>
                                            Details
                                        </Button>
                                    {/* </LinkContainer> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default OrderListScreen
