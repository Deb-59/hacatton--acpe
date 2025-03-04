document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const messageItem = document.createElement("div");
    messageItem.classList.add("p-4", "bg-gray-200", "rounded");
    messageItem.innerHTML = `
        <h4 class="font-bold">${name} (${email})</h4>
        <p>${message}</p>
    `;

    document.getElementById("messagesList").appendChild(messageItem);

    document.getElementById("messageForm").reset();
  });

//-------------------------------------------------------------------------

document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const messageItem = document.createElement("div");
    messageItem.classList.add("p-4", "bg-gray-200", "rounded");
    messageItem.innerHTML = `
        <h4 class="font-bold">${name} (${email})</h4>
        <p>${message}</p>
    `;

    document.getElementById("messagesList").appendChild(messageItem);

    document.getElementById("messageForm").reset();
  });

//------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const inscriptionLink = document.querySelector('a[href="#inscription"]');
  const inscriptionSection = document.getElementById("inscription");
  const closeInscriptionButton = inscriptionSection.querySelector(
    'button[onclick="toggleInscriptionForm()"]'
  );

  inscriptionLink.addEventListener("click", function (event) {
    event.preventDefault();
    inscriptionSection.classList.remove("hidden");
  });

  closeInscriptionButton.addEventListener("click", function () {
    inscriptionSection.classList.add("hidden");
  });
});

function toggleInscriptionForm() {
  const inscriptionSection = document.getElementById("inscription");
  inscriptionSection.classList.toggle("hidden");
}
