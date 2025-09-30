import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/f1.png';
import img2 from '../assets/images/f2.png';
import img3 from '../assets/images/f3.png';
import img4 from '../assets/images/f4.png';
import img5 from '../assets/images/f5.png';
import img6 from '../assets/images/f6.png';
import img7 from '../assets/images/f7.png';
import img8 from '../assets/images/f8.png';

import icon2 from '../assets/images/m2.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);
const hvacItems = [
  {
    name: "Coils",
    img: img1,
    link: "#",
  },
  {
    name: "Compressors",
    img: img2,
    link: "#",
  },
  {
    name: "Filtration & Purification",
    img: img3,
    link: "#",
  },
  {
    name: "HVAC Equipment",
    img: img4,
    link: "#",
  },
  {
    name: "IAQ & Ventilation",
    img: img5,
    link: "#",
  },
  {
    name: "Motors",
    img: img6,
    link: "#",
  },
  {
    name: "Service Parts & Supplies",
    img: img7,
    link: "#",
  },
  {
    name: "Thermostats",
    img: img8,
    link: "#",
  },
];

const points = [
    "Trusted by homeowners & businesses for over 15+ years",
    "Certified and genuine HVAC products",
    "Fast nationwide delivery & installation",
    "Expert technical support and maintenance services",
    "Energy-efficient and eco-friendly solutions"
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

    <div>

      {/* Hero Carousel */}
      <section>
        <div id="heroCarousel" className="carousel slide mt-5 mb-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={icon2} className="d-block w-100" alt="HVAC Banner 1" />
              <div className="carousel-caption d-none d-md-block">
                <h2 className="fw-bold text-light">Reliable HVAC Solutions</h2>
                <p>Comfort, efficiency, and sustainability in every project</p>
              </div>
            </div>
            </div>
            </div>
          
      </section>





    <div className="container my-5">
      <h3 className="text-center mb-4">HVAC Parts & Equipment</h3>
      <div className="row">
        {hvacItems.map((item, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="card h-100 text-center shadow-sm">
              <img
                src={item.img}
                className="card-img-top p-3"
                alt={item.name}
                style={{ height: "140px", objectFit: "contain" }}
              />
              <div className="card-body">
                <a href={item.link} className="stretched-link fw-bold text-dark">
                  {item.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Why Choose Us?</h2>
        <div className="row">
          {points.map((point, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <div className="p-4 border rounded shadow-sm h-100">
                ✅ {point}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        <div className="container mt-5 mb-5">
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
      {/* Stats / Counters */}
      <section className="py-5 bg-warning text-white text-center">
        <div className="container">
          <div className="row">
            {[
              { label: "Years of Experience", count: 15 },
              { label: "Happy Clients", count: 1200 },
              { label: "Projects Completed", count: 950 },
              { label: "Products Supplied", count: 5000 }
            ].map((item, idx) => (
              <div className="col-md-3 mb-3" key={idx}>
                <h3 className="fw-bold">{item.count}+</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

 

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">What Our Clients Say</h2>
          <div className="row">
            {[
              { name: "Rajesh Kumar", feedback: "Excellent HVAC services and very reliable!" },
              { name: "Neha Sharma", feedback: "Fast delivery and great customer support." },
              { name: "Amit Singh", feedback: "Professional installation team, highly recommend!" }
            ].map((item, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div className="p-4 bg-white border rounded shadow-sm h-100">
                  <p>"{item.feedback}"</p>
                  <h6 className="fw-bold mt-3">- {item.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <a
        href="https://wa.me/919442482810"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: 1000
        }}
      >
        <button className="btn btn-success btn-lg rounded-circle shadow">
          💬
        </button>
      </a>

      

    </div>
  
 <section className="py-5 bg-warning mb-5 text-white text-center">
      <div className="container">
        <h2 className="fw-bold mb-3">Subscribe to Our Newsletter</h2>
        <p className="mb-4">Get updates on new products, offers, and HVAC tips.</p>
        <form className="d-flex justify-content-center">
          <input type="email" className="form-control w-50 me-2" placeholder="Enter your email" />
          <button type="submit" className="btn btn-light">Subscribe</button>
        </form>
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
  
  export default Home;
  