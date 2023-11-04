import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ItemContainer({ item, template }) {
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);

	const isItemValid = item && item.link;
	const isTemplateValid = template && template.link;

	const handleItemClick = () => {
		if (isItemValid) {
			navigate(`/${item.link}`);
		} else if (isTemplateValid) {
			navigate(`/${template.link}`);
		}
	};

	return (
		<div
			className="item-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleItemClick}
			style={{
				backgroundImage: item
					? `url(${item.image})`
					: template
					? `url(${template.image})`
					: "none",
			}}
		>
			<div>
				{isHovered && item && <p>{item.title}</p>}
				{isHovered && template && <p>{template.title}</p>}
			</div>
		</div>
	);
}

export default ItemContainer;
