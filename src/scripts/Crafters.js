/*
  Responsibility
    Generate HTML for the dropdown of crafters. When one is
    selected, update transient state.
*/

import { getData } from "./dataAccess.js";

export const Crafters = () => {
    const crafters = getData("crafters");

    // takes crafter and formats it into an option tag
    const formatCrafters = (crafter) => {
        return `<option value="${crafter.id}">${crafter.name}</option>`;
    };

    // makes all of the crafter dropdown HTML, calls format crafters function above
    return `
    <h3>Crafters</h3>
    <select id="crafter">
        <option value="0">--Choose A Crafter--</option>
        ${crafters.map((crafter) => formatCrafters(crafter))}
    </select>
  `;
};
