// import React from 'react'
// import {BrowserRouter as  Router } from 'react-router-dom';
// import Nav from './Component/Nav';
// import Rout from './Component/Rout';

// const App = () => {
//   return (
//     <>
//      <Router>
//        <Nav/>
//        <Rout/>
//      </Router>
//     </>
    
//   )
// }

// export default App






// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Nav from './Component/Nav';

// import Product from './Component/Product'
// import Cart from './Component/Cart'
// import Learn from './Component/Learn';
// import Want from './Component/Want';
// import Search from './Component/Search';

// const App = () => {

//   const [cartItem , setcartItem] = useState([]);
//   const [learnItem , setlearnItem] = useState([]);
//   const [wantItem , setwantItem] = useState([]);

//   const addtocart = (product) =>{
//         const exsit = cartItem.find((x)=>{
//           return x.id == product.id;
//         })
//         if(exsit){
//           alert("This Product is already added")
//         }
//         else{
//           setcartItem([...cartItem,{...product, quantity:1}])
//         }
//   }

//   const learntocart = (product) =>{
//     const exsit = learnItem.find((x)=>{
//       return x.id == product.id;
//     })
//     if(exsit){
//       alert("This Product is already added")
//     }
//     else{
//       setlearnItem([...learnItem,{...product, quantity:1}])
//     }
// }

// const wanttocart = (product) =>{
//   const exsit = wantItem.find((x)=>{
//     return x.id == product.id;
//   })
//   if(exsit){
//     alert("This Product is already added")
//   }
//   else{
//     setwantItem([...wantItem,{...product, quantity:1}])
//   }
// }
//   return (
//     <>
     
//       <Router>
//       <Nav />
//       <Routes>
//       <Route path='/' element={<Product addtocart={addtocart} learntocart={learntocart} wanttocart={wanttocart}/>}/>
//         <Route path='/cart' element={<Cart addtocart={addtocart} cartItem={cartItem} setcartItem={setcartItem}/>}/>
//         <Route path='/learn' element={<Learn learntocart={learntocart} learnItem={learnItem} setlearnItem={setlearnItem}/>}/>
//         <Route path='/want' element={<Want  wanttocart={wanttocart} wantItem={wantItem} setwantItem={setwantItem}/>}/>
//         <Route path='/search' element={<Search/>}/>
//       </Routes>
       
//       </Router>
     
     
//     </>
//   );
// };

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Component/Nav';
import Product from './Component/Product';
import Cart from './Component/Cart';
import Learn from './Component/Learn';
import Want from './Component/Want';
import Search from './Component/Search';
// import Login from './Component/Login';
import Signup from './Component/Signup'; // Import the Signup component

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  const [learnItem, setLearnItem] = useState([]);
  const [wantItem, setWantItem] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const addtocart = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      alert('This Product is already added');
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const learntocart = (product) => {
    const exist = learnItem.find((x) => x.id === product.id);
    if (exist) {
      alert('This Product is already added');
    } else {
      setLearnItem([...learnItem, { ...product, quantity: 1 }]);
    }
  };

  const wanttocart = (product) => {
    const exist = wantItem.find((x) => x.id === product.id);
    if (exist) {
      alert('This Product is already added');
    } else {
      setWantItem([...wantItem, { ...product, quantity: 1 }]);
    }
  };

  const handleSignup = () => {
    // Perform signup logic (e.g., sending data to server)
    // For simplicity, just set loggedIn to true
    setLoggedIn(true);
  };

  const buyBook = (book) => {
    // Here, you can implement the logic to buy the book
    console.log('Buying book:', book.title);
    // You can use any library or API to handle the purchase process
  };

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Product addtocart={addtocart} learntocart={learntocart} wanttocart={wanttocart} buyBook={buyBook} /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          <Route path="/cart" element={<Cart addtocart={addtocart} cartItem={cartItem} setCartItem={setCartItem} />} />
          <Route path="/learn" element={<Learn learntocart={learntocart} learnItem={learnItem} setLearnItem={setLearnItem} />} />
          <Route path="/want" element={<Want wanttocart={wanttocart} wantItem={wantItem} setWantItem={setWantItem} />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/login" element={<Login/>} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
