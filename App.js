import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import ContactUs from './ContactUs';
import Cart from './Components/Cart';
import Explore from './Components/Explore';
import Login from './Components/Login';
import About from './Components/About';
import Register from './Components/Register';
/*
function App() {
  const [photoGalleryArray, updatePhotoGalleryArray] = useState([]);
  useEffect(()=>{
    // API call for fetching images
    axios.get('https://picsum.photos/v2/list')
      .then(function (response) {
    // handle success
      updatePhotoGalleryArray(response.data)
  })
      .catch(function (error) {
    // handle error
      console.log(error);
  })

  },[])
  return(
    <div className='App' >
      <nav className='navbar navbar-dark bg-dark'>
        <div className='w-100 text-light'> Image Gallery</div>
      </nav>
      <div className='row container-fluid'>
      {photoGalleryArray.map((photoGalleryArrayItem,index)=>{
        //console.log(photoGalleryArrayItem.url,index);
        return(
          <div key={index} className="col-sm-4 col-md-4 p-1">
            <img src={photoGalleryArrayItem.download_url} alt={`image_${photoGalleryArrayItem.id}`}
            height="300" width="100%"/>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default App;*/
function App() {
  return ( 
    <>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Explore/>}/>
      <Route exact path="/home"  element={<Home/>}/>
      <Route exact path="/products" element={<Products/>}/>
      <Route exact path="/products/:id" element={<Product/>}/>
      <Route exact path="/contact" element={<ContactUs/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/login" element = {<Login/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/register" element={<Register/>} />

      </Routes>
    </>
   );
}

export default App;