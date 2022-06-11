var map = L.map('map').setView([51.090909, 71.418214], 14.5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap by Manat and Andrey | IA-2002'
}).addTo(map);