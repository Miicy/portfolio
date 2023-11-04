import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ItemContainer({ item, template }) {
	const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleItemClick = () => {
        if (item && item.link) {
            navigate(`/${item.link}`); 
          } else if (template && template.link) {
            navigate(`/${template.link}`); 
          }
        };

        
	return (
		<div
			className="item-container"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={handleItemClick}
            style={{
                backgroundImage: 
                item ? `url(${item.image})` : 
                template ? `url(${template.image})` : "none"
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
