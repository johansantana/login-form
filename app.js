const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

// Función hacer visible input contraseña
togglePassword.addEventListener("click", function (e) {
	const type = password.getAttribute("type") === "password" ? "text" : "password";
	password.setAttribute("type", type);
	this.classList.toggle("fa-lock");
	this.classList.toggle("fa-unlock");
});

const email = document.querySelector("#email");

// Función añadir linea de foco en input
const addOutline = (input) => {
	const inputContainer = input.parentElement;
	input.addEventListener("focus", function (e) {
		inputContainer.classList.toggle("outline");
	});

	input.addEventListener("blur", function (e) {
		inputContainer.classList.toggle("outline");
	});
};

addOutline(email);
addOutline(password);

const language = document.querySelector("#language");

// Función para cambiar el idioma
language.addEventListener("change", function (e) {
	if (language.value == "español") {
		location.href = "index.html";
	} else {
		location.href = "index-en.html";
	}
});
