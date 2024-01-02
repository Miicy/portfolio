import "./layout.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";
import { selectAnimation } from "../../store/reducers/animationSlice";
import { ReactComponent as DividerAbout } from "../../media/divider.svg";
import { ReactComponent as DividerAboutUpside } from "../../media/divider-upside.svg";
import text from "../../media/text.json";
import wordFile from "../../media/CV-English.pdf";

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
			<div className="about-me-inner">
				<DividerAbout className="about-me-divider" />
				<div className="about-me-p-container">
					<p className="heading-smaller">- ABOUT ME -</p>
					<p className="about-me-p">
						{textArray.map((line, index) => (
							<p key={index}>{line}</p>
						))}
					</p>
					<a href={wordFile} download="Resume.pdf" className="links resume">
						Download Resume
					</a>
				</div>
				<DividerAboutUpside className="about-me-divider"/>
			</div>
		</div>
	);
}

export default AboutMe;
