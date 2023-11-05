import React, { useState } from "react";
import image1 from "../../media/webshop.png";
import image2 from "../../media/webshop.png";
import image3 from "../../media/webshop.png";

function ItemContainer({ item, template, index }) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	const isItemValid = item && item.link;
	const isTemplateValid = template && template.link;

	const handleItemClick = () => {
		if (isItemValid) {
			window.location.href = item.link;
		} else if (isTemplateValid) {
			window.location.href = template.link;
		}
	};

	const portfolioImages = [image1, null, null];
	const templateImages = [null, null, null];

	console.log(index);

	return (
		<div
			className="item-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onTouchStart={handleMouseEnter}
			onTouchEnd={handleMouseLeave}
			onClick={handleItemClick}
		>
			<div
				className="item-inner-container"
				style={{
					backgroundImage: item
						? `url(${portfolioImages[index]})`
						: template
						? `url(${templateImages[index]})`
						: "none",
					backgroundSize: "cover",
					backgroundPosition: " top ",
					backgroundRepeat: "no-repeat",
					filter: isHovered ? "blur(0px)" : "blur(0.6px)",
				}}
			>
				{isHovered && item && (
					<div className="item-hover">
						<p className="item-hover-p">{item.title}</p>
					</div>
				)}
				{isHovered && template && (
					<div className="item-hover">
						<p className="item-hover-p">{template.title}</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default ItemContainer;
