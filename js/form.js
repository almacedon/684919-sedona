var button = document.querySelector(".searching-button");
var form = document.querySelector(".searching-form");
var arrival = form.querySelector(".arrival-date");
var departure = form.querySelector(".departure-date");
var adults = form.querySelector(".adults-quantity");
var children = form.querySelector(".children-quantity");
var storage = "";
var isStorageSupport = true;

form.classList.add("searching-form-hidden");

try {
	storage = localStorage.getItem("arrival");
} catch (err) {
	isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	form.classList.remove("searching-form-error")
	form.classList.toggle("searching-form-hidden");
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !departure.value || !adults.value || !children.value) {
		evt.preventDefault();
		form.classList.remove("searching-form-error");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("searching-form-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("arrivalDate", arrival.value);
			localStorage.setItem("departureDate", departure.value);
			localStorage.setItem("adults", adults.value);
			localStorage.setItem("children", children.value);
		}
	}
});