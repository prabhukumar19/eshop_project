import React from "react";
import offer1 from "../../assets/img/offer-1.jpg";
import offer2 from "../../assets/img/offer-2.jpg";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="row px-xl-5">
        <div className="col-md-6">
          <div className="product-offer mb-30" style={{ height: 300 }}>
            <img className="img-fluid" src={offer1} alt="offer image" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <Link  to={'/shop'} className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-offer mb-30" style={{ height: 300 }}>
            <img className="img-fluid"src={offer2} alt="offer image" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <Link  to={'/shop'} className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
