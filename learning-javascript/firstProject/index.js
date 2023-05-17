const select = document.getElementById("weather");
const paragraph = document.getElementById("weather-rec");

select.addEventListener("change", setWeather);

function setWeather() {
	const choice = select.value;
	alert("You chose " + choice + "!")
	if (choice === "sunny") {
		paragraph.innerText = "Bring your sunglasses with you!";
	}
	else if (choice === "rainy") {
		paragraph.innerText = "Bring an umbrella with you!"
	}
	else if (choice === "snowing") {
		paragraph.innerText = "Make sure you have boots!"
	}
	else if (choice === "overcast") {
		paragraph.innerText = "Maybe don't go to the beach..."
	}
	else if (choice === "hailing"){
		paragraph.innerText = "Maybe stay inside today..."
	}
	else {
		paragraph.innerText = "I'm not sure what to do."
	}
}