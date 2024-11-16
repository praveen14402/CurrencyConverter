const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json";

const dropdown = document.querySelectorAll(".dropdown select");

for (let select of dropdown) {
    for (let currencyCode in countryList) { 
        let newOption = document.createElement("option");
        newOption.innerHTML = currencyCode;
        newOption.value = currencyCode;
        select.appendChild(newOption); 
    }
}
