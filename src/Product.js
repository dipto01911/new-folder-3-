// @flow strict

// @flow strict

import * as React from 'react';
import './Product.css'
function Product(props) {
    const inc = props.inc;
    return (

        <div  className='t1'>
            <h1>First name:{props.fname}</h1>
            <h1>lastname:{props.lname}</h1>
            <h2>country code:{props.ccode}</h2>
            <h2>price:{props.price}</h2>
            <button onClick= {()=>inc(props.price)}>Add</button>
        </div>
       
    );
};

export default Product;








// import * as React from 'react';
// import './Product.css';
// function Product(props) {
//    const inc=props.inc;

//     return (
       
//         <div className='nan'>
            
//             <div className='pro'>
//              <img src={props.n} alt=''/>
//            <p>{props.nam}</p> 
//            <button onClick={ () => inc(props.nam)}>Add</button>
//            </div>
//            </div>
//     );
// };

// export default Product;