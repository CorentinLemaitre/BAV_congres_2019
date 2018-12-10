var wms_layers = [];

        var lyr_MapboxStreetsv10_0 = new ol.layer.Tile({
            'title': 'MapboxStreetsv10_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.mapbox.com/about/maps/">© Mapbox © OpenStreetMap</a>',
                url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
            })
        });var format_BAV_en_France_1 = new ol.format.GeoJSON();
var features_BAV_en_France_1 = format_BAV_en_France_1.readFeatures(json_BAV_en_France_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAV_en_France_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_BAV_en_France_1.addFeatures(features_BAV_en_France_1);var lyr_BAV_en_France_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BAV_en_France_1, 
                style: style_BAV_en_France_1,
    title: 'BAV_en_France<br />\
    <img src="styles/legend/BAV_en_France_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/BAV_en_France_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/BAV_en_France_1_2.png" />  40 - 50 <br />\
    <img src="styles/legend/BAV_en_France_1_3.png" />  50 - 70 <br />\
    <img src="styles/legend/BAV_en_France_1_4.png" />  70 - 90 <br />'
        });var format_Participants_2 = new ol.format.GeoJSON();
var features_Participants_2 = format_Participants_2.readFeatures(json_Participants_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Participants_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Participants_2.addFeatures(features_Participants_2);var lyr_Participants_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Participants_2, 
                style: style_Participants_2,
    title: 'Participants<br />\
    <img src="styles/legend/Participants_2_0.png" />  1,0000 - 3,2000 <br />\
    <img src="styles/legend/Participants_2_1.png" />  3,2000 - 5,4000 <br />\
    <img src="styles/legend/Participants_2_2.png" />  5,4000 - 7,6000 <br />\
    <img src="styles/legend/Participants_2_3.png" />  7,6000 - 9,8000 <br />\
    <img src="styles/legend/Participants_2_4.png" />  9,8000 - 12,0000 <br />'
        });

lyr_MapboxStreetsv10_0.setVisible(true);lyr_BAV_en_France_1.setVisible(true);lyr_Participants_2.setVisible(true);
var layersList = [lyr_MapboxStreetsv10_0,lyr_BAV_en_France_1,lyr_Participants_2];
lyr_BAV_en_France_1.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'category': 'category', 'value': 'value', });
lyr_Participants_2.set('fieldAliases', {'cartodb_id': 'cartodb_id', 'category': 'category', 'value': 'value', });
lyr_BAV_en_France_1.set('fieldImages', {'cartodb_id': '', 'category': '', 'value': '', });
lyr_Participants_2.set('fieldImages', {'cartodb_id': '', 'category': '', 'value': '', });
lyr_BAV_en_France_1.set('fieldLabels', {'cartodb_id': 'no label', 'category': 'no label', 'value': 'no label', });
lyr_Participants_2.set('fieldLabels', {'cartodb_id': 'no label', 'category': 'no label', 'value': 'no label', });
lyr_Participants_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});