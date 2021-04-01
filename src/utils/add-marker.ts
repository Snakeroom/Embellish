import { VERSION } from "./constants";

/**
 * Adds a class and dataset marker to indicate that the provided element is owend by Embellish.
 * @param element the element to mark
 * @param type the type of element provided
 */
export function addMarker(element: HTMLElement, type: string): void {
	element.classList.add("embellish-" + type);
	element.dataset.embellishVersion = VERSION;
}
