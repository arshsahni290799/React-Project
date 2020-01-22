 import React from 'react'
 import{Link} from'react-router-dom';
 function Navbar() {//function based component
     return (
         <div>
             <nav className="navbar navbar-light bg-dark mb-5">
     <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              <h1 align="right">
                GetMoviesInfo
                </h1>
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            
          </ul>
        </div>
      </nav>
         </div>
     )
 }
 
 export default Navbar
 