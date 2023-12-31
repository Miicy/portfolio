import image1 from "../media/images/webshop.png";
import image2 from "../media/images/news.png";
import template1 from "../media/images/rpg.png";
import template2 from "../media/images/techwear.png";

export function useGetImages(item, template, index) {
	const portfolioImages = [image2, image1, null];
	const templateImages = [template1, template2, null];
	if (item) {
		return portfolioImages[index] || "none";
	} else if (template) {
		return templateImages[index] || "none";
	}
	return "none";
}
