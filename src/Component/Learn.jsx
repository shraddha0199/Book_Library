import React from 'react';
// import './Style.css';
import { Link } from 'react-router-dom';

const Learn = ({ learnItem }) => { // Destructure cartItem from props
    return (
        <>
            {learnItem.length === 0 &&
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
                        learnItem.map((item) => {
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

export default Learn;
