import image1 from "./images/excellent-emoji-1.png";
import image2 from "./images/good emoji 2.svg";
import image3 from "./images/ok emoji 3.svg";
import image4 from "./images/bad emoji 4.svg";
import companyLogo from "./images/company-logo.png";
import likeImg from "./images/like.svg";
import { useState } from "react";
import Form from "./components/form.jsx";

function App() {
	const [clicked, setClicked] = useState(null);
	const [exBtnShow, setExBtnShow] = useState(false);
	const [finalSubmit, setFinalSubmit] = useState(false);
	const [reviewFormShow, setReviewFormShow] = useState(false);
	const [emoji, setEmoji] = useState(null);
	document.title = "Online Review System";

	const likeImgVar = <img src={likeImg} className="like-img" alt="" />;

	return (
		<>
			{reviewFormShow === false ? (
				<div className="App">
					<div className="container">
						<div className="main-section">
							<div className="row logo-row">
								<img src={companyLogo} className="company-logo" alt="" />
							</div>
							<div className="row experience-text-div-row">
								<div className="experience-text-div">
									<h5 className="experience-text">
										How was your experience with Freelancing Aid ?
									</h5>
								</div>
								<p className="text-center">
									Your opinion matters to us. Thank you for your feedback!
								</p>
							</div>
							<div className="row">
								<div className="emoji-section">
									<div
										className="emoji-with-text"
										onClick={() => setExBtnShow(!exBtnShow)}>
										<div className="single-emoji-div">
											<img src={image1} className="emoji-image" alt="" />
											<br />
										</div>
										<h5>Excellent</h5>
									</div>

									<div
										className="emoji-with-text"
										onClick={() => setExBtnShow(!exBtnShow)}>
										<div className="single-emoji-div">
											<img src={image2} className="emoji-image" alt="" />
										</div>
										<h5>Good</h5>
									</div>
									<div
										className="emoji-with-text"
										onClick={() => {
											setReviewFormShow(true);
											setEmoji("ok");
										}}>
										<div className="single-emoji-div">
											<img src={image3} className="emoji-image" alt="" />
										</div>
										<h5>OK</h5>
									</div>
									<div
										className="emoji-with-text"
										onClick={() => {
											setReviewFormShow(true);
											setEmoji("bad");
										}}>
										<div className="single-emoji-div">
											<img src={image4} className="emoji-image" alt="" />
										</div>
										<h5>Bad</h5>
									</div>
								</div>
							</div>
							{/* emoji row end */}

							{/* experience button start here */}
							{exBtnShow && (
								<div className="row experience-btn-row">
									<hr></hr>
									<h6>What did you like the most?</h6>
									<div className="experience-btn-section">
										<button
											onClick={() => {
												setClicked("btn1");
												setFinalSubmit(true);
											}}
											className={`btn btn-outline-primary user-ex-btn  ${
												clicked === "btn1" ? "clicked" : ""
											} `}>
											{" "}
											{clicked === "btn1" ? likeImgVar : ""} Friendly
										</button>
										<button
											onClick={() => {
												setClicked("btn2");
												setFinalSubmit(true);
											}}
											className={`btn btn-outline-primary user-ex-btn  ${
												clicked === "btn2" ? "clicked" : ""
											} `}>
											{" "}
											{clicked === "btn2" ? likeImgVar : ""}Professional
										</button>
										<button
											onClick={() => {
												setClicked("btn3");
												setFinalSubmit(true);
											}}
											className={`btn btn-outline-primary user-ex-btn  ${
												clicked === "btn3" ? "clicked" : ""
											} `}>
											{" "}
											{clicked === "btn3" ? likeImgVar : ""}Knowledgeable
										</button>
										<button
											onClick={() => {
												setClicked("btn4");
												setFinalSubmit(true);
											}}
											className={`btn btn-outline-primary user-ex-btn  ${
												clicked === "btn4" ? "clicked" : ""
											} `}>
											{" "}
											{clicked === "btn4" ? likeImgVar : ""}Responsive
										</button>
										<button
											onClick={() => {
												setClicked("btn5");
												setFinalSubmit(true);
											}}
											className={`btn btn-outline-primary user-ex-btn  ${
												clicked === "btn5" ? "clicked" : ""
											} `}>
											{" "}
											{clicked === "btn5" ? likeImgVar : ""}Consistent
										</button>
										<button
											onClick={() => {
												setClicked("btn6");
												setFinalSubmit(true);
											}}
											className={`btn btn-outline-primary user-ex-btn-last  ${
												clicked === "btn6" ? "clicked" : ""
											} `}>
											{" "}
											{clicked === "btn6" ? likeImgVar : ""}Everything
										</button>
									</div>
								</div>
							)}
							{/* review button section end  */}

							{/* final submit section starts */}
							{exBtnShow && finalSubmit && (
								<div className="row mt-4">
									<div className="submit-section ps-5 pe-5">
										<hr></hr>
										<p className="fw-bold">
											Would you be willing to leave a review on Google?
										</p>
										<p>Tap it to make edits if you'd like.</p>
										<textarea className="p-3 reviewTextBox">
											"Freelancing Aid" amazing to work with, providing
											top-notch care and attention they offered, making the
											buying process seamless and enjoyable from start to
											finish, we had a wonderful experience.
										</textarea>
										<button className="btn btn-primary mt-3 final-submit-btn mb-4">
											Click to Copy and Go to Google
										</button>
									</div>
								</div>
							)}
							{/* final submit section end  */}

							<h6 className="bottom text-center mt-3">Powered by MAS</h6>
						</div>
						{/* main section end */}
					</div>
				</div>
			) : (
				<Form onBack={() => setReviewFormShow(false)} emoji={emoji} />
			)}
		</>
	);
}

export default App;
