import React, { useState } from "react";
// import image from "../../media/webshop.png";

function ItemContainer({ item, template }) {
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

	return (
		<div
			className="item-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleItemClick}
		>
			<div
				className="item-inner-container"
				style={{
					backgroundImage: item
						? `url(${item.image})`
						: template
						? `url(${template.image})`
						: "none",
					backgroundSize: "cover",
					backgroundPosition: " top ",
					backgroundRepeat: "no-repeat",
					filter: isHovered ? "blur(0px)" : "blur(0.5px)",
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
