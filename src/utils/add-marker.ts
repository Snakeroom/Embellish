import { VERSION } from "./constants";

export function addMarker(element: HTMLElement, type: string): void {
	element.classList.add("embellish-" + type);
	element.dataset.embellishVersion = VERSION;
}
