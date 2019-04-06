import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer
          id="colophon"
          className="site-footer section7 fixed-bottom"
          role="contentinfo"
        >
          <div className="container">
            <div className="site-info wrap row">
              <div className="fcred col-12">
                <span>Copyright © 2019  </span>
                <a href="#" title="#">
                  QuéPago
                </a>
                <span>  - Negro Jose Website</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
