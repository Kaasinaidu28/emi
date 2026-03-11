import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './Amg.css';


const Amazonmini = () => {

  return (
    <div>
 
        <div className='home bg-black text-white p-3 d-flex justify-content-around'>
            <h5>Home</h5>
              <h5 >About Us</h5>
                <h5 >Gallery</h5>
                  <h5>Contact Us</h5>
                    <h5>Careers</h5>
                      <h5>Our Locations</h5>
                        <h5>click here</h5>
                  

        </div>
        <div className='mt-2'>
            <marquee  className='bg-dark text-white p-3' behavior="scroll" direction="left" scrollamount="15">
             <h3><a href="">Welcome to Infor Global Solutions</a></h3>
            </marquee>
        </div>


        <div id="banner" className="carousel slide mt-2" data-bs-ride="carousel">
  <div className="carousel-inner">

    <div className="carousel-item active" data-bs-interval="2000">
      <img src="./image/amg1.jpg" className="image" alt="img1" />
    </div>

    <div className="carousel-item" data-bs-interval="2000">
      <img src="./image/amg4.jpg"   className="d-block w-100 h-50" alt="img2" />
    </div>

    <div className="carousel-item" data-bs-interval="2000">
      <img src="./image/amg3.jpg"  className="d-block w-100 h-50 " alt="img3" />
    </div>

    <div className="carousel-item" data-bs-interval="2000">
      <img src="./image/amg4.jpg" className="image" alt="img4" />
    </div>

    <div className="carousel-item" data-bs-interval="2000">
      <img src="./image/amg5.jpg" className="image" alt="img5" />
    </div>

  </div>

  {/* Next Button */}
  <button className="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>

  {/* Prev Button */}
  <button className="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>

</div>

    </div>
  )
}

export default Amazonmini

