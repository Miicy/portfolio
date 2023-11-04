import React, { useEffect } from "react";
import { ReactComponent as DividerAbout } from "../../media/divider.svg";
import { ReactComponent as DividerAboutUpside } from "../../media/divider-upside.svg";
import text from "../../media/text.json";
import wordFile from "../../media/CV.pdf";
import { useState } from "react";
import "./layout.css";
import { isMobile } from "react-device-detect";
import { useMediaQuery } from "@mui/material";
import { selectAnimation } from "../../store/reducers/animationSlice";
import { useSelector } from "react-redux";

function AboutMe() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const isScreenSmall = useMediaQuery("(max-width: 400px)");
	const animation = useSelector(selectAnimation);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const scrollToShowAboutMe = 200;
		const aboutMeContainer = document.getElementById("about-me-container");
		if (isScreenSmall || isMobile || !animation) {
			aboutMeContainer.style.display = "flex";
		} else {
			if (aboutMeContainer) {
				if (scrollPosition >= scrollToShowAboutMe) {
					aboutMeContainer.style.display = "flex";
				} else {
					aboutMeContainer.style.display = "none";
				}
			}
		}
	}, [scrollPosition, animation, isScreenSmall]);

	const textArray = text.text.split("\n");

	return (
		<div id="about-me-container" className="about-me-container">
			<div className="about-me">
				<DividerAbout className="divider" />
				<div className="about-me-content-container">
					<p className="heading-smaller">- ABOUT ME -</p>
					<p className="about-me-p">
						{textArray.map((line, index) => (
							<p className="about-me-p" key={index}>
								{line}
							</p>
						))}
					</p>
					<a href={wordFile} download="Resume.pdf" className="links resume">
						Download Resume
					</a>
				</div>
				<DividerAboutUpside className="divider" />
			</div>
		</div>
	);
}

export default AboutMe;
