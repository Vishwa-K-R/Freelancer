import cimg1 from "../img/c-9.png";
import cimg2 from "../img/c-4.png";
import cimg3 from "../img/c-2.png";
import cimg4 from "../img/c-5.jpg";
import cimg5 from "../img/c-10.png";
import cimg6 from "../img/c-12.png";
import cimg7 from "../img/c-17.png";
import bg from "../img/curve.svg"
function Comp() {
    return ( <>
    
    {/* <section class="bg-cover" style="background:#28b661 url(assets/img/curve-1.svg)no-repeat"> */}
    <section class="bg-cover" style={{backgroundImage: `url(${bg})`}}>
				<div class="container">
					
					<div class="row justify-content-center">
						<div class="col-xl-5 col-lg-7 col-md-9 col-sm-12">
							<div class="sec_title position-relative text-center mb-5">
								<h6 class="ft-bold">Current Openings</h6>
								<h2 class="theme-cl">We Have Worked with 10,000+ Trusted Companies</h2>
							</div>
						</div>
					</div>
					
					<div class="row justify-content-center">
						<div class="col-xl-10 col-lg-11 col-md-12 col-sm-12">
							<div class="row justify-content-center">
								<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
									<div class="cats-wrap text-left">
										<a href="job-search-v1-1.html" class="cats-box rounded bg-white d-flex align-items-center px-2 py-3">
											<div class="text-center"><img src={cimg1} class="img-fluid" width="55" alt=""/></div>
											<div class="cats-box-caption px-2">
												<h4 class="fs-md mb-0 ft-medium">Web Designing</h4>
												<span class="text-muted">302 Jobs</span>
											</div>
										</a>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
									<div class="cats-wrap text-left">
										<a href="job-search-v1-1.html" class="cats-box rounded bg-white d-flex align-items-center px-2 py-3">
											<div class="text-center"><img src={cimg2} class="img-fluid" width="55" alt=""/></div>
											<div class="cats-box-caption px-2">
												<h4 class="fs-md mb-0 ft-medium">Web Designing</h4>
												<span class="text-muted">302 Jobs</span>
											</div>
										</a>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
									<div class="cats-wrap text-left">
										<a href="job-search-v1-1.html" class="cats-box rounded bg-white d-flex align-items-center px-2 py-3">
											<div class="text-center"><img src={cimg3} class="img-fluid" width="55" alt=""/></div>
											<div class="cats-box-caption px-2">
												<h4 class="fs-md mb-0 ft-medium">Web Designing</h4>
												<span class="text-muted">302 Jobs</span>
											</div>
										</a>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
									<div class="cats-wrap text-left">
										<a href="job-search-v1-1.html" class="cats-box rounded bg-white d-flex align-items-center px-2 py-3">
											<div class="text-center"><img src={cimg4} class="img-fluid" width="55" alt=""/></div>
											<div class="cats-box-caption px-2">
												<h4 class="fs-md mb-0 ft-medium">Web Designing</h4>
												<span class="text-muted">302 Jobs</span>
											</div>
										</a>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
									<div class="cats-wrap text-left">
										<a href="job-search-v1-1.html" class="cats-box rounded bg-white d-flex align-items-center px-2 py-3">
											<div class="text-center"><img src={cimg5} width="55" alt=""/></div>
											<div class="cats-box-caption px-2">
												<h4 class="fs-md mb-0 ft-medium">Web Designing</h4>
												<span class="text-muted">302 Jobs</span>
											</div>
										</a>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
									<div class="cats-wrap text-left">
										<a href="job-search-v1-1.html" class="cats-box rounded bg-white d-flex align-items-center px-2 py-3">
											<div class="text-center"><img src={cimg6} class="img-fluid" width="55" alt=""/></div>
											<div class="cats-box-caption px-2">
												<h4 class="fs-md mb-0 ft-medium">Web Designing</h4>
												<span class="text-muted">302 Jobs</span>
											</div>
										</a>
									</div>
								</div>
								<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
									<div class="cats-wrap text-left">
										<a href="job-search-v1-1.html" class="cats-box rounded bg-white d-flex align-items-center px-2 py-3">
											<div class="text-center"><img src={cimg7} class="img-fluid" width="55" alt=""/></div>
											<div class="cats-box-caption px-2">
												<h4 class="fs-md mb-0 ft-medium">Web Designing</h4>
												<span class="text-muted">302 Jobs</span>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<div class="ht-50"></div>
			</section>


    </> );
}

export default Comp;