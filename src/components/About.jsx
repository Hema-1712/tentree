import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/a1.jpg';
import icon1 from '../assets/images/a.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);

 return (
      <>
        {/* Navbar */}


   <nav
  className="navbar navbar-expand-lg px-4 shadow-sm"
  style={{ backgroundColor: 'khaki' }}
  data-aos="fade-right"
>
  <div className="container-fluid">
    {/* Brand Logo + Text */}
    <Link className="navbar-brand text-black fw-bold d-flex align-items-center" to="/">
      <img
        src={icon}
        alt="logo"
        className="img-fluid me-2"
        loading="eager"
        style={{ width: "45px", height: "45px", borderRadius: "8px" }}
      />
        VENTIFY
    </Link>

    {/* Toggler */}
    <button
      className="navbar-toggler bg-white mx-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu Items */}
    <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
      <ul className="navbar-nav align-items-lg-center">
        <li className="nav-item mx-2">
          <Link to="/" className="nav-link text-black d-flex align-items-center">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/shop" className="nav-link text-black d-flex align-items-center">Our Product</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/about" className="nav-link text-black d-flex align-items-center">About Us</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/contact" className="nav-link text-black d-flex align-items-center">Get in Touch</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/blog" className="nav-link text-black d-flex align-items-center">Services</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/sup" className="nav-link text-black d-flex align-items-center">Help & Support</Link>
        </li>
        <li className="nav-item mx-2">
          <Link to="/signin" className="nav-link text-black d-flex align-items-center">Get Started</Link>
        </li>

        {/* Search Bar */}
        <li className="nav-item mx-2 mb-3">
          <form className="d-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
           
          </form>
        </li>

        {/* Cart Icon */}
        <li className="nav-item mx-2 mb-3">
          <Link
            to="/cart"
            className="btn btn-warning fw-bold d-flex align-items-center"
            style={{ fontSize: "1.2rem" }}
          >
            🛒
          </Link>
        </li>

        {/* Login Button */}
        <li className="nav-item mx-2">
          <Link
            to="/login"
            className="btn btn-primary fw-bold  px-3 py-1 d-flex align-items-center"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="container mt-5 mb-5">
  <img src={icon1} alt="hvac image" className='img-fluid' style={{borderRadius:'16px'}}/>
</div>
 <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image Side (You can replace the URL with your own image) */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={image1}
              alt="HVAC System"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Content Side */}
          <div className="col-md-6">
            <h2 className="fw-bold">About Us</h2>
            <p className="text-dark">
              At <strong>Ventify</strong>, we specialize in providing
              high-quality Heating, Ventilation, and Air Conditioning (HVAC) products
              and solutions for both residential and commercial needs. With years of
              industry expertise, we are committed to delivering durable equipment,
              energy-efficient systems, and exceptional customer support.
            </p>
            <ul className="list-unstyled">
              <li>✅ Certified Products & Trusted Brands</li>
              <li>✅ Expert Technical Guidance</li>
              <li>✅ Bulk & Retail Supply Options</li>
              <li>✅ Custom HVAC Solutions for Contractors & Businesses</li>
              <li>✅ Fast Shipping and Hassle-Free Support</li>
            </ul>
            <p className="text-muted">
              Whether you're an HVAC professional, contractor, or DIY enthusiast,
              we’re here to help you find the right solution at the right price.
            </p>
            <h5 className="fw-bold mt-3">
              VENTIFY– Powering Comfort. Delivering Reliability.
            </h5>
          </div>

        </div>
      </div>
    </section>


    <div className="container mt-5 mb-5">
        
        <h2 className="fw-bold mb-4">Our Vision & Mission</h2>
        
        <div className="row">
          {/* Vision */}
          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h4 className="fw-bold">Our Vision</h4>
              <p className="mb-0">
                To be the most trusted and innovative HVAC solutions provider, delivering 
                comfort, efficiency, and sustainability to every home and business across the globe.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <h4 className="fw-bold">Our Mission</h4>
              <ul className="list-unstyled">
                <li> Supply premium-quality HVAC equipment and accessories.</li>
                <li> Empower customers with expert guidance and support.</li>
                <li> Promote energy-efficient and eco-friendly climate solutions.</li>
                <li> Deliver value through reliable service and long-term partnerships.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <section className="py-5 bg-light">
      <div className="container">

        {/* Core Values */}
        <h2 className="fw-bold text-center mb-4">Our Core Values</h2>
        <div className="row mb-5">
          {[
            "Integrity – We operate with honesty and transparency.",
            "Innovation – We stay ahead with modern HVAC technology.",
            "Reliability – We ensure consistent supply & performance.",
            "Customer-Centric Approach – Your comfort is our priority.",
            "Sustainability – We promote eco-friendly solutions."
          ].map((value, idx) => (
            <div key={idx} className="col-md-4 mb-3">
              <div className="p-3 border rounded shadow-sm bg-white">
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <h2 className="fw-bold text-center mb-4">Why Choose Us?</h2>
        <ul className="list-group mb-5">
          <li className="list-group-item">Over 10+ years of industry expertise</li>
          <li className="list-group-item">ISO-certified products from leading brands</li>
          <li className="list-group-item">Bulk & retail supply options for contractors & individuals</li>
          <li className="list-group-item">Technical assistance & installation support</li>
          <li className="list-group-item">Fast nationwide delivery & after-sales support</li>
        </ul>

        {/* Customer Support */}
        <h2 className="fw-bold text-center mb-4">Customer Support Commitment</h2>
        <p className="text-center mb-5">
          Our expert team assists with product selection, installation guidance, warranty help, bulk orders, and more.
        </p>

        {/* Dealer Partnership */}
        <h2 className="fw-bold text-center mb-4">Become a Dealer / Contractor Partner</h2>
        <p className="text-center">
          Register with us and enjoy trade discounts, priority processing, and dedicated support.
        </p>

      </div>
    </section>
    {/* Footer */}
        <footer>
          <div className="footer-content p-4 d-flex justify-content-around flex-wrap"data-aos="slide-right">
            
                             <div className="footer-links">
                              <h4>
                               VENTIFY
                              </h4>

              <ul>
                 <li><a href="#">About Us</a></li>
              <li><a href="#" >Careers</a></li>
              <li><a href="#" >Blog</a></li>
              <li><a href="#" >Contact</a></li>

              </ul>
            </div>
               
  
            <div className="footer-links">
              <h3>SHOP</h3>
              <ul>
                <li><a href="#" >All Products</a></li>
              <li><a href="#" >Categories</a></li>
              <li><a href="#" >Services</a></li>
                                       <li><a href="#" >Quality Check</a></li>

                            <li><a href="#" >Support</a></li>

              </ul>
            </div>
  
            <div className="footer-links">
              <h3>SUPPORT</h3>
              <ul>
               <li><a href="#" >Help Center</a></li>
              <li><a href="#" >FAQs</a></li>
              <li><a href="#" >Privacy Policy</a></li>
              <li><a href="#" >Terms & Conditions</a></li>
              <li><a href="#" >Careers</a></li>

            </ul>

            </div>

            <div className="footer-links">
              <h4 className="text-white mb-3">Stay Updated</h4>
              <p className="mb-3">     Subscribe for the latest  offers.</p>
              <form className="d-flex flex-column flex-sm-row gap-2">
                <input type="email" clasName="form-control" placeholder="Enter your email" required />
                <button className="btn btn-danger">Subscribe</button>
              </form>
            </div>
          </div>
         <div className="footer-bottom"data-aos="flip-right">
                       <div className="icons"data-aos="flip-right">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-pinterest"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-instagram"></i>
                      </div>
                         <p>Ventify &copy; 2025 All rights reserved.</p>
                         </div>
        </footer>
      </>
    );
  }
  
  export default About;
  