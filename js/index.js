window.onload = function() {
    // Arreglo con los nombres de las cartas y sus rutas
    var cards = ['users', 'customers', 'products', 'sales'];

    // Contenedor donde se agregarán las cartas
    var cardContainer = document.getElementById('cardContainer');

    // Contenedor del menú
    var menu = document.querySelector('.menu');

    // Generar una carta y una opción de menú para cada elemento en el arreglo
    cards.forEach(function(cardName) {
        // Crear elemento de la carta
        var cardElement = document.createElement('div');
        cardElement.classList.add('card'); // Agregar clase para estilos

        // Contenido de la carta (título)
        var cardTitle = document.createElement('h2');
        cardTitle.textContent = toTitleCase(cardName); // Convertir el texto a Title Case
        cardElement.appendChild(cardTitle);

        // Descripción Lorem Ipsum
        var loremIpsum = document.createElement('p');
        loremIpsum.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae metus euismod, rhoncus metus eu, vulputate odio. Cras ac efficitur eros. Sed ultrices euismod dolor, ac pharetra odio lacinia sed.';
        cardElement.appendChild(loremIpsum);

        // Crear botón dentro de la carta
        var button = document.createElement('button');
        button.textContent = 'Ir a ' + cardName;
        button.addEventListener('click', function() {
            // Redireccionar a la página correspondiente al nombre de la carta
            window.location.href = cardName + '.html';
        });
        cardElement.appendChild(button);

        // Agregar la carta al contenedor
        cardContainer.appendChild(cardElement);

    });
};

// Función para convertir el texto a Title Case
function toTitleCase(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

