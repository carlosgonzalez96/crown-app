import React from 'react';
import CustomButton from '../customButton/customButton.js'
import './cartDropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

export default CartDropdown;