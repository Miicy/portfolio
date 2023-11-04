import { Divider } from "@mui/material";
import React, { useState } from "react";

function Footer() {
	const [isLinkCopied, setIsLinkCopied] = useState({
		1: false,
		2: false,
		3: false,
		null: false,
	});

	const copyToClipboard = (text, key) => {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("copy");
		document.body.removeChild(textArea);
		setIsLinkCopied({ ...isLinkCopied, [key]: true });

		setTimeout(() => {
			setIsLinkCopied({ ...isLinkCopied, [key]: false });
		}, 2000);
	};

	const handleCopy = (text, key) => {
		copyToClipboard(text, key);
	};

	const handleOpenLink = (url) => {
		window.location.href = url; 
	  };

	return (
		<div className="footer">
			<div className="inner-footer">
				{[
					{ text: "Git: Miicy", key: null, url: "https://github.com/Miicy" },
					{ text: "Discord: Miicy", key: 3 },
					{ text: "Phone: +381 691408997", key: 2 },
					{ text: "Gmail: milica.pantelic.14@gmail.com", key: 1 },
				].map((item, index) => (
					<React.Fragment key={index}>
						{index > 0 && (
							<Divider
								orientation="vertical"
								flexItem
								sx={{ border: "0.5px solid black" }}
							/>
						)}
						<div
							className="links"
							onClick={() => {
								if (item.url) {
									handleOpenLink(item.url);
								} else {
									handleCopy(item.text, item.key);
								}
							}}
						>
							{item.text}
							{isLinkCopied[item.key] && <div className="copied"> Copied!</div>}
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default Footer;
