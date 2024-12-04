import { getCelebrities } from "./database.js";

const celebrities = getCelebrities();

document.addEventListener(
	"click",
	({
		target: {
			innerText,
			dataset: { sport, type },
		},
	}) => type === "celebrity" && window.alert(`${innerText} is a ${sport} star`),
);

export const Celebrities = () =>
	`
    <ol>
      ${celebrities
				.map(
					(celebrity) => `
          <li 
              data-id="${celebrity.id}" 
              data-type="celebrity"
              data-sport="${celebrity.sport}"
              id="star--${celebrity.id}">
              ${celebrity.name}
          </li>
        `,
				)
				.join("")}
    </ol>
  `;
