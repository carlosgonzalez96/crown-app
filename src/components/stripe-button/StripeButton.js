import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Swal from 'sweetalert2';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const pk = 'pk_test_51KZKtCDvbmeAY9rtQELTWqXSftliyVWxUuwcXCWctL5a9uZTc8cQxOsUWNjteb4lqEiUZvdSvOlzrLqPk0c0uncj00lpYww9rG'

    const onToken = token => {
        console.log(token);
        Swal.fire({
            icon: 'success',
            title: 'Payment Succesful',
            text: 'You will recive a email with shipping information',
            confirmButtonColor: "#000000",
            });
    }

    return(
        <StripeCheckout
            label='Checkout'
            name='CRWN Clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Checkout'
            token={onToken}
            stripeKey={pk}
        />
    );
};

export default StripeCheckoutButton;