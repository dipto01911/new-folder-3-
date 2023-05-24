// @flow strict

import * as React from 'react';
import './new.css'
function Cart(props) {
 const cart=props.cart;
 let t = 0;
 for(let i=0;i<cart.length;i++){
    t = t + cart[i];
  } 
    return (
        <div className='t'>
       <p style={{textAlign:'center',fontSize:'30px'}}>overview of the order</p>
        <p style={{textAlign:'center',fontSize:'30px'}}>total is:{t}</p>
        </div>
    );
};

export default Cart;