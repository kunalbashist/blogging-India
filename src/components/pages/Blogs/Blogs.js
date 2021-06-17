import React, {useState} from 'react'
import './Blogs.css';
import Menu from "./menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'; 
import { Link } from 'react-router-dom';


const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    

    return (
        <>
            <h1 className="mt-5 text-center main-heading">BLOGS</h1>
            <hr />
            
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-primary" onClick={() => filterItem('technology')}>Technology</button>
                    <button className="btn btn-primary" onClick={() => filterItem('politics')}>Politics</button>
                    <button className="btn btn-primary" onClick={() => filterItem('entertainment')}>Entertainment</button>
                    <button className="btn btn-primary" onClick={() => filterItem('environment')}>Environment</button>
                    <button className="btn btn-primary" onClick={() => setItems(Menu)}>All</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="menu-items container-fluid mt-5 ">
                <div className="row">
                    <div className="col-11 mx-auto ">
                        <div className="row my-5 ">
                            
                            {
                                items.map((elem) => {
                                    const { id, title, conclusion, description } = elem;

                                    return (
        
                                        <div className="content col-12 col-md-12 col-lg-5 ma4 bg-dark dib pa4 d-flex justify-content-around">
                                           <div className="row">

                                                {/* menu items description */}
                                                <div>
                                                    <div className="main-title ">
                                                        <h1>{title}</h1>
                                                        <p>{conclusion }</p>        
                                                    <div className="k "> 
                                                      {/*save data to new data base on click*/}
                                                       <Link to='/single'><button className="readbutton" >Read more</button> </Link>
                                                     </div>      
                                                    </div>    
                                                    
                                                </div>
                                            </div>           
                                         </div>
                                    
                                  
                                    )
                                })
                        }

                             
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/create'> <button className="create">CREATE</button></Link>
        </>
    )
}

export default GalleryReact