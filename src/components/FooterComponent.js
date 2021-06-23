import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center bg-dark text-muted">
        <section>
          <div className="container text-center text-md-start p-4 mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h3 className="text-uppercase footer-heading mb-4">
                  Follow Us
                </h3>
                <div>
                  <a
                    href="https://www.facebook.com/AYGCINC"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset social"
                    ><i className="fab fa-facebook-f"></i
                  ></a>
                  <a
                    href="https://twitter.com/aygcinc"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset social"
                    ><i className="fab fa-twitter"></i
                  ></a>
                  <a
                    href="https://www.linkedin.com/company/american-yuncheng-gravure-cylinder-inc./"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset social"
                    ><i className="fab fa-linkedin"></i
                  ></a>
                  <a
                    href="https://www.instagram.com/yuncheng.usa/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-reset social"
                    ><i className="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h3 className="text-uppercase footer-heading mb-4">
                  Contact Us
                </h3>
                <p>
                  <i className="fas fa-home me-3"></i> 150 Ian Court <br />
                  Spartanburg, SC 29306
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i> randy@yunchengusa.com
                </p>
                <p><i className="fas fa-phone me-3"></i> 864.582.0927</p>
                <p><i className="fas fa-print me-3"></i> 864.582.4731</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
            © 2021 <a className="text-reset" href="https://yunchengusa.com/">American Yuncheng Gravure Cylinder, Inc.</a>
        </div>
      </footer>    )
}

export default Footer