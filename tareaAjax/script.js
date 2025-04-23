window.onload = function() {
    const container = document.querySelector('#checkbox-container');
    fetch('./data.json')
        .then(response => {
            if(!response.ok){
                throw new Error('error en la API local :(');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(region =>{
                const label = document.createElement('label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.name = 'region';
                checkbox.value = region.region;

                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(region.region));
                container.appendChild(label);
            
            });
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
        });
}