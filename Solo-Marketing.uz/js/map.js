ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [41.32783093398015, 69.32854183862734],
        zoom: 12,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    },
);
myMap.geoObjects
.add(new ymaps.Placemark([41.32783093398015, 69.32854183862734], {
}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/marker.svg',
    iconImageSize: [50, 50],
}))


        
     myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
}


