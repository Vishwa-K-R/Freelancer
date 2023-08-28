import back from "../img/banner-5.jpg"
function HomeBanner() {

    return ( <>
    {/* <div className="clearfix"></div> */}

    <div className="home-banner margin-bottom-0"  style={{backgroundColor:"green",backgroundImage: `url(${back})`}} data-overlay="5">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12 ">
				
				<div className="banner_caption text-center mb-5">
					<h1 className="banner_title ft-bold mb-1">Explore More Than 10K+ Jobs</h1>
					<p className="fs-md ft-medium">Hi Friends, Your Dream Jobs is Waiting in Your Local City</p>
				</div>
				
				<form className="bg-white rounded p-1">
					<div className="row gx-0">
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
							<div className="form-group mb-0 position-relative">
								<input type="text" className="form-control lg left-ico" placeholder="Job Title, Keyword or Company"/>
								<i className="bnc-ico lni lni-search-alt"></i>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="form-group mb-0 position-relative">
								<input type="text" className="form-control lg left-ico" placeholder="Job Place"/>
								<i className="bnc-ico lni lni-target"></i>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
							<div className="form-group mb-0 position-relative">
								<select className="form-select lg b-0">
								  <option value="1">Choose Location</option>
								  <option value="2">Los Angeles</option>
								  <option value="3">San Francisco</option>
								  <option value="4">San Diego</option>
								  <option value="5">Philadelphia</option>
								  <option value="6">Denver</option>
								  <option value="7">Houston</option>
								</select>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
							<div className="form-group mb-0 position-relative">
								<button className="btn full-width custom-height-lg theme-bg text-white fs-md" type="button">Find Job</button>
							</div>
						</div>
					</div>
				</form>
				
			</div>
		</div>
	</div>
</div>


    </> );
}

export default HomeBanner;