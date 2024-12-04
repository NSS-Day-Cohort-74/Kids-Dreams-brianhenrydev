import { getChildren, getCelebrities } from "./database.js";

const kids = getChildren();
const celebrities = getCelebrities();

const findCelebrityMatch = (kidObject, celebrityArray) =>
	celebrityArray.find((celebrity) => celebrity.id === kidObject.celebrityId);

export const Pairings = () =>
	`
    <ul>
      ${kids
				.map((kid) => {
					const kidsStar = findCelebrityMatch(kid, celebrities);
					return `
          <li>
            ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
          </li>
        `;
				})
				.join("")}
    </ul>
  `;
