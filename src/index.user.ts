import { SUBREDDIT_PATH } from "./utils/constants";
import { injectEmbed } from "./utils/inject-embed";
import { injectLink } from "./utils/inject-link";

const darkMode: boolean = document.querySelector("body.res-nightmode") !== null;
const listingPage: boolean = document.querySelector("body.listing-page") !== null;

const lowercasePath: string = location.pathname.toLowerCase();
const subredditPath: boolean = lowercasePath === SUBREDDIT_PATH || lowercasePath === SUBREDDIT_PATH + "/";

const createSubredditButton: HTMLDivElement = document.querySelector("div.sidebox.create");

if (listingPage && subredditPath) {
	injectEmbed(darkMode);
} else if (createSubredditButton !== null) {
	injectLink(createSubredditButton.parentElement);
}
