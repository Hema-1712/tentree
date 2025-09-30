import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);

  const downloads = [
    { name: "Product Catalog", file: "/files/catalog.pdf" },
    { name: "Installation Manual", file: "/files/installation-manual.pdf" },
    { name: "Warranty Policy", file: "/files/warranty.pdf" },
    { name: "AMC Service Plans", file: "/files/amc-plans.pdf" }
  ];
const services = [
    {
      title: "HVAC Product Supply",
      desc: "Wholesale and retail supply of air conditioners, compressors, ducting materials, thermostats, and spare parts.",
      icon: "❄️",
    },
    {
      title: "Installation & Setup",
      desc: "Professional installation services for residential, commercial, and industrial HVAC systems.",
      icon: "🛠️",
    },
    {
      title: "Maintenance & Repair",
      desc: "Routine servicing, breakdown repair, gas refilling, and component replacements.",
      icon: "🔧",
    },
    {
      title: "Custom HVAC Solutions",
      desc: "Tailored solutions for factories, warehouses, data centers, and high-demand environments.",
      icon: "🏭",
    },
    {
      title: "Energy Efficiency Upgrades",
      desc: "Upgrade your old systems to high-efficiency HVAC units to reduce energy bills.",
      icon: "⚡",
    },
    {
      title: "AMC & Annual Contracts",
      desc: "Affordable Annual Maintenance Contracts (AMC) for long-term peace of mind.",
      icon: "📅",
    },
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
        <h2 className="fw-bold mb-4">Our Services</h2>
        <p className="text-muted mb-5">
          From supply to installation – we provide complete HVAC solutions for homes, offices, and industries.
        </p>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="p-4 border rounded shadow-sm h-100">
                <div className="display-5 mb-3">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
<section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Image */}
          <div className="col-md-6 mb-4">
            <img
              src={icon}
              alt="Our Story"
              className="img-fluid rounded shadow" style={{borderRadius:'16px'}}
            />
          </div>

          {/* Story Text */}
          <div className="col-md-6">
            <h2 className="fw-bold">Our Story</h2>
            <p>
              Every great company begins with a purpose — ours started with a simple vision:
              to make quality HVAC solutions accessible to everyone.
            </p>
            <p>
              What started as a small warehouse with just a few tools and air conditioning units
              has now grown into a trusted hub for homeowners, contractors, and industries.
            </p>
            <p>
              From day one, our commitment has remained the same — provide honest service,
              reliable products, and fast delivery at fair prices.
            </p>
            <h5 className="fw-bold mt-3">And this is only the beginning.</h5>
          </div>

        </div>
      </div>
    </section>


  

    <section className="py-5 bg-white">
      <div className="container">

        {/* Download Center */}
        <h2 className="fw-bold text-center mb-4">Download Center</h2>
        <p className="text-muted text-center mb-4">Access manuals, catalogs, and important documents instantly.</p>
        <div className="row mb-5">
          {downloads.map((item, idx) => (
            <div className="col-md-3 mb-3" key={idx}>
              <div className="p-3 border rounded shadow-sm text-center">
                📄 <strong>{item.name}</strong>
                <br />
                <a href={item.file} download className="btn btn-sm btn-outline-primary mt-2">Download</a>
              </div>
            </div>
          ))}
        </div>

        {/* Support Ticket Form */}
        <h2 className="fw-bold text-center mb-4">Raise a Support Ticket</h2>
        <p className="text-muted text-center mb-4">Facing an issue with a product or service? Let us know below.</p>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="p-4 bg-light border rounded shadow-sm">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label className="form-label">Issue Type</label>
                <select className="form-select">
                  <option>Product Defect</option>
                  <option>Delayed Delivery</option>
                  <option>Installation Support</option>
                  <option>AMC/Service Request</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Describe your issue"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Submit Ticket</button>
            </form>
          </div>
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
  
  export default Blog;
  