import { RequestForm } from "./RequestForm.js";
import { Crafters } from "./Crafters.js";


/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/

export const GnomeMercy = () => {
  return `
    <h1>Gnome Mercy</h1>

      ${RequestForm()}
      ${Crafters()}
    `;
};
