import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { isMobile } from "react-device-detect";
import { useSelector } from "react-redux";
import { selectAnimation } from "../../store/reducers/animationSlice";
import itemData from "../../media/portfolio.json";
import templateData from "../../media/templates.json";
import ItemContainer from "../common/ItemContainer";


function Portfolio() {
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
		const scrollToShowAboutMe = 1200;
		const aboutMeContainer = document.getElementById("portfolio-container");
		if(isScreenSmall || isMobile || !animation) {
			aboutMeContainer.style.display = "flex";
		}else{
		if (aboutMeContainer) {
			if (scrollPosition >= scrollToShowAboutMe) {
				aboutMeContainer.style.display = "flex";
			} else {
				aboutMeContainer.style.display = "none";
			}
		}}
	}, [scrollPosition,animation,isScreenSmall]);


	return (
		<div className="portfolio" id="portfolio-container">
			<div className="heading-smaller"> - RECENT WORK -</div>
			<div className={itemData.items.length <= 2 ? 'inner-portfolio-less' : 'inner-portfolio'}>
				{itemData.items.map((item, index) => (
					<ItemContainer key={index} item={item} index={index}/>
				))}
			</div>
			<div className="heading-smaller"> - PAGE TEMPLATES -</div>
			<div className={templateData.templates.length <= 2 ? 'inner-portfolio-less' : 'inner-portfolio'}>
				{templateData.templates.map((template, index) => (
					<ItemContainer key={index} template={template} index={index}/>
				))}
			</div>
		</div>
	);
}

export default Portfolio;
