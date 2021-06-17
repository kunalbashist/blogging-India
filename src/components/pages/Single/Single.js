import React from 'react'
import './Single.css';
import 'tachyons';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function single() {
    return (
        <>
        <div >
            <div className="d-flex justify-content-around ">
            <div className="kunal ma4 mh4 bg-dark dib pa2 pv3">
              <h1 className="blo">Title</h1> 
              <p>Description
                  about the blog is to be found here</p>           
            </div>
            </div>
        </div>
        <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                   <Link to='/blog'> <button className="btn btn-primary" >Back</button></Link>
                   <Link to='/edit'> <button className="btn btn-primary" >Edit</button></Link>
                   <Link to='/blog'> <button className="btn btn-primary" >Delete</button> </Link>
                </div>
            </div>
        </> 
    )
}

export default single
