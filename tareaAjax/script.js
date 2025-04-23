window.onload = function() {
    const select = document.querySelector('#select');
    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            if(!response.ok){
                throw new Error('API error :(');
            }
            response.json();
        })
        .then(data => {
            data.forEach(country =>{
                const option = document.createElement('option');
                option.value = country.name.common;
                option.textContent = country.name.common;
                select.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
        });
}