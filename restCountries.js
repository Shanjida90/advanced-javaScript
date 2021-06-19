fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>{
    displayCountries(data)})


const displayCountries=countries=>{
    const countriesDiv=document.getElementById('countries')
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
const countryDiv=document.createElement('div');
// const h3=document.createElement("h3");
// h3.innerText=country.name;
// const paragraph=document.createElement("p");
// paragraph.innerText=country.capital;
// countryDiv.appendChild(h3);
// countryDiv.appendChild(paragraph);
// countriesDiv.appendChild(countryDiv);
const  countryInfo=`
<h3>${country.name}</h3>
<p class="capital-name">${country.capital}</p>
`
countryDiv.innerHTML=countryInfo;
countryDiv.className='country'
countriesDiv.appendChild(countryDiv);

}
}

