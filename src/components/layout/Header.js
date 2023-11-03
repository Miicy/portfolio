import React, { useState } from "react";
import "../../pages/pages.css";
import { Divider, useMediaQuery } from "@mui/material";
import { isMobile } from "react-device-detect";
import MenuIcon from "@mui/icons-material/Menu";
import { setAnimationFalse } from "../../store/reducers/animationSlice";
import { useDispatch } from "react-redux";

function Header() {
	const isScreenSmall = useMediaQuery("(max-width: 400px)");
	const dispatch = useDispatch();

	function scrollToPosition(scrollPosition) {
		window.scrollTo({
			top: scrollPosition,
			behavior: "smooth",
		});
	}

	const [isMenuOpen, setMenuOpen] = useState(false);

	function menuClick() {
		setMenuOpen(!isMenuOpen);
	}

	function handleAboutMeClick() {
		let scrollPosition;

		if (isScreenSmall || isMobile) {
			scrollPosition = 400;
		} else {
			scrollPosition = 800;
		}

		scrollToPosition(scrollPosition);
	}

	function handlePortfolioClick() {
		let scrollPosition;

		if (isScreenSmall || isMobile) {
			scrollPosition = 1200;
		} else {
			scrollPosition = 1800;
		}

		scrollToPosition(scrollPosition);
		dispatch(setAnimationFalse(false));
	}

	function handleContactClick() {
		let scrollPosition;

		if (isScreenSmall || isMobile) {
			scrollPosition = 2000;
		} else {
			scrollPosition = 2000;
		}

		scrollToPosition(scrollPosition);
		dispatch(setAnimationFalse(false));
	}

	const dividerStyles = { border: "0.5px solid black" };

	return (
		<div className="header">
			<div className="heading-left-container">
				<p className="heading">Milica Pantelic</p>
				<p className="heading2">Web developer</p>
			</div>
			{isScreenSmall || isMobile ? (
				<div className="heading-right-container">
					<MenuIcon sx={{ cursor: "pointer" }} onClick={menuClick} />
					{isMenuOpen && (
						<div className="heading-right-menu">
							<p className="links-menu" onClick={handleAboutMeClick}>
								About me
							</p>
							<Divider orientation="vertical" flexItem sx={dividerStyles} />
							<p className="links-menu" onClick={handlePortfolioClick}>
								Portfolio
							</p>
							<Divider orientation="vertical" flexItem sx={dividerStyles} />
							<p className="links-menu" onClick={handleContactClick}>
								Contact
							</p>
						</div>
					)}
				</div>
			) : (
				<div className="heading-right-container">
					<p className="links" onClick={handleAboutMeClick}>
						About me
					</p>
					<Divider orientation="vertical" flexItem sx={dividerStyles} />
					<p className="links" onClick={handlePortfolioClick}>
						Portfolio
					</p>
					<Divider orientation="vertical" flexItem sx={dividerStyles} />
					<p className="links" onClick={handleContactClick}>
						Contact
					</p>
				</div>
			)}
		</div>
	);
}

export default Header;
