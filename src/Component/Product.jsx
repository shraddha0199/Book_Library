// import React from 'react';
// import Detail from './Productdetail';
// import './Style.css'

// const Product = (addtocart ) => {
//   return (
//     <> 
//       <div className='product-container'>
//         <div className='main-product'>
//           {
//            Detail.productData && Detail.productData.map((curElm) => (
//             <>
//               <div className='box' key={curElm.id}>
//                 <div className='img-box'>
//                   <img src={curElm.img} alt={curElm.title} />
//                 </div>
//                 <div className='detail'>
//                 <h4>{curElm.title}</h4>
//                 <h2>{curElm.price}</h2>
//                 <p>{curElm.desc}</p>
//                 <button className='addtocart' onClick={()=> addtocart(curElm)}>Add to Cart</button>
//               </div>

//               </div>
             
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Product;

// import React from 'react';
// import Detail from './Productdetail';
// import './Style.css'

// const Product = ({ addtocart, learntocart, wanttocart}) => { // Destructure addtocart from props
//   return (
//     <> 
//       <div className='product-container' >
//         <div className='main-product'>
//           {
//            Detail.productData && Detail.productData.map((curElm) => (
//             <>
//               <div className='box' key={curElm.id}>
//                 <div className='img-box'>
//                   <img src={curElm.img} alt={curElm.title} />
//                 </div>
//                 <div className='detail'>
//                 <h4>{curElm.title}</h4>
//                 <h2>{curElm.price}</h2>
//                 <p>{curElm.desc}</p>
//                 <button className='addtocart border-0 rounded-1 p-1 bg-info text-light ' onClick={() => addtocart(curElm)}>Have</button>
//                 <button className='addtocart mx-1 border-0 rounded-1 p-1 bg-secondary text-light ' onClick={() => learntocart(curElm)}>Learn</button>
//                 <button className='addtocart mx-1 border-0 rounded-1 p-1 bg-danger text-light ' onClick={() => wanttocart(curElm)}>Want</button>
//                  {/* Call the function correctly */}
//                  <button>Subscribe</button>
//               </div>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Product;


import React, { useState } from 'react';
import Detail from './Productdetail';
import './Style.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Product = ({ addtocart, learntocart, wanttocart}) => {

   const [detail, setDetail]= useState([]);
   const [close, setClose] = useState(false);

   const detailPage = (Product)=>{
          setDetail([{...Product}])
          setClose(true)
   }

   const handleBuyNow = () => {
    alert("Payment successfully");
 }


  return (
    <>
    {
       close ?
       <div className=''>
       <div className=''>
         {
            detail.map((x)=>{
             return(
               <>
                <div className='detail_container'>
                <div className='detail_contant'>
                <button className='close' onClick={()=> setClose(false)}><AiFillCloseCircle/></button>
                  <div className='detail_info'>
                     <div className='img-box'>
                        <img src={x.img} alt={x.title} className='img-fluid'/> 
                     </div>
                     <div className='product_detail'>
                         <h2>{x.title}</h2>
                         <h3>${x.price}</h3>
                         <p>{x.desc}</p>
                         <button onClick={handleBuyNow}>Buy Now</button>
                     </div>
                  </div>
                  </div>
                  </div>
               </>
             )
            })
          }
       </div>
    </div> : null
    }
      

      <div className='product-container' >
         <div className='main-product'>
          {
            Detail.productData && Detail.productData.map((curElm) => (
              <div className='box' key={curElm.id}>
                <div className='img-box'>
                  <img src={curElm.img} alt={curElm.title} />
                </div>
                <div className='detail'>
                  <h4>{curElm.title}</h4>
                  <h2>${curElm.price}</h2>
                  <p>{curElm.desc}</p>
                  <Link to="/cart">
                  <button className='addtocart border-0 rounded-1 p-1 bg-info text-light' onClick={() => addtocart(curElm)}>Have</button></Link>
                  <Link to='/learn'>
                  <button className='addtocart mx-1 border-0 rounded-1 p-1 bg-secondary text-light' onClick={() => learntocart(curElm)}>Learn</button></Link>
                  <Link to='/want'>
                  <button className='addtocart mx-1 border-0 rounded-1 p-1 bg-danger text-light' onClick={() => wanttocart(curElm)}>Want</button></Link>
                  <button className='addtocart mx-1 border-0 rounded-1 p-1 bg-primary text-light' onClick={()=> detailPage(curElm)}>Subscribe</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Product;


