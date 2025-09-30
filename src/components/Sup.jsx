import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Sup() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);
  const faqs = [
    {
      q: "Do you provide installation services?",
      a: "Yes! We offer professional installation support for residential, commercial, and industrial HVAC systems."
    },
    {
      q: "How can I track my order?",
      a: "Once your order is shipped, we provide a tracking link via email or WhatsApp for real-time status updates."
    },
    {
      q: "Do you offer Annual Maintenance Contracts (AMC)?",
      a: "Absolutely. We provide AMC plans for all types of HVAC systems to ensure long-term performance."
    },
    {
      q: "Can I get bulk discounts for contractor or business orders?",
      a: "Yes, we offer special pricing and priority delivery for dealers, HVAC contractors, and corporate clients."
    },
    {
      q: "Which brands do you supply?",
      a: "We deal with leading HVAC brands including Daikin, LG, Blue Star, Voltas, Hitachi, and more."
    }
  ];

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

<section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Help & Support</h2>
        <p className="text-muted mb-5">
          We're always ready to assist you with product guidance, service requests, or technical queries.
        </p>

        <div className="row">
          {[
            { icon: "📞", title: "Technical Support", desc: "Product installation guidance and troubleshooting assistance." },
            { icon: "🛠️", title: "Service & AMC", desc: "Repairs, gas refilling, maintenance contracts, and more." },
            { icon: "🚚", title: "Order & Delivery", desc: "Shipping status, replacements, and tracking updates." },
            { icon: "💬", title: "Live Chat / WhatsApp", desc: "Instant support via WhatsApp or direct chat." }
          ].map((item, idx) => (
            <div className="col-md-3 mb-4" key={idx}>
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="display-5 mb-3">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-4">
          <a href="tel:+919442482810" className="btn btn-primary me-3">📞 Call Support</a>
          <a href="https://wa.me/919442482810" target="_blank" rel="noopener noreferrer" className="btn btn-success">💬 WhatsApp Support</a>
        </div>
      </div>
    </section>


  
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((item, idx) => (
            <div className="accordion-item mb-2" key={idx}>
              <h2 className="accordion-header" id={`heading${idx}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${idx}`}
                  aria-expanded="false"
                >
                  {item.q}
                </button>
              </h2>
              <div
                id={`collapse${idx}`}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
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
  
  export default Sup;
  