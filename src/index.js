// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach(contact => {

  const newThreeContacts = document.createElement('tr')
  newThreeContacts.innerHTML =
    `<td>
        <img src="${contact.pictureUrl}" />
      </td>
      <td> ${contact.name} </td>
      <td> ${contact.popularity.toFixed(2)} </td>
      <td>
        <button class="btn-delete">Delete</button>
      </td>
      <td>
        <button class="btn-like">
          <img src="./images/icon.png" alt="like" />
        </button>
      </td>`;

  tableBody.appendChild(newThreeContacts);


  // ITERATION 2 - Delete Buttons 
  const deleteButton = newThreeContacts.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    newThreeContacts.remove();
  });




  // ITERATION 3 - Like Buttons
  const likeButton = newThreeContacts.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("selected");
  });

});





// Bonus: ITERATION 4 - Add Random Contacts

buttonAddRandom.addEventListener("click", () => {

  // Generamos un indice aleatorio para obtener los contactos
  const randomIndex = Math.floor(Math.random() * contacts.length);

  // Extraemos el contacto aleatorio con el método splice()
  const splicedArr = contacts.splice(randomIndex, 1);

  const randomContact = splicedArr[0];

  // Creamos nueva fila para el contacto aleatorio
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td> ${randomContact.name} </td>
    <td> ${randomContact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Agregamos la nueva fila al ceurpo de la tabla
  tableBody.appendChild(exampleRow);

});








