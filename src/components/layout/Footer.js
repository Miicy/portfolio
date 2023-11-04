import { Divider} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
	const navigate = useNavigate();
	const [isLinkCopied, setIsLinkCopied] = useState(false);
	const [isLinkCopied2, setIsLinkCopied2] = useState(false);
	const [isLinkCopied3, setIsLinkCopied3] = useState(false);

	const copyToClipboard = (text) => {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("copy");
		document.body.removeChild(textArea);
		if(text=== "milica.pantelic.14@gmail.com"){
			setIsLinkCopied(true);
		}else if(text=== "+381 691408997"){
			setIsLinkCopied2(true);
		}else{
			setIsLinkCopied3(true);
		}
		
	  };
	
	  const handleCopyEmail = () => {
		copyToClipboard("milica.pantelic.14@gmail.com");
		setTimeout(() => {
		  setIsLinkCopied(false);
		}, 2000);
	  };
	
	  const handleCopyPhone = () => {
		copyToClipboard("+381 691408997");
		setTimeout(() => {
		  setIsLinkCopied2(false);
		}, 2000);
	  };
	
	  const handleCopyDiscord = () => {
		copyToClipboard("Miicy"); 
		setTimeout(() => {
		  setIsLinkCopied3(false);
		}, 2000);
	  };
	return (
		<div className="footer">
			<div className="inner-footer">
				<div className="links" onClick={() => navigate("/gitlink")}>
					Git: Miicy
				</div>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ border: "0.5px solid black" }}
				/>
				<div className="links" onClick={handleCopyDiscord}>
					Discord: Miicy
					{isLinkCopied3 && <div className="copied"> Discord Copied!</div>}
				</div>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ border: "0.5px solid black" }}
				/>
				<div className="links" onClick={handleCopyPhone}>
					Phone: +381 691408997
					{isLinkCopied2 && <div className="copied"> Phone Copied!</div>}
				</div>
				<Divider
					orientation="vertical"
					flexItem
					sx={{ border: "0.5px solid black" }}
				/>
				<div className="links" onClick={handleCopyEmail}  style={{ textDecoration: 'none'}}>
					Gmail: milica.pantelic.14@gmail.com
					{isLinkCopied && <div className="copied"> Email Copied!</div>}
				</div>
			</div>
		</div>
	);
}

export default Footer;
