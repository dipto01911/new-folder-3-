 import {useState,useEffect} from 'react';
import Product from './Product';
import Cart from './Cart';
import './new.css';

 function App() {
 const[user,setuser] = useState([]);
 const[cart,setcart] = useState([]);
useEffect(()=>{
  fetch('https://testapi.devtoolsdaily.com/users?limit=10')
  .then(res => res.json())
  .then(data => setuser(data))
})
const inc = (y) => {
  console.log(y);
   const newcart=[...cart,y];
   setcart(newcart);
}


 return (
   <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:'center'}}>total length:{user.length}</h1>
        <h1 style={{textAlign:'center'}}>selected :{cart.length}</h1>
        <Cart cart={cart}></Cart>
       
          
    {
      user.map(x => <Product inc={inc} fname={x.firstName} lname={x.lastName} ccode={x.countryCode} price={x.companyId} ></Product>)
    }
        
      </header>
    </div>
  );
}

export default App;


// const[user,setuser]=useState([]);
// const[cart,setcart]=useState([]);
// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/photos")
//   .then(res => res.json())
//   .then(data=>setuser(data));
  
// });
//  const inc =(nam) =>{
//    const newcart=[...cart,nam];
//    setcart(newcart);
//    console.log(nam);
//  }

//  <h1 className='t'>Total is :{user.length}</h1>
//  <h2 className='t'>Selected is:{cart.length}</h2>
//  <Cart cart={cart}></Cart>
//  {
// user.map(x => <Product  inc={inc} nam={x.title} n={x.url}></Product>)
// }