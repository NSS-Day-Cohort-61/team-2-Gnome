/*
  Responsibility
    Generate HTML for the request form. When Submit button
    is clicked, POST a new request to the API.
*/

document.addEventListener("click", (clickEvt) => {
    if (clickEvt.target.id === "submitRequest") {
    }
});

export const RequestForm = () => {
    let html = `
    <div class="field flex column">

      <label class="label" for="name">Name</label>
      <input type="text" id="name" class="input">

      <label class="label" for="purpose">Purpose</label>
      <input type="text" id="purpose" class="input">

      <label class="label" for="type">Type</label>
      <select id="type" name="type">
        <option value="">Select a Type</option>
        <option value="1">Potion</option>
        <option value="2">Elixir</option>
      </select>

      <button class="button" id="submitRequest">Submit Request</button>
    </div>
    `;
    return html;
};
