import "../../pages/pages.css";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { Divider, useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import { setAnimationFalse } from "../../store/reducers/animationSlice";
import MenuIcon from "@mui/icons-material/Menu";

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

	function toggleMenu() {
		setMenuOpen(!isMenuOpen);
	}

	const handleScroll = (scrollPosition) => {
		scrollToPosition(scrollPosition);
		dispatch(setAnimationFalse(false));
	  };
	
	  const headerLinks = [
		{ label: "About me", scrollPosition: isScreenSmall || isMobile ? 710 : 1050 },
		{ label: "Portfolio", scrollPosition: isScreenSmall || isMobile ? 1550 : 2000 },
		{ label: "Contact", scrollPosition: isScreenSmall || isMobile ? 2000 : 2400 },
	  ];

	const dividerStyles = { border: "0.5px solid black" };

	return (
		<div className="header">
		<div className="heading-left-container">
		  <p className="heading">Milica Pantelic</p>
		  <p className="heading-middle">Web developer</p>
		</div>
		<div className="heading-right-container">
		  {isScreenSmall || isMobile ? (
			<>
			  <MenuIcon sx={{ cursor: "pointer", fontSize: "2em" }} onClick={toggleMenu} />
			  {isMenuOpen && (
				<div className="heading-right-menu">
				  {headerLinks.map((link, index) => (
					<React.Fragment key={index}>
					  <p className="links-menu" onClick={() => handleScroll(link.scrollPosition)}>
						{link.label}
					  </p>
					  {index < headerLinks.length - 1 && (
						<Divider orientation="vertical" flexItem sx={dividerStyles} />
					  )}
					</React.Fragment>
				  ))}
				</div>
			  )}
			</>
		  ) : (
			headerLinks.map((link, index) => (
			  <React.Fragment key={index}>
				<p className="links" onClick={() => handleScroll(link.scrollPosition)}>
				  {link.label}
				</p>
				{index < headerLinks.length - 1 && (
				  <Divider orientation="vertical" flexItem sx={dividerStyles} />
				)}
			  </React.Fragment>
			))
		  )}
		</div>
	  </div>
	);
}

export default Header;
