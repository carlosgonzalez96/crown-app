import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkoutStyles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }
        <div className='total'><span>${total}</span></div>
        <div className='test-warning'>*Please use test card <br/> 4242 4242 4242 4242 - 01/23 123</div>
        <StripeButton price={total} />
    </div>
    
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);