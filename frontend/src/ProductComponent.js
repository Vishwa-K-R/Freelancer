import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ui from "../src/img/c-1.png"
import typer from "../src/img/c-2.png"
import devel from "../src/img/c-3.png"
import yoga from "../src/img/c-4.png"
import Carwash from "../src/img/c-5.jpg"

const ProductComponent = () => {
  const navigation = useNavigate();
  const products = useSelector((state) => state.allProducts.products);
 const [imageF,SetimageF] = useState("");
  const renderList = products.map((product) => {
	  const { id, title, image, jobType, country, specialisms1, salary } = product;
	  console.log(product);
    return (
      <div
        className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
        style={{ padding: "0 7.5px" ,cursor:"pointer"}} 
        key={id}
        onClick={() => navigation("/product/" + id)}
      >
        <div className="job_grid border rounded">
          <div className="position-absolute ab-left">
            <button
              type="button"
              className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
            >
              <i className="lni lni-heart-filled position-absolute snackbar-wishlist"></i>
            </button>
          </div>
          <div className="position-absolute ab-right">
            <span className="medium theme-cl theme-bg-light px-2 py-1 rounded">
              {jobType}
            </span>
          </div>
          <div className="job_grid_thumb mb-3 pt-5 px-3">
            <a className="d-block text-center m-auto">
              <img
                src={title === "Yoga" ? yoga : title ==="Developer" ? devel : title==="CarWash" ? Carwash : ""}
                className="img-fluid"
                width="70"
                alt=""
              />
            </a>
          </div>
          <div className="job_grid_caption text-center pb-5 px-3">
            <h6 className="mb-0 lh-1 ft-medium medium">
              <a className="text-muted medium">{specialisms1}</a>
            </h6>
            <h4 className="mb-0 ft-medium medium">
              <a className="text-dark fs-md">{title}</a>
            </h4>
            <div className="jbl_location">
              <i className="lni lni-map-marker me-1"></i>
              <span>{country}</span>
            </div>
          </div>
          <div className="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
            <div className="df-1 text-muted">
              <i className="lni lni-wallet me-1"></i>${salary}
            </div>
            <div className="df-1 text-muted">
              <i className="lni lni-timer me-1"></i>3 days ago
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row align-items-center g-xl-3 g-lg-3 g-md-3 g-3">
      {renderList}
    </div>
  );
};

export default ProductComponent;
