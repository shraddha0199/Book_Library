// import React from 'react'
// import './Style.css'

// const Cart = (cartItem) => {
//     return (
//         <>
//             {cartItem.length === 0 &&
//                 <>
//                     <h2 className='empty-cart'>Cart Is Empty please Select a product</h2>
//                     <button className='cart_shop'>
//                         Shooping
//                     </button>
//                 </>

//             }
//             <div className='cart-container'>
//                 <div className='cart_product'>
//                     {
//                         cartItem.map((item) => {
//                             return (
//                                 <>
//                                     <div className='cart_box' key={item.id}>
//                                         <div className='cart_product_container'>
//                                             <div className='cart_img_box'>
//                                                 <img src={item.img}></img>
//                                             </div>
//                                         </div>
//                                         <div className='cart_img_detail'>
//                                             <h2>{item.title}</h2>
//                                             <h3>{item.price}</h3>
//                                         </div>
//                                     </div>
//                                 </>
//                             )

//                         })
//                     }
//                 </div>
//             </div>
//         </>

//     )
// }

// export default Cart

import React from 'react';
import { Link } from 'react-router-dom';
// import './Style.css';

const Cart = ({ cartItem }) => { // Destructure cartItem from props
    return (
        <>
            {cartItem.length === 0 &&
                <>
                    <h2 className='mt-5 text-center'>Cart Is Empty please Select a product</h2>
                   
                    <Link to="/">
                    <button className='cart_shop'>
                       Add Book
                    </button>
                    </Link>
                    
                </>
            }
            <div className='product-container'>
                <div className='main-product'>
                    {
                        cartItem.map((item) => {
                            return (
                                <div className='row'>
                                    <div className='col-md-4 col-lg-4 col-12'>

                                <div className='box' key={item.id}>
                                    <div className=''>
                                        <div className='img_box'>
                                            <img src={item.img} alt={item.title} className='img-fluid'></img>
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <h3 style={{fontSize:"20px"}}>{item.title}</h3>
                                        <h3>{item.price}</h3>
                                    </div>
                                </div>
                                </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Cart;
