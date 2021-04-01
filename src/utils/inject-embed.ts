import { API_BASE } from "./constants";
import { addMarker } from "./add-marker";

export function injectEmbed(nightMode: boolean = false): void {
	const content = document.querySelector("div.content");
	if (content !== null) {
		const embed = document.createElement("iframe");
		embed.src = API_BASE + "/embed?platform=embellish&nightmode=" + (nightMode ? 1 : 0);
		addMarker(embed, "embed");

		embed.style.width = "calc(100% - 310px)";
		embed.style.height = "350px";

		embed.style.border = "none";
		embed.style.borderRadius = "8px";
		embed.style.backgroundColor = nightMode ? "#1A1A1B" : "#EEE";
		embed.style.marginBottom = "8px";

		const embedContainer = document.createElement("div");
		addMarker(embedContainer, "embed-container");

		embedContainer.append(embed);
		content.prepend(embedContainer);
	}
}
