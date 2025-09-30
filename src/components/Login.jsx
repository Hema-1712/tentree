import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Login() {
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

<Container fluid className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="shadow p-4 bg-white rounded w-100" style={{ maxWidth: "900px" }}>
        
        {/* Left Side */}
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center mb-4 mb-md-0">
          <h2 className="text-center mb-3">Log In Ventify</h2>
          <p className="text-center">
            Don’t have an account? <Link to="/signin">Sign Up</Link>
          </p>

          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <div className="d-flex justify-content-between mb-3">
              <a href="#">Forgot Email?</a>
            </div>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              style={{ borderRadius: "25px" }}
            >
              Continue with Email →
            </Button>
          </Form>
        </Col>

        {/* Divider - visible only on medium+ screens */}
        <Col md={1} className="d-none d-md-flex align-items-center justify-content-center">
          <div className="border-end h-100"></div>
        </Col>

        {/* Right Side */}
        <Col xs={12} md={5} className="d-flex flex-column justify-content-center">
          <Button variant="light" className="mb-3 border d-flex align-items-center justify-content-center">
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" className="me-2" />
            Continue with Google
          </Button>

          <Button variant="primary" className="mb-3 d-flex align-items-center justify-content-center">
            <img src="https://img.icons8.com/fluency/24/facebook-new.png" alt="Facebook" className="me-2" />
            Continue with Facebook
          </Button>

          <Button variant="light" className="mb-3 border d-flex align-items-center justify-content-center">
            <img src="https://img.icons8.com/ios-filled/24/mac-os.png" alt="Apple" className="me-2" />
            Continue with Apple
          </Button>

          <a href="#" className="text-center">
            Continue with SSO
          </a>
        </Col>
      </Row>

      {/* Footer */}
      <div className="position-absolute bottom-0 mb-3 text-center">
        <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
      </div>
    </Container>
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
  
  export default Login;
  