import { getChildren } from "./database.js";

const children = getChildren();

document.addEventListener(
	"click",
	({
		target: {
			innerText,
			dataset: { wish, type },
		},
	}) => type === "child" && window.alert(`${innerText}'s wish is ${wish}`),
);

export const Kids = () =>
	`"<ol>"

	${children
		.map(
			(kid) =>
				`<li data-id="${kid.id}"
                data-type="child" 
                data-wish="${kid.wish}"
                >${kid.name}</li>`,
		)
		.join("")} </ol>`;
