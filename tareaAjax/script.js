window.onload = function() {
    const select1 = document.querySelector('#region1');
    const select2 = document.querySelector('#region2');
    fetch('./data.json')
        .then(response => {
            if(!response.ok){
                throw new Error('API error :(');
            }
            return response.json();
        })
        .then(data => {
            data.sort((a, b) => a.name.common.localeCompare(b.name.common));

            data.forEach(country =>{
                const option1 = document.createElement('option');
                option1.value = country.name.common;
                option1.textContent = country.name.common;
                select1.appendChild(option1);
            
                const option2 = document.createElement('option');
                option2.value = country.name.common;
                option2.textContent = country.name.common;
                select2.appendChild(option2);
            });
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
        });
}