import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-col">
                <h6>About Us</h6>
                <p>We are a team of designers and developers that create high quality HTML Template & WordPress Theme.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-col">
                <h6>Company</h6>
                <ul>
                  <li><Link href="#">About Us</Link></li>
                  <li><Link href="#">Our Services</Link></li>
                  <li><Link href="#">Privacy policy</Link></li>
                  <li><Link href="#">Affiliate Program</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-col">
                <h6>Quick Links</h6>
                <ul>
                  <li><Link href="#">FAQ</Link></li>
                  <li><Link href="#">Help</Link></li>
                  <li><Link href="#">Terms & Conditions</Link></li>
                  <li><Link href="#">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-col">
                <h6>Follow Us</h6>
                <div className="social-links">
                  <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link href="#"><i className="fab fa-twitter"></i></Link>
                  <Link href="#"><i className="fab fa-instagram"></i></Link>
                  <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <p className="footer-bottom-text">Design by <Link href="https://htmlcodex.com">HtmlCodex</Link></p>
            </div>
          </div>
        </div>
      </div>

    </footer>
    </>
  )
}

export default Footer