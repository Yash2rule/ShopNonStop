import {createStore , combineReducers ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {productListReducer,productDetailsReducer , productDeleteReducer , productCreateReducer,productUpdateReducer,productCreateReviewReducer,productTopRatedReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import {userLoginReducer , userRegisterReducer , userDetailsReducer , userUpdateProfileReducer , userListReducer , userDeleteReducer , userUpdateReducer} from './reducers/userReducers';
import {orderCreateReducer , orderDetailsReducer , orderPayReducer , listMyOrdersReducer, ordersListReducer,orderDeliverReducer} from './reducers/orderReducers';
const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    productCreateReview:productCreateReviewReducer,
    productTopRated:productTopRatedReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    userUpdate:userUpdateReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderDeliver:orderDeliverReducer,
    listMyOrders:listMyOrdersReducer,
    ordersList:ordersListReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? 
JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress') ? 
JSON.parse(localStorage.getItem('shippingAddress')) : {}
const initialState = {
    cart:{cartItems: cartItemsFromLocalStorage , shippingAddress: shippingAddressFromLocalStorage},
    userLogin:{userInfo : userInfoFromLocalStorage}
}
const middleware = [thunk];

const store = createStore(reducer, initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;