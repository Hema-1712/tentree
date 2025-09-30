import React, { useEffect , useState} from 'react';
import '../assets/style/style.css';
import icon from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '../assets/images/p1.jpg';
import img2 from '../assets/images/p2.jpeg';
import img3 from '../assets/images/p3.jpg';
import img4 from '../assets/images/p4.jpg';
import img5 from '../assets/images/p5.jpg';
import img6 from '../assets/images/p6.jpg';
import img7 from '../assets/images/p7.jpg';
import img8 from '../assets/images/p8.jpeg';
import img9 from '../assets/images/p9.jpg';
import img10 from '../assets/images/p10.jpg';
import img11 from '../assets/images/p11.jpg';
import img12 from '../assets/images/p12.jpeg';
import img13 from '../assets/images/p13.jpg';
import img14 from '../assets/images/p14.jpg';
import img15 from '../assets/images/p15.jpg';
import img16 from '../assets/images/p16.jpg';

function Shop() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);
const offers = [
    { title: "Summer AC Checkup", desc: "Get 15% off on all maintenance services this summer." },
    { title: "Bulk Order Discount", desc: "Up to 10% off on orders of 50+ units." },
    { title: "New Installation Package", desc: "Free installation on select HVAC systems." }
  ];


   const allProducts = [
    { title: "Mini Split Air Conditioners", price: "₹3500", img: img1, desc: "High-efficiency split AC suitable for homes and offices.", category: "AC" },
    { title: "Ventilator Fans", price: "₹7500", img:img2 , desc: "Perfect for large rooms and commercial spaces.", category: "AC" },
    { title: "HVAC  Replacement Parts", price: "₹4500", img:img3, desc: "Smart thermostat to control your HVAC systems efficiently.", category: "Controller" },
    { title: "Dampers", price: "₹1800", img: img4, desc: "Durable and energy-efficient compressor for HVAC systems.", category: "Compressor" },
    { title: "HVAC Tools", price: "₹2500", img:img5, desc: "High-quality ducting for HVAC installation.", category: "Accessories" },
    { title: "AC Installation Parts", price: "₹2200", img: img6, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
        { title: "Line Sets", price: "₹1200", img: img7, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "Motor and Suppliers", price: "₹3200", img: img8, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "HVAC Filters", price: "₹2200", img: img9, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "Heat Energy", price: "₹1,200", img: img10, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "HVAC Capacitors", price: "₹3200", img: img11, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "Chemical and Cleaners", price: "₹1200", img: img12, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "HVAC Compensate", price: "₹4200", img: img13, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "Flex Duct", price: "₹1,200", img: img14, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "Compressors", price: "₹3200", img: img15, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },
    { title: "System Protectors", price: "₹2200", img: img16, desc: "Universal remote compatible with multiple AC models.", category: "Accessories" },

  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ["All", "AC", "Controller", "Compressor", "Accessories"];

  const filteredProducts = allProducts.filter(p => 
    (category === "All" || p.category === category) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

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

 
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">Shop Our Products</h2>

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-md-6 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          {/* Category Sidebar */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Categories</h5>
            <div className="list-group">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`list-group-item list-group-item-action ${category === cat ? "active" : ""}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="col-md-9">
            <div className="row">
              {filteredProducts.length === 0 && (
                <p className="text-center">No products found.</p>
              )}
              {filteredProducts.map((product, idx) => (
                <div className="col-md-6 mb-4" key={idx}>
                  <div className="card h-100 shadow-sm">
                    <img src={product.img} className="img-fluid" alt={product.title} />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{product.title}</h5>
                      <p className="text-muted">{product.desc}</p>
                      <h6 className="fw-bold">{product.price}</h6>
                      <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-primary btn-sm">Add to Cart</button>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => setSelectedProduct(product)}
                        >
                          Quick View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.title}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedProduct(null)}></button>
              </div>
              <div className="modal-body">
                <img src={selectedProduct.img} className="img-fluid mb-3" alt={selectedProduct.title} />
                <p>{selectedProduct.desc}</p>
                <h6 className="fw-bold">{selectedProduct.price}</h6>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  


    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Current Offers</h2>
        <div className="row">
          {offers.map((offer, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <div className="p-4 border rounded shadow-sm h-100 bg-white">
                <h5 className="fw-bold">{offer.title}</h5>
                <p>{offer.desc}</p>
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
  
  export default Shop;
  