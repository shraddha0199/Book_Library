import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css';

const Nav = () => {
  return (
    <>
     <div className='header'style={{backgroundColor:"black", color:"white"}}>
        <div className='logo'>
            <h2 style={{whiteSpace:"nowrap"}}>Book Library</h2>
        </div>
        
        
        
        {/* <div className='nav'>
          <ul> 
          <li>
                <Link to="/search" className='link text-light'>
                  <button className='border-0  px-1'>Search</button></Link>
            </li>
            <li>
                <Link to="/" className='link text-light'>Home</Link>
            </li>
            <li>
                <Link to="/" className='link text-light'>Product</Link>
            </li>
            <li>
                <Link to="/want" className='link text-light' style={{whiteSpace:"nowrap"}}>Want to Learn</Link>
            </li>
            
            
            <li>
                <Link to="/learn" style={{textDecoration:"none"}} className='text-light'> Learning</Link>
            </li>
            <li>
                <Link to="/cart" style={{textDecoration:"none", whiteSpace:"nowrap"}} className='text-light'> Have To Learn</Link>
            </li>
            <li>
                <Link to="/signup" style={{textDecoration:"none"}} className='text-light'> <button className='border-0  px-1'>Signup</button></Link>
            </li>
            
            
          </ul>
        </div> */}


<nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      
    </a>
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse float end" id="navbarSupportedContent">
    <form className="d-flex">
        <Link to="/search">
        <button className="px-3 btn btn-outline-light" type="submit">Search</button>
        </Link>
        
      </form>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       

       
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/want" className="nav-link">
            Want to Learn
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/learn" className="nav-link">
            Learning
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Have to Learn
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>

        
        
      </ul>
     
      
      
    </div>
  </div>
</nav>

     </div>
    </>
    
  )
}

export default Nav
