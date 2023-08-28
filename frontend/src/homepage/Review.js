// import rimg1 from "../img/team-1.jpg";
// import rimg2 from "../img/team-2.jpg";

// import Fade from 'react-reveal/Fade'; 
// import styled, { css } from 'styled-components';

// // import makeCarousel from 'react-reveal/makeCarousel';

// import Slide from 'react-reveal/Slide';
// import { render } from "@testing-library/react";

// const width = '1000px', height='300px';
// const Container = styled.div`
//   border: 1px solid green;
//   position: relative;
//   overflow: hidden;
//   width: ${width};
//   height: ${height};
// `;
// const Arrow = styled.div`
//   text-shadow: 1px 1px 1px #fff;
//   z-index: 100;
//   line-height: ${height};
//   text-align: center;
//   position: absolute;
//   top: 0;
//   width: 10%;
//   font-size: 3em;
//   cursor: pointer;
//   user-select: none;
//   ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
// `;
// const CarouselUI = ({ position, handleClick, children }) => (
//   <Container>
//       {children}
//       <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
//       <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
//   </Container>
// );
// const Carousel = makeCarousel(CarouselUI);
// // render(
// // 	<Fade bottom delay={100}>
// // 	<Carousel>
// //     <Slide right>
// // 	<div class="single_review">
// // 									<div class="sng_rev_thumb"><figure><img src={rimg1} class="img-fluid circle" alt=""/></figure></div>
// // 									<div class="sng_rev_caption text-center">
// // 										<div class="rev_desc mb-4">
// // 											<p class="fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
// // 										</div>
// // 										<div class="rev_author">
// // 											<h4 class="mb-0">Mark Jevenue</h4>
// // 											<span class="fs-sm">CEO of Addle</span>
// // 										</div>
// // 									</div>
// // 								</div>
// //     </Slide>
// //     <Slide right>
// // 	<div class="single_review">
// // 									<div class="sng_rev_thumb"><figure><img src={rimg2} class="img-fluid circle" alt=""/></figure></div>
// // 									<div class="sng_rev_caption text-center">
// // 										<div class="rev_desc mb-4">
// // 											<p class="fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
// // 										</div>
// // 										<div class="rev_author">
// // 											<h4 class="mb-0">Henna Bajaj</h4>
// // 											<span class="fs-sm">Aqua Founder</span>
// // 										</div>
// // 									</div>
// // 								</div>
// //     </Slide>
// //   </Carousel>
// //   </Fade>
// // )


// function Rev() {
// 	const Carousel = makeCarousel(CarouselUI);
//     return ( <>
// <Fade bottom delay={100}>
//     {/* <section class="middle">
// 				<div class="container">
				
// 					<div class="row justify-content-center">
// 						<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
// 							<div class="sec_title position-relative text-center mb-5">
// 								<h6 class="text-muted mb-0">Our Reviews</h6>
// 								<h2 class="ft-bold">What Our Customer <span class="theme-cl">Saying</span></h2>
// 							</div>
// 						</div>
// 					</div>
					
// 					<div class="row justify-content-center">
// 						<div class="col-xl-9 col-lg-10 col-md-12 col-sm-12">
// 							<div class="reviews-slide px-3">
	
// 								<div class="single_review">
// 									<div class="sng_rev_thumb"><figure><img src={rimg1} class="img-fluid circle" alt=""/></figure></div>
// 									<div class="sng_rev_caption text-center">
// 										<div class="rev_desc mb-4">
// 											<p class="fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
// 										</div>
// 										<div class="rev_author">
// 											<h4 class="mb-0">Mark Jevenue</h4>
// 											<span class="fs-sm">CEO of Addle</span>
// 										</div>
// 									</div>
// 								</div>
		
// 								<div class="single_review">
// 									<div class="sng_rev_thumb"><figure><img src={rimg2} class="img-fluid circle" alt=""/></figure></div>
// 									<div class="sng_rev_caption text-center">
// 										<div class="rev_desc mb-4">
// 											<p class="fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
// 										</div>
// 										<div class="rev_author">
// 											<h4 class="mb-0">Henna Bajaj</h4>
// 											<span class="fs-sm">Aqua Founder</span>
// 										</div>
// 									</div>
// 								</div>

		
								
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</section> */}
// 			<Carousel>
// 			<Slide right>
// 	<div class="single_review">
// 									<div class="sng_rev_thumb"><figure><img src={rimg1} class="img-fluid circle" alt=""/></figure></div>
// 									<div class="sng_rev_caption text-center">
// 										<div class="rev_desc mb-4">
// 											<p class="fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
// 										</div>
// 										<div class="rev_author">
// 											<h4 class="mb-0">Mark Jevenue</h4>
// 											<span class="fs-sm">CEO of Addle</span>
// 										</div>
// 									</div>
// 								</div>
//     </Slide>
//     <Slide right>
// 	<div class="single_review">
// 									<div class="sng_rev_thumb"><figure><img src={rimg2} class="img-fluid circle" alt=""/></figure></div>
// 									<div class="sng_rev_caption text-center">
// 										<div class="rev_desc mb-4">
// 											<p class="fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
// 										</div>
// 										<div class="rev_author">
// 											<h4 class="mb-0">Henna Bajaj</h4>
// 											<span class="fs-sm">Aqua Founder</span>
// 										</div>
// 									</div>
// 								</div>
//     </Slide>
// 			</Carousel>
// 			<Carousel/>
//             </Fade>
			
//     </> );
// }

// export default Rev;