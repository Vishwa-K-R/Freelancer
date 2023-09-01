import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "./Redux/Actions/ProductActions";
import { selectedProduct } from "./Redux/Reducers/ProductReducer";
import { Link } from "react-router-dom";
import Footer from "./homepage/Footer";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:8080/getJob")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
	
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <>
	<div className="bg-title py-5" data-overlay="0">
				<div className="ht-30"></div>
				<div className="container">
					
					<div className="row">
						<div className="colxl-12 col-lg-12 col-md-12">
							<h1 className="ft-medium">Browse More Jobs</h1>
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/" className="text-light">Home</Link></li>
									<li className="breadcrumb-item active theme-cl" aria-current="page">Browse More Jobs</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="ht-30"></div>
			</div>
    <section class="bg-light middle">
				<div class="container">
					<div class="row">
						<div class="col-xl-12 col-lg-12 col-md-12 col-12">
							<div class="row align-items-center justify-content-between mx-0 bg-white rounded py-2 mb-4">
								<div class="col-xl-3 col-lg-4 col-md-5 col-sm-12">
									<h6 class="mb-0 ft-medium fs-sm">8 New Jobs Found</h6>
								</div>
								
								<div class="col-xl-9 col-lg-8 col-md-7 col-sm-12">
									<div class="filter_wraps elspo_wrap d-flex align-items-center justify-content-end">
										<div class="single_fitres pe-3 br-right">
											<select class="form-select">
											  <option value="1" selected="">Default Sorting</option>
											  <option value="2">Recent jobs</option>
											  <option value="3">Featured jobs</option>
											  <option value="4">Trending Jobs</option>
											  <option value="5">Premium jobs</option>
											</select>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
      <ProductComponent />
      </div>
			</section>
			<Footer/>
	</>
  );
};

export default ProductPage;