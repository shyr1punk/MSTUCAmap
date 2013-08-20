/*global ymaps, console*/
var map, collection, knew, k1, k2, k3, k4, k5, metro, footnew, foot1, foot5, bus, stop0, stop1, stop2, stop3;

ymaps.ready(function () {
    'use strict';
    map = new ymaps.Map("map", {
        center: [55.843111468111914, 37.494887607375254],
        zoom: 16,
        behaviors: ['default', 'scrollZoom']
    });
    collection = new ymaps.GeoObjectCollection({}, {
        geoObjectCursor: 'point',
        geoObjectDraggable: true,
        balloonCloseButton: true
    });
    map.geoObjects.add(collection);
    knew = new ymaps.Placemark([55.84305110142008, 37.50643183497613],
        {
            iconContent: 'Главный корпус',
            balloonContent: 'Главный корпус'
        },
        {
            preset: 'twirl#blueStretchyIcon',
            draggable: true
        });
    k1 = new ymaps.Placemark([55.844886191220354, 37.48750616816373],
        {
            iconContent: '1',
            balloonContent: 'Первый корпус'
        },
        {
            preset: 'twirl#blueStretchyIcon'
        });
    k2 = new ymaps.Placemark([55.84500691743866, 37.487999694621756],
        {
            iconContent: '2',
            balloonContent: 'Второй корпус'
        },
        {
            preset: 'twirl#blueStretchyIcon'
        });
    k3 = new ymaps.Placemark([55.84412560387635, 37.487999694621756],
        {
            iconContent: '3',
            balloonContent: 'Третий корпус'
        },
        {
            preset: 'twirl#blueStretchyIcon'
        });
    k4 = new ymaps.Placemark([55.844318769949, 37.48849322108023],
        {
            iconContent: '4',
            balloonContent: 'Чётвёртый корпус'
        },
        {
            preset: 'twirl#blueStretchyIcon'
        });
    k5 = new ymaps.Placemark([55.84539323959425, 37.489394443308846],
        {
            iconContent: '5',
            balloonContent: 'Пятый корпус<br>Деканат ФПМиВТ<br>Кафедры:<br><ul><li>ВМКСС</li><li>ПМ</li><li>БИ</li><li>ВМ</li></ul>'
        },
        {
            preset: 'twirl#blueStretchyIcon'
        });
    metro = new ymaps.Placemark([55.84061222596051, 37.486197250166946],
        {
            balloonContent: 'Метро водный стадион, первый вагон из центра'
        },
        {
            preset: 'twirl#metroMoscowIcon'
        });
    stop0 = new ymaps.Placemark([55.839887777992075, 37.48649765757653],
        {
            balloonContent: 'Станция метро "Водный стадион"<br>Остановка автобусов: 123, 65, 72'
        },
        {
            preset: 'twirl#busIcon'
        });
    stop1 = new ymaps.Placemark([55.843666831881876, 37.50211884287914],
        {
            balloonContent: 'Нарвская ул. - Университет Гражданской Авиации<br>Остановка 123 автобуса'
        },
        {
            preset: 'twirl#busIcon'
        });
    stop2 = new ymaps.Placemark([55.8443791364399, 37.50254799632181],
        {
            balloonContent: 'Нарвская ул. - Университет Гражданской Авиации<br>Остановка автобусов: 65, 72'
        },
        {
            preset: 'twirl#busIcon'
        });
    stop3 = new ymaps.Placemark([55.84539324095464, 37.489780681408604],
        {
            balloonContent: 'Пулковская улица'
        },
        {
            preset: 'twirl#busIcon'
        });
    collection.add(knew);
    collection.add(k1);
    collection.add(k2);
    collection.add(k3);
    collection.add(k4);
    collection.add(k5);
    collection.add(metro);
    collection.add(stop0);
    collection.add(stop1);
    collection.add(stop2);
    collection.add(stop3);
    footnew = new ymaps.Polyline(
        [   [55.84051563199027, 37.48649765757322],
            [55.84200070989341, 37.49233414438642],
            [55.8444395003837, 37.50226904658398],
            [55.84430669903876, 37.50229050425606],
            [55.84453608249566, 37.503213184156984],
            [55.84446364542654, 37.50407149104146],
            [55.84278548705542, 37.50510145930291],
            [55.84291829344029, 37.5058095624828]
            ],
        {
            hintContent: 'Пешком от метро Водный стадион к главному корпусу'
        },
        {
            strokeColor: '#f00',
            strokeWidth: 4
        }
    );
    foot1 = new ymaps.Polyline(
        [   [55.84056392920328, 37.486647861280524],
            [55.841590208226805, 37.48581101206762],
            [55.841879975396935, 37.48521019724749],
            [55.84436706155123, 37.48336483744473],
            [55.84520007865479, 37.48694826868807],
            [55.84481375379174, 37.48722721842557]
            ],
        {
            hintContent: 'Пешком от метро Водный стадион к 1 корпусу'
        },
        {
            strokeColor: '#f00',
            strokeWidth: 4
        }
    );
    foot5 = new ymaps.Polyline(
        [   [55.84056392920328, 37.486647861280524],
            [55.84198863942099, 37.49244143275336],
            [55.84515178967609, 37.49003817347494],
            [55.84510349911175, 37.48980213908155]
            ],
        {
            hintContent: 'Пешком от метро Водный стадион к 5 корпусу'
        },
        {
            strokeColor: '#f00',
            strokeWidth: 4
        }
    );
    bus = new ymaps.Polyline(
        [   [55.8398696662564, 37.48652984408443],
            [55.83988174002646, 37.48729159144369],
            [55.84019566891551, 37.4884395769016],
            [55.840956332542696, 37.48857905177016],
            [55.84431877021237, 37.50195791033489]
            ],
        {
            hintContent: 'Автобус от остановки метро Водный стадион <br>до остановки Нарвская ул. - Университет гражданской авиации'
        },
        {
            strokeColor: '#0a0',
            strokeWidth: 4
        }
    );
    map.geoObjects.add(footnew);
    map.geoObjects.add(foot1);
    map.geoObjects.add(foot5);
    map.geoObjects.add(bus);
});
