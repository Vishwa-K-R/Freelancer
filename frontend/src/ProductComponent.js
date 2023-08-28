import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const ProductComponent = () => {
	// const navigation=useNavigate();
	const navigation = useNavigate(); // Call useNavigate as a function
	const products = useSelector((state) => state.allProducts.products);
  
  const renderList = products.map((product) => {
    const { id, title, image,jobType ,country,specialisms1,salary} = product;
    return (
    <>
				<div className="fll" >
					<div class="row align-items-center g-xl-3 g-lg-3 g-md-3 g-3" key={id} onClick={()=>navigation("/product/"+id)}>
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
							<div class="job_grid border rounded ">
								<div class="position-absolute ab-left"><button type="button" class="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"><i class="lni lni-heart-filled position-absolute snackbar-wishlist"></i></button></div>
								<div class="position-absolute ab-right"><span class="medium theme-cl theme-bg-light px-2 py-1 rounded">{jobType}</span></div>
								<div class="job_grid_thumb mb-3 pt-5 px-3">
									<a  class="d-block text-center m-auto"><img src={image} class="img-fluid" width="70" alt="" /></a>
								</div>
								<div class="job_grid_caption text-center pb-5 px-3">
									<h6 class="mb-0 lh-1 ft-medium medium"><a class="text-muted medium">{specialisms1}</a></h6>
									<h4 class="mb-0 ft-medium medium"><a  class="text-dark fs-md">{title}</a></h4>
									<div class="jbl_location"><i class="lni lni-map-marker me-1"></i><span>{country}</span></div>
								</div>
								<div class="job_grid_footer pb-4 px-3 d-flex align-items-center justify-content-between">
									<div class="df-1 text-muted"><i class="lni lni-wallet me-1"></i>${salary}</div>
									<div class="df-1 text-muted"><i class="lni lni-timer me-1"></i>3 days ago</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
        </>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;