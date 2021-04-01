import { SUBREDDIT, SUBREDDIT_PATH } from "./constants";

import { addMarker } from "./add-marker";

/**
 * Injects a link button before an element.
 * @param afterElement The element that should come after the injected element.
 */
export function injectLink(afterElement: HTMLElement): void {
	const spacer = document.createElement("div");
	spacer.classList.add("spacer");
	addMarker(spacer, "spacer");

	const moreLink = document.createElement("div");
	moreLink.classList.add("morelink");
	addMarker(spacer, "morelink");

	const link = document.createElement("a");
	link.textContent = "Participate in r/" + SUBREDDIT;
	link.href = SUBREDDIT_PATH;
	addMarker(spacer, "link");

	const nub = document.createElement("div");
	nub.classList.add("nub");
	addMarker(nub, "nub");

	moreLink.append(link);
	moreLink.append(nub);
	spacer.append(moreLink);
	afterElement.before(spacer);
}
