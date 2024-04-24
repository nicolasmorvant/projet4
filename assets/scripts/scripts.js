$(document).ready(function()
{
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });


    //AJOUT DE LA MAP LEAFLET
    let map = L.map('map').setView([44.846673,-0.60658], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker = L.marker([44.846673,-0.60658]).addTo(map);
});
