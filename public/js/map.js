mapboxgl.accessToken = 'pk.eyJ1IjoicmFqbmlzaDE5OTkiLCJhIjoiY2tieXIwcms2MHgxcTJ5bzQyYWN6ejIyZCJ9.XMV7SHLkPdW61IzQ8alevA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9,
center: [77.1025, 28.7041]
});
async function getStores() {
    const response = await fetch('/api/v1/stores');
    const result = await response.json();
    
    const stores = result.data.map((store) => {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [store.location.coordinates[0], store.location.coordinates[1]]
            },
            properties: {
                storeId: store.storeId,
                icon: 'shop'
            }
        }
    })
    loadMap(stores);
}
function loadMap(stores) {
    map.on('load', function() {
        map.addLayer({
            id: 'points',
            type: 'symbol',
            source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: stores
                }
            },
            layout: { //layout is all about the icon that is there in the map
                'icon-image': '{icon}-15',
                'icon-size': 1.5,
                'text-field': '{storeId}',
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-offset': [0, 0.9],
                'text-anchor': 'top'
            }
        });
    });

    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        })
    );
}

getStores();