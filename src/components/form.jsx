import React from "react";
import "../css/form.css";
import okEmoji from "../images/ok emoji 3.svg";
import badEmoji from "../images/bad emoji 4.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const form = ({ onBack, emoji }) => {
	const noBack = (event) => {
		event.stopPropagation();
	};
	return (
		<div className="Form" onClick={onBack}>
			<div className="container">
				<div className="form-main-section" onClick={noBack}>
					<div className="row emoji-with-right-section mb-4">
						<div className="col-md-3">
							<div className="bad-review-emoji-div">
								<img
									src={emoji === "ok" ? okEmoji : badEmoji}
									className="bad-review-emoji"
									alt=""
								/>
							</div>
						</div>
						<div className="col-md-9">
							<div className="emoji-right-section pt-4">
								<h5 className="">Sorry you had a bad experience</h5>
								<p>
									Would you be willing to share a few details about your bad
									experience?
								</p>
							</div>
						</div>
					</div>
					{/* first row ends */}

					<p className="share-feedback-text">
						Share your feedback with the owner
					</p>
					<textarea
						className="bad-review-textarea form-control"
						name=""
						id=""
						placeholder="Provide your feedback here ..."></textarea>
					<br />
					<p className="text-bold share-feedback-text">Your email</p>

					<input
						className="form-control"
						type="text"
						placeholder="person@email.com"
					/>

					<br />
					<hr />
					<br />
					<div className="row submit-form-back-btn">
						<div className="col-3">
							<button className="borderless-btn" onClick={onBack}>
								Back
							</button>
						</div>
						<div className="col-6 d-flex justify-content-center">
							<button className="send-btn">Send</button>
						</div>
						<div className="col-3 d-flex justify-content-end">
							<button className="borderless-btn">Go to Google</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default form;
