import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div>
                <h6>About</h6>
                <p>
                  <span style={{ fontFamily: "'Permanent Marker', cursive" }}>
                    ToysWorld
                  </span>{" "}
                  is an Online Store Exclusively for Toys & Games. Buy Authentic
                  Toys, Games & Collectibles of Nerf, Marvel, Barbie, Hot
                  Wheels, Funskool, Lego, Funko & More!.
                </p>
              </div>

              <div>
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <p>About Us</p>
                  </li>
                  <li>
                    <p>Contact Us</p>
                  </li>
                  <li>
                    <p>Privacy Policy</p>
                  </li>
                  <li>
                    <p>Sitemap</p>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
         
        </footer>
      </div>
  )
}

export default Footer