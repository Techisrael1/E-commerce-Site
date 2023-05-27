import React from "react";
import {
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
	return (
		<div>
			<footer className="boxItems">
				<div className="container flex">
					<p>
						Cartsy Medicine - All right reserved - Designed &
						Developed by Dev 'Rael.
					</p>
					<div className="social">
						<BsFacebook className="icon" />
						<AiFillInstagram
							className="icon"
						/>
						<AiFillTwitterCircle
							className="icon"
						/>
						<AiFillLinkedin className="icon" />
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
